# grapheneTest
Testing the example flask_sqlalchemy with a JS relay app

## Prerequisites

Start the example GraphQL service, as described in:

https://github.com/graphql-python/graphene/tree/master/examples/flask_sqlalchemy


## No relay

I first tried using react-relay, but run into compatibility issues
with graphene relay. Without relay, using react-redux, it works
fine.

Credits to the tutorial:
https://medium.com/@thisbejim/getting-started-with-redux-and-graphql-8384b3b25c56


## Configuration
Change server.js to point to the graphql service:

const GRAPHQL_SERVER = '127.0.0.1';
const GRAPHQL_PORT = 5000;

## Installation
npm install

## Running
npm start
