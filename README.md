# TDD Examples and typedef explaining and Login module
test driven development using jest and webpack config for treating es6 modules and syntax and mock login scenario done using a mock server.
This repository explains about the various test driven development scenarios that are built using Jest (a javascript testing library) 
## Usage of Login.js in other projects
 In order to use the Login.js file in other projects, use the path "modular-login-sdk/src/login" in order to use the login.js
 
 ### Example of usage of login.js
 Login.js has one function name doLogin() which takes 3 params -userName, password and the login url (mock server) and has a return type of boolean
  ```
  doLogin( userName, pass, mockServerURL)  //returns true or false on the basis of the 3 params
  userName- String where userName needs to be provided
  password - String where password would be stored
  mockServerURL - String where URL of mock server is kept
  ```
 #### calculator.js
   This file has business logic for writing of the add function. For now I have focussed more on the coding kata for tdd and later scenarios I added more real- life scenarios like login.

  ## calculator coding kata -
   #### calculator.test.js
 According to Uncle bobs TDD rule we first write test file to intentionally make it fail then we will write the business logic in order to pass. this file
 uses test() method of jest and checks whether the adddition method is present in calculator.js and checks for a specific precise checks.
 1. It uses async-await for async programming construct
 2. expect().toBe() are class methods used from jest library
     
#### calculator.js
This file has business logic for writing of the add function. For now I have focussed more on the coding kata for tdd and later scenarios I added more real-life scenarios like login.

## file.test.js and file.js
  ### file.js
   The comments seen in this file are the format for the JSDoc format which does dynamic typechecking and later on we can generate documentation using      documentation serve
This function returns the addition of 2 number  
   ### file.test.js
   This file uses various functions from jest library as to check for TDD practice
      
## fizzbuzz.test.js and fizzbuzz.js
   This is a solution for fizzbuzz coding kata using TDD. kata link https://codingdojo.org/kata/FizzBuzz/

## greeting.test.js and greeting.js
   This is a solution for greeting coding kata using TDD.Problem statement here https://github.com/testdouble/contributing-tests/wiki/Greeting-Kata

## login.test.js and login.js
  This uses a mock server to check for login of the user using TDD
    It uses basic business logic for checking if the correct user has logged in this time.
       
## JSDoc and Documentation
  JsDoc format used by documentation.js enables the developer to check about the module on what does the params type would be? Also if we provide wrong type for a function defined then it must be showing red underline for determining the users input.
  For enabling this  
    1. we must configure our IDE first. In our project, I have done and included in the .vscode folder settings.
    2. use documenation.js format in comments. For more info you can refer its documentation on https://github.com/documentationjs/documentation/blob/master/docs/GETTING_STARTED.md
  
