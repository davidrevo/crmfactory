Project Summary: Employee List
-----------------------------------
This project is built with AngularJS, Less, Gulp

Key Components:

1. Employee data is read from dummy "data/employee.json" json file using Angular HTTP service
2. Page consists of three parts: Head, Employee List and Foot
3. Custom directives are created to make page reusuable
4. Gulp workflow makes the development process automatic, maintainable, loose-coupling
5. Project document structure: bower_components (bower dependencies), build (development preview), dist (final distribution of project with everything minified), node_modules (node dependencies), src (source code), bower.json (bower configuration file), gulpfile.js (gulp configuration), package.json (node configuration file)

Preview Steps:

1. Open command line
2. Navigate to "crmfactory"
3. type in "gulp" to automatic compiling, build, and deployment
4. A browser will be opened for you to preview

Notes:
- "gulp clean" command can remove "build" & "dist" directories
- Project size is a bit big because of libraries/packages
