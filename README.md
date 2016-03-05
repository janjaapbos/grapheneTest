# grapheneTest
Testing the example flask_sqlalchemy with a JS relay app

## Prerequisites

Start the example GraphQL service, as described in:

https://github.com/graphql-python/graphene/tree/master/examples/flask_sqlalchemy

## Configuration
Change server.js to point to the graphql service:

const GRAPHQL_SERVER = '127.0.0.1';
const GRAPHQL_PORT = 5000;

## Installation
npm install

## Running
npm start


## Current error:
I am doing something wrong. Loading the JS app fires the following query:

    query App{
      allEmployees{...F0}} fragment F0 on Employee{id,name}

Which gives the following error:

    {
      "errors": [
        {
          "message": "Fragment F0 cannot be spread here as objects of type EmployeeDefaultConnection can never be of type Employee",
          "locations": [
            {
              "column": 16,
              "line": 2
            }
          ]
        }
      ]
    }
