

function same() {

}

/**************         JEST       ************************ 
 * 
 * 
 * 
 * Jest is a popular JavaScript testing framework developed by Facebook. It is widely used for testing React applications, but it can be used for any JavaScript project. Jest 
 * provides a simple and powerful way to write and run tests. 
 * 
 * Jest has a focus on simplicity
 * Does not support paramtetized testing
 * Makes test which keeps track of large objects with ease
 * Installation:
 * npm install --save-dev jest

HOW TO CONTINUOUSLY RUN TESTS
- Using jest, check the package.json file, change the test to "jest -- watchAll"
The above helps your test automatically run after any code is deleted
 * 

GOALS OF UNIT TESTING
Isolation
Automation
Early detection of defect
Maintainability

TEST CASE: A set of inputs , execution condition and expected 
results that are used to verify the correctness of a unit

TEST SUITE: A collection of test cases that are grouped together

TEST FIXTURE: The preparation needed to run a test such as setting 
up the initial condition/environment for the unit being testes

MOCKING - Mocks simulate the behaviour of external components 

Writing a Simple Test:
Jest tests are typically placed in a folder named 
__tests__ or have a .test.js or .spec.js file extension.


Matchers:
Jest uses "matchers" to test values in various ways. 
In the example above, we used the toBe matcher to check if the result of sum(1, 2)
 is equal to 3. Jest provides a variety of matchers for different types of assertions.

 * 
 * 
 * */ 

Writing a Simple  JEST Test:

// sum.js
function sum(a, b) {
    return a + b;
  }
  
  module.exports = sum;

  // sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

Running Tests:
npx jest


Async Tests:
// asyncExample.test.js
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('hello world');
      }, 1000);
    });
  }
  
  test('fetchData resolves to hello world', () => {
    return fetchData().then((data) => {
      expect(data).toBe('hello world');
    });
  });
  

  Mocking:
Jest provides powerful mocking capabilities. 
For example, you can easily mock API calls:
// api.js
export const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  };

  Testing Functions:
  Checking if a Function is Defined:
function add(a, b) {
  return a + b;
}

Checking Return Value of a Function:
test('add function is defined', () => {
  expect(add).toBeDefined();
});

function multiply(a, b) {
    return a * b;
  }
  
  test('multiply function returns correct value', () => {
    expect(multiply(2, 3)).toBe(6);
  });
  


// api.test.js
import { fetchData } from './api';

jest.mock('./api');

test('fetchData returns the correct data', async () => {
  fetchData.mockResolvedValue({ someData: 'hello' });

  const data = await fetchData();

  expect(data.someData).toBe('hello');
});


Testing Arrays:
Checking for Array Length:
test('array length', () => {
    const myArray = [1, 2, 3];
    expect(myArray).toHaveLength(3);
  });

  Checking for Specific Values in Array:
  test('array includes a value', () => {
    const myArray = [1, 2, 3];
    expect(myArray).toContain(2);
  });
    
  Testing Objects:
  Checking for Object Property:
  test('object has property', () => {
    const myObject = { name: 'John', age: 25 };
    expect(myObject).toHaveProperty('name');
  });
  

  Checking for Object Property with Value:
  test('object property has a specific value', () => {
    const myObject = { name: 'John', age: 25 };
    expect(myObject).toHaveProperty('age', 25);
  });
  
  

APIS
APIs (Application Programming Interfaces) are a crucial part of web development, allowing different software systems to communicate with each other.
 In the context of JavaScript and Node.js, APIs are often used to connect frontend applications with backend servers.


