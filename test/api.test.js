const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Import the app
const { expect } = chai;

chai.use(chaiHttp);

describe('API Routes Tests', () => {
  let userId, expenseId;

  // Test /api/register/user
  it('POST /api/register/user - Should register a user successfully', (done) => {
    chai
      .request(app)
      .post('/api/register/user')
      .send({ name: 'Alice', email: 'alice@example.com', phone: '9876543210' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('message', 'Registration successful');
        userId = res.body.userId;
        done();
      });
  });

  // Test /api/expense/add
  it('POST /api/expense/add - Should add an expense', (done) => {
    chai
      .request(app)
      .post('/api/expense/add')
      .send({
        amount: 100,
        purpose: 'Lunch',
        option: 'equal',
        split: { [userId]: 100 },
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('message', 'Expense added successfully');
        expenseId = res.body.expId;
        done();
      });
  });

  // Test /api/user
  it('GET /api/user - Should fetch user by email or phone', (done) => {
    chai
      .request(app)
      .get('/api/user')
      .query({ email: 'alice@example.com' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.be.an('array').with.length.greaterThan(0);
        done();
      });
  });

  // Test /api/expense/user
  it('GET /api/expense/user - Should fetch user expenses', (done) => {
    chai
      .request(app)
      .get('/api/expense/user')
      .query({ userId })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.have.property('total').that.is.a('number');
        done();
      });
  });

  // Test /api/expense
  it('GET /api/expense - Should fetch an expense by ID', (done) => {
    chai
      .request(app)
      .get('/api/expense')
      .query({ expId: expenseId })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body[0]).to.have.property('exp_id', expenseId);
        done();
      });
  });

  // Test /api/expenses/overall
  it('GET /api/expenses/overall - Should fetch overall expenses', (done) => {
    chai
      .request(app)
      .get('/api/expenses/overall')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.be.an('array');
        done();
      });
  });

  // Test /api/generate-balance-sheet
  it('GET /api/generate-balance-sheet - Should generate balance sheet PDF', (done) => {
    chai
      .request(app)
      .get('/api/generate-balance-sheet')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('filePath');
        done();
      });
  });
});
