### Installation & Setup:
1. Clone the repository
   ```bash
   git clone https://github.com/atharvakej/Covin-Assignment.git
   ```

2. Install dependencies
   ```bash
   npm install
   ```
3. Start Server
   ```bash
   npm start
   ```
4. For Testing 
    ```bash
   npm test
   ```


<pre>PS: Register New Users as DB will be empty</pre>

### API Doc:
<pre>/Convin-AI-API Docs.postman_collection.json</pre>


### Endpoints:
   ```bash
   1. /api/register/user -> Register user
   2. /api/user -> Retrieve user details
   3. /api/expense/add -> Add Expenditure
   4. /api/expense/user -> Retrieve individual expense of a single user
   5. /api/expenses/overall -> Retrieve overall expenses
   6. /api/generate-balance-sheet -> Generate balance sheet
   ```

### Testing using Chai/Mocha:
1. Test Cases
    ![Run Test](/Testing_images/Unit-test.png)

### Example Images:
1. Register
   ![Register](/Testing_images/Register.png)

2. Retrieve User
   ![Retrieve User](/Testing_images/getUser.png)
     
3. Add Expense
   ![Add Expense](/Testing_images/addexpense.png)

4. Individual Expense
   ![Individual Expense](/Testing_images/individual.png)

5. Overall Expense
   ![Overall Expense](/Testing_images/Overall.png)
   
6. Balance Sheet
   ![Balance Sheet](/Testing_images/Balance.png)

7. Report (PDF)
   ![Report](/reports/Report.pdf)