/*
 HTTP Verbs:
HTTP (Hypertext Transfer Protocol) defines a set of methods, often referred to as "verbs," that indicate the desired action to be performed on a resource. Here are the most commonly used HTTP verbs:

GET: Used to request data from a specified resource. GET requests should only retrieve data and have no other effect.

POST: Used to submit data to be processed to a specified resource. The data is included in the body of the request.

PUT: Similar to POST, but used to update a resource or create a new resource if it does not exist.

DELETE: Used to request that a resource be removed.


HTTP status codes are three-digit numbers that provide information about the status of a request made by a client to a server. They are part of the HTTP/1.1 standard and are sent by the server in response to a client's request made to the server.

Here's a breakdown of some common HTTP status code ranges and examples:

1xx Informational
100 Continue:
Indicates that the initial part of the request was received and understood.
Example: The server informs the client to continue with the request.
2xx Success
200 OK:

Indicates that the request was successful.
Example: A successful GET request.
201 Created:

Indicates that the request resulted in the creation of a new resource.
Example: After a successful POST request to create a new resource.
204 No Content:

Indicates that the server successfully processed the request but there is no content to send back.
Example: A successful DELETE request.
3xx Redirection
301 Moved Permanently:

Indicates that the requested resource has been permanently moved to another location.
Example: When a page has been permanently moved to a new URL.
304 Not Modified:

Indicates that the resource has not been modified since the last specified time.
Example: Used in response to conditional GET requests to save bandwidth.
4xx Client Error

400 Bad Request:
Indicates that the server cannot or will not process the request due to a client error.
Example: Malformed request syntax or invalid request message framing.
401 Unauthorized:

Indicates that the request has not been applied because it lacks valid authentication credentials.
Example: Accessing a protected resource without providing proper authentication.
403 Forbidden:

Indicates that the server understood the request, but it refuses to authorize it.
Example: Attempting to access a resource without the necessary permissions.
404 Not Found:

Indicates that the server could not find the requested resource.
Example: Requesting a URL that does not exist.
5xx Server Error
500 Internal Server Error:

Indicates that the server has encountered a situation it doesn't know how to handle.
Example: A generic error message returned when an unexpected condition was encountered.
502 Bad Gateway:

Indicates that the server, while acting as a gateway or proxy, received an invalid response from an inbound server.
Example: The server acting as a gateway received an invalid response from an upstream server.


*/

















/*   UNIT TESTING     */
/* . Unit Testing:
Description: In unit testing, individual units or components of a software application are tested in isolation. 
The goal is to validate that each unit of the software performs as designed.
Example: Testing a function or a method in isolation from the rest of the application using test cases.
2. Integration Testing:
Description: Integration testing involves testing the interaction between different units or components of a system. The goal is to ensure that these units work together as expected.
Example: Testing the integration of a front-end component with a back-end API.
3. Functional Testing:
Description: Functional testing evaluates the functionality of a software application by testing it against the functional requirements. It involves testing the entire system.
Example: Testing the functionality of a web application by interacting with its user interface.
4. End-to-End (E2E) Testing:
Description: E2E testing simulates the complete user experience by testing a software application from start to finish. It often involves automated testing of the application in a production-like environment.
Example: Using tools like Cypress or Selenium to automate browser interactions and test user flows.
5. Regression Testing:
Description: Regression testing ensures that new code changes do not negatively impact existing functionalities. It involves re-running previously executed test cases after code changes.
Example: After making changes to a codebase, running a suite of tests to check if existing features still work as intended.
6. Performance Testing:
Description: Performance testing assesses the responsiveness, speed, and overall performance of a software application under different conditions. It helps identify potential bottlenecks.
Example: Load testing a web server to see how it performs under a high volume of simultaneous users.
7. Security Testing:
Description: Security testing focuses on identifying vulnerabilities or weaknesses in a software system that could be exploited by malicious users.
Example: Using tools to scan for common security issues such as SQL injection or cross-site scripting (XSS) vulnerabilities.
8. Snapshot Testing:
Description: Snapshot testing captures the "snapshot" of the expected output of a component or function and compares it to the current output during subsequent test runs.
Example: Using Jest snapshots to verify that the output of a React component matches the expected output.
9. Mocking and Stubbing:
Description: Mocking and stubbing involve replacing certain parts of the code with predefined responses to simulate behavior and isolate units during testing.
Example: Using Jest to mock API calls or external dependencies to test specific parts of the code in isolation.
10. Acceptance Testing:
Description: Acceptance testing ensures that a system meets the acceptance criteria and satisfies the stakeholders' requirements.
Example: Conducting user acceptance testing (UAT) to ensure that the software meets business and user expectations.
These testing types can be used in combination to create a comprehensive testing strategy for a JavaScript application. The choice of testing type depends on the specific goals and requirements of the project.

*/





