# Project Name


The project is a Node.js backend application implemented using Nest.js framework, which utilizes an embedded database for data storage. It provides various APIs for managing cards and transactions for users. The backend follows efficient solutions and utilizes event sourcing concepts for transaction aggregation. Additionally, the project includes unit, integration, or end-to-end testing and is developed using TypeScript.

**Project Description:**

Technology Stack:

Backend Framework: Nest.js
Database: Embedded database (e.g., SQLite)
Language: TypeScript

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/srihari77/card-transactions.git
Install dependencies:

bash
Copy code
cd project
npm install
Running the Backend
To run the backend, use the following command:

bash
Copy code
npm start
The backend will start running on http://localhost:3000 by default.

Testing
Running Tests
To run unit tests, use the following command:

bash
Copy code
npm test
Testing Endpoints
You can test the endpoints using tools like Postman or curl.

Example curl command to test a GET request:

bash
Copy code
curl -X GET http://localhost:3000/cards
API Documentation
The API documentation is available at /api/docs endpoint when the backend is running. You can access it using a web browser.

For example:

bash
Copy code
http://localhost:3000/api/docs

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
