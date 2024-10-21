const { body, query, validationResult } = require('express-validator');

const validateRegisterUser = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('phone').isMobilePhone().withMessage('Invalid phone number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validateAddExpense = [
  body('amount').isNumeric().withMessage('Amount must be a number'),
  body('purpose').notEmpty().withMessage('Purpose is required'),
  body('option').isIn(['equal', 'percentage','exact']).withMessage('Invalid option'),
  body('split').isObject().withMessage('Split must be an object'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validateGetUser = [
  query('email').optional().isEmail().withMessage('Invalid email format'),
  query('phone').optional().isMobilePhone().withMessage('Invalid phone number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validateGetExpenseById = [
  query('expId').isNumeric().withMessage('Expense ID must be a number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateRegisterUser,
  validateAddExpense,
  validateGetUser,
  validateGetExpenseById
};