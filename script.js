const members = [
    {first_name:"John", last_name: "Doe", email:"johndoe@example.com", birthdate:"1999-12-31", salary:80000},
    {first_name:"Jane", last_name: "Smith", email:"janesmith@example.com", birthdate:"2015-09-01", salary:75000}
];



//OLD WAY DEMO - CONSTRUCTOR FUNCTION
/*function Employee(firstName, lastName, email, birthdate, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthdate = birthdate;
    this.salary = salary;
  }

  Employee.addEmployee = function(firstName, lastName, email, birthdate, salary) {
    return new Employee(firstName, lastName, email, birthdate, salary);
  };

  Employee.prototype.editEmployee = function(updates) {
    Object.assign(this, updates);
  };

  // Usage example:
  const bill = Employee.addEmployee("Bill", "Doe", "bill@example.com", "1990-01-01", 50000);
  console.log(bill);

  bill.editEmployee({ salary: 7777777, email: "xxxxxxx@example.com" });
  console.log(bill);*/


//ES6 way - CLASSES - Create a new Employee class that adds a new employee and console logs them
// Goals:
// 1. Create a new Employee class with a constructor for Employee giving them a firstname, lastname, email, and birthdate
// 2. Instantiate (i.e. create a new instance) of an Employee with your info and save it to a const with your first name
// 3. After step 2, console log your const and then try to console.log parts of the object
// 4. Then create a const array that creates many "new Employee" objects and says to an array.  Console this object as a whole and parts of it
// 5. Add methods to your class to "getEmployees" which just returns all the fields in the object.
//    Also add methods to addEmployee (this will be static) and a method to editEmployee
//    Test your methods using JS
// 6. Try to get instances of your class object to display in the table.  You can set the innerhtml of the
//    of the table to be empty and then replace it with the looped-through values of your object

class Employee {
    constructor(firstname, lastname, email, birthdate) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.birthdate = birthdate;
    }

    getEmployees(){
        return this;
    }
    static addEmployee(firstname, lastname, email, birthdate) {
        return new Employee(firstname, lastname, email, birthdate)
    }
    editEmployee(updates) {
        Object.assign(this, updates)
    }

}

//const jean = new Employee("Jean", "Brigido", "jean@gmail.com", "2002-11-14");
//console.log(jean.firstname);


//Try to output 3 instances of your class object into the table

const employees = [
    new Employee("Jean", "Brigido", "jean@gmail.com", "2002-11-14"),
    new Employee("Lebron", "James", "lebron@gmail.com", "1980-12-30"),
    new Employee("Luka", "Doncic", "luka@gmail.com", "2000-10-22")
];


console.log(employees);

const bill = Employee.addEmployee("Bill", "Doe", "bill@example.com", "1990-01-01", 50000);
console.log(bill);

bill.editEmployee({email: "xxxxxxx@example.com" });
console.log(bill);

//get table id and search for "tbody" in emp_mgmt in html
const tableBody = document.getElementById("employeeTable").querySelector("tbody");
//clear table
tableBody.innerHTML = '';

//loop through employees
employees.forEach(employee => {
    //declare variable to get info from employees
    const emp_details = employee.getEmployees();

    //create a row that create a 'tr' element in html
    const row = document.createElement('tr');

    //insert employee details into table
    row.innerHTML = `
        <td>${emp_details.firstname}</td>
        <td>${emp_details.lastname}</td>
        <td>${emp_details.email}</td>
        <td>${emp_details.birthdate}</td>
    `;
    //append info to the table body
    tableBody.appendChild(row);
})

/*function processOrder(orderId, callback) {
    console.log(`Processing order #${orderId}...`);
    setTimeout(() => {
        callback(`Order #${orderId} processed successfully`);
    }, 2000); // Simulate 2-sec processing time
}

// Usage
processOrder(101, (confirmation) => {
    console.log('Email sent:', confirmation);
});*/


/*Create a function sendInvoice(clientName, callback) that:
Simulates 1.5 - sec delay
Returns "Invoice sent to [clientName]"
Logs confirmation using a callback*/


function sendInvoice(clientName, callback) {
    console.log(`Invoice sending to ${clientName}...`);
    setTimeout(() => {
        callback(`Invoice to ${clientName} sent successfully`);
    }, 1500); // Simulate 2-sec processing time
}

// Usage
sendInvoice("Clint", (confirmation) => {
    console.log('Invoice sent:', confirmation);
});


/*function checkInventory(productId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const inStock = Math.random() > 0.2; // 80% chance in stock
            inStock ? resolve(`${productId} available`) :
                reject(`${productId} out of stock`);
        }, 1500);
    });
}

// Usage
checkInventory('WF-100')
    .then(console.log)
    .catch(console.error);*/


/*
Create verifyPayment(orderTotal) that:
Resolves if orderTotal < $5000
Rejects if orderTotal ? $5000(requires manager approval)
Test with $3000 and $6000 orders*/

function verifyPayment(orderTotal) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orderTotal < 5000) {
                resolve(`Payment of $${orderTotal} approved.`);
            } else {
                reject(`Payment of $${orderTotal} requires manager approval.`);
            }
        }, 1500);
    });
}
verifyPayment(3000)
    .then(console.log)
    .catch(console.error);

verifyPayment(6000)
    .then(console.log)
    .catch(console.error);

// Mock async functions  
async function verifyIdentity(customerId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate 90% success rate
            Math.random() < 0.9
                ? resolve()
                : reject("Identity verification failed");
        }, 1000);
    });
}

async function createAccount(customerId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ accountNumber: "ACC-" + Date.now() });
        }, 1500);
    });
}

async function sendWelcomeKit(customerId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Welcome email sent to ${customerId}@company.com`);
        }, 500);
    });
}

// Your onboarding function (unchanged)
async function onboardCustomer(customerId) {
    try {
        await verifyIdentity(customerId);
        const account = await createAccount(customerId);
        const welcomeEmail = await sendWelcomeKit(customerId);
        console.log("Account created:", account);
        console.log(welcomeEmail);
        return { success: true, account };
    } catch (error) {
        console.error('Onboarding failed:', error);
        return { success: false, error };
    }
}

// Test call of the function
onboardCustomer("CUST-12345");

 


/*Lab Challenge
Create an async function processRefund(requestId) that:
Simulates 1 - sec refund verification
Simulates 2 - sec payment reversal
Returns "Refund complete for request #X"*/
 
// Async function to process refund
async function processRefund(requestId) {

    // 1 second verification
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Refund verification completed for request #${requestId}`);

    // 2 second refund
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(`Payment refund completed for request #${requestId}`);

    return `Refund complete for request #${requestId}`;
}

// Test function call
processRefund("REQ-1001")
    .then(console.log)  // Expected: "Refund complete for request #REQ-1001"
    .catch(console.error);  // Expected if failed: "Refund failed for request #REQ-1001: Identity verification failed"
