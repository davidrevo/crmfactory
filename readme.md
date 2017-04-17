Project Summary: Employee List
-----------------------------------
This project is built with AngularJS, Less, Gulp

Key Components:

1. Employee data is read from dummy "data/employee.json" json file using Angular HTTP service
2. Page consists of three parts: Head, Employee List and Foot
3. Custom directives are created to make page reusable
4. Gulp workflow makes the development process automatic, maintainable, loose-coupling
5. Project document structure: bower_components (bower dependencies), build (development preview), dist (final distribution of project with everything minified), node_modules (node dependencies), src (source code), bower.json (bower configuration file), gulpfile.js (gulp configuration), package.json (node configuration file)

Local Preview Steps:

1. Pull the project to your local PC
2. Open command line, navigate to the project root folder, type "npm install --save-dev" ("cnpm install --save-dev" if Chinese network) to install node packages.
3. Navigate to "crmfactory"
4. type in "gulp" to automatic compiling, build, and deployment
5. A browser will be opened for you to preview

Notes:
- "gulp clean" command can remove "build" & "dist" directories
- "src" is where source code written, "build" is development environment folder while "dist" is distribution environment folder

-----------------
Test Module (Karma + Jasmine)

Unit testing cases are added under "test" folder
- "test/testCase1.spec.js" test case is to verify a reverse function defined in "src/script/reverseFunc.js"
- "test/employeeCtrl.spec.js" is to test employee list controller
- coverage report is under "test/coverage" folder

Testing Tips:

- Need to install karma command line plugin by "npm install -g karma-cli"
- run "karma start" to begin unit testing
- karma configuration file is located in "/karma.conf.js"