/* 
    TEST DRIVEN DEVELOPMENT (TDD)

    Test-Driven Development (TDD):
Overview:
TDD is a software development approach where tests are written before the actual code is implemented. The development process in TDD typically follows these steps:

Write a Test: Developers write a test for a small piece of functionality that is yet to be implemented. This test should fail initially since the corresponding code doesn't exist.

Write Code: Developers then write the minimum amount of code necessary to make the test pass. The goal is to fulfill the requirements of the test and nothing more.

Run Tests: Run all tests to ensure that the newly written code doesn't break existing functionality.

Refactor Code (if needed): If the code can be improved without breaking any tests, developers refactor it. The tests act as a safety net, providing confidence that existing functionality is not affected.

Repeat: Continue this cycle by writing a new test for the next piece of functionality and repeating the process.

Benefits:

Ensures that each piece of code has a corresponding test.
Encourages modular and maintainable code.
Provides a safety net for refactoring and changing code.

Example:
Consider a simple function for adding two numbers:
// Step 1: Write a test
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

// Step 2: Write code
function add(a, b) {
  return a + b;
}



Behavior-Driven Development (BDD):

Behavior-Driven Development (BDD):
Overview:
BDD is an extension of TDD that focuses on collaboration between developers, QA, and non-technical stakeholders. BDD uses a natural language specification to describe the behavior of the system. The process often involves the use of a tool like Cucumber or Jasmine.

Write a Specification: The behavior of the system is described in a natural language format, often using the "Given-When-Then" structure. This specification is called a feature file.

Automate the Specification: The natural language specifications are translated into executable tests. These tests then drive the development process.

Write Code to Fulfill Tests: Developers implement the necessary code to make the automated tests pass.

Run Tests: The automated tests are executed to verify that the implemented code meets the specified behavior.

Review and Refactor: Developers, testers, and stakeholders review the specifications and tests. The process is repeated for additional features.

Benefits:

Encourages collaboration between technical and non-technical team members.
Provides a clear, human-readable specification of the system's behavior.
Helps ensure that development aligns with business requirements.
Example:
Consider a BDD feature file for the same addition example:

In summary, TDD and BDD are methodologies that emphasize the importance of testing, but they differ in their approach and the level of collaboration they encourage between developers and non-developers. TDD focuses on writing tests before code, while BDD focuses on creating human-readable specifications that drive both development and testing.
*/






/************* HURL********************
 * Commans line tools that runs  http requests defined in a simple plan test format
 * It can chain requests, capture value and evaluate queries on headers and body response
 * Hurl is very versatile, it can bse used fetching date and testing http sessions
 * 
 * 
 * 
*/

/* 
WEB SCRAPING
A technique used to collect data from websites and save it in a local file. It may use a HTTP requet or web browser to access the web

Cheerio - This is a fast flexible and lean implemantation of core jquery designed specifically for the server. It is a popular library for web scraping and parsing HTML in NodeJs

*/






/*****************  BENEFITS OF AUTOMATED TESTING 
 * 
 * 
 * 
 * Faster Feedback Loop:

Automated tests can be run much faster than manual tests, providing rapid feedback to developers. This speed allows for quicker identification and resolution of issues.
Early Detection of Bugs:

Automated testing enables the early detection of bugs and issues in the development process. Identifying and fixing problems at an early stage helps reduce the cost of development and ensures a more stable codebase.
Repeatability and Consistency:

Automated tests can be executed consistently, eliminating the variability introduced by human testers. This ensures that tests are repeatable and can be run with the same conditions every time.
Cost-Efficiency:

While there is an initial investment in creating automated tests, the long-term benefits include significant time and cost savings. Automated testing reduces the need for manual testing efforts, especially for repetitive and time-consuming tasks.
Regression Testing:

Automated testing is particularly effective for regression testing. Whenever new features are added or changes are made, automated tests can quickly verify that existing functionalities are not adversely affected.
Increased Test Coverage:

Automated testing allows for a broader and more comprehensive test coverage. It's easier to create and run a large number of tests, covering various scenarios and edge cases that might be impractical to test manually.
Parallel Execution:

Automated tests can be executed in parallel on different environments and configurations, enabling faster test cycles. This is especially valuable in a continuous integration/continuous deployment (CI/CD) environment.
Continuous Integration and Continuous Deployment (CI/CD):

Automated testing integrates seamlessly with CI/CD pipelines. Continuous testing as part of the development pipeline ensures that code changes are validated automatically before deployment.
Improved Code Quality:

Automated tests enforce code quality standards. When tests are integrated into the development process, developers are more likely to write modular, maintainable, and well-tested code.
Enhanced Confidence in Releases:

Automated tests provide a safety net for code changes. Having a suite of tests that pass gives development teams and stakeholders confidence that the software is in a reliable state for release.
Resource Optimization:

Automated testing allows human testers to focus on more complex and exploratory testing tasks that require creativity and critical thinking. This optimization of resources leads to a more efficient testing process.
Documentation and Knowledge Transfer:

Automated tests serve as documentation for the expected behavior of the software. They provide a clear understanding of the system's functionality and can facilitate knowledge transfer among team members.
   */
