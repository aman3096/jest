# jest
test driven development using jest and webpack config for treating es6 modules and syntax.
This repository explains about the various test driven development scenarios that are built using Jest (a javascript testing library) 

## init of package.json
If you want to start the project from scratch then initialize a package.json. You can do this via this command 
    npm init -y 
   This will auto generate the package.json file
## Explaination of calculator.test.js and calculator.js
This is a calculator coding kata. Problem link https://osherove.com/tdd-kata-1
      #### calculator.test.js
        According to Uncle bobs TDD rule we first write test file to intentionally make it fail then we will write the business logic in order to pass. this file
        uses test() method of jest and checks whether the adddition method is present in calculator.js and checks for a specific precise checks.
        1. It uses async-await for async programming construct
        2. expect().toBe() are class methods used from jest library
     
      ####calculator.js
        this file has business logic for writing of the add function. For now I have focussed more on the coding kata for tdd and later scenarios I added more real- life
        scenarios like login.

##Explaination of calculator.test.js and calculator.js
    ###calculator coding kata -
      ####calculator.test.js
        According to Uncle bobs TDD rule we first write test file to intentionally make it fail then we will write the business logic in order to pass. this file
        uses test() method of jest and checks whether the adddition method is present in calculator.js and checks for a specific precise checks.
        1. It uses async-await for async programming construct
        2. expect().toBe() are class methods used from jest library
     
      ####calculator.js
        this file has business logic for writing of the add function. For now I have focussed more on the coding kata for tdd and later scenarios I added more real- life
        scenarios like login.

## file.test.js and file.js
      ### file.js
        the comments seen in this file are the format for the JSDoc format which does dynamic typechecking and later on we can generate documentation using documentation serve
        this function returns the addition of 2 number
     
      ### file.test.js
        this file uses various functions from jest library as to check for TDD practice
      
## fizzbuzz.test.js and fizzbuzz.js
    this is a solution for fizzbuzz coding kata using TDD. kata link https://codingdojo.org/kata/FizzBuzz/

## greeting.test.js and greeting.js
    this is a solution for greeting coding kata using TDD.Problem statement here https://github.com/testdouble/contributing-tests/wiki/Greeting-Kata

## login.test.js and login.js
  this uses a mock server to check for login of the user using TDD
    It uses basic business logic for checking if the correct user has logged in this time.
    
    
## JSDoc and Documentation
  the JsDoc format used by documentation.js enables the developer to check about the module on what does the params type would be? Also if we provide wrong type for a function defined 
  then it must be showing red underline for determining the users input.
  For enabling this  
    1. we must configure our IDE first. In our project, I have done and included in the .vscode folder settings.
    2. use documenation.js format in comments. For more info you can refer its documentation on https://github.com/documentationjs/documentation/blob/master/docs/GETTING_STARTED.md
  
## Explaination of package.json
### installation
run npm install or npm i in order install the dependencies and devDependencies required for the project

### dependencies used
    #### 1. Jest -
      A javascript testing library that is used for test-driven-development (TDD). For more info you can refer to its documentation at https://jestjs.io/docs/en/getting-started
      Before you continue, make sure jest is on your system. (If it's not installed, run npm install -g jest)
      
    #### 2. documentation 
      documentation is a documentation generator. It's used to generate documentation from comments within your code. documentation processes JavaScript comments in the JSDoc format.
      Before you continue, make sure documentation is on your system. ( If it's not installed, run npm install -g documentation )
    
    #### 3. node-fetch
      A light-weight module that brings window.fetch to Node.js. This library is required for bringing up fetch() in the project
      To install this on your system run npm install -g node- fetch

### devDependencies used
    #### 1. @babel/core
        a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
        To install run npm i -D @babel/core
        
    #### 2. @babel/preset-env
         a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!
          To install run npm i -D @babel/preset-env
          
    #### 3. @babel/preset-react
        A preset that allows us to use react JSX in our project after installing the react library
         To install run npm i -D @babel/preset-react
        
    #### 4. babel-loader
        This package allows transpiling JavaScript files using Babel and webpack.
        To install run npm i -D babel-loader
        
    #### 5. "css-loader"
      The css-loader interprets @import and url() like import/require() and will resolve them.
          npm install --save-dev css-loader
          
    #### 6. "mini-css-extract-plugin"
      This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
      To install run npm install --save-dev mini-css-extract-plugin

    #### 7. "webpack"
    webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging the project
    To install run npm i -D webpack
    
    #### 8. "webpack-cli"
    webpack CLI provides a flexible set of commands for developers to increase speed when setting up a custom webpack project.
    To install run npm install --save-dev webpack-cli
    

