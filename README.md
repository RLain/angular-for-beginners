# Angular for Beginners

https://angular-university.io/lesson/angular-beginners-course-kickoff

## Set up 
- Have Node.js
- Have an IDE
- $ npm i -g @angular/cli
- Angular CLI is invoked using the ng command e.g. $ ng --version 
- To spin up a new project $ ng new angular-course. This creates a directory containing
   - Node modules and package setup including angular scripts e.g. npm start = ng servce
   - TSconfig
   - gitignore
   - editorconfig
   - Angular json

## What is angular?

Angular is a web framework that empowers developers to build fast, reliable applications.

Maintained by a dedicated team at Google, Angular provides a broad suite of tools, APIs, and libraries to simplify and streamline your development workflow. Angular gives you a solid platform on which to build fast, reliable applications that scale with both the size of your team and the size of your codebase.

Source: https://angular.dev/overview

## Model - View - Controller (MVC)

MVC is a design pattern used to decouple user-interface (view), data (model), and application logic (controller). This pattern helps to achieve separation of concerns.

https://www.codecademy.com/article/mvc


- **Model**: Model code typically reflects real-world things. This code can hold raw data, or it will define the essential components of your app. For instance, if you were building a To-do app, the model code would define what a “task” is and what a “list” is – since those are the main components of a todo app. 

- **View**: View code is made up of all the functions that directly interact with the user. This is the code that makes your app look nice, and otherwise defines how your user sees and interacts with it. 

- **Controller**: Controller code acts as a liaison between the Model and the View, receiving user input and deciding what to do with it. It’s the brains of the application, and ties together the model and the view.
