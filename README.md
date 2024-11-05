# Angular for Beginners

• 🔗 https://angular-university.io/lesson/angular-beginners-course-kickoff
• 🔗 https://github.com/angular-university/angular-course/tree/master

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

Source: 🔗 https://angular.dev/overview

## Model - View - Controller (MVC)

MVC is a design pattern used to decouple user-interface (view), data (model), and application logic (controller). This pattern helps to achieve separation of concerns.

🔗 https://www.codecademy.com/article/mvc


- **Model**: Model code typically reflects real-world things. This code can hold raw data, or it will define the essential components of your app. For instance, if you were building a To-do app, the model code would define what a “task” is and what a “list” is – since those are the main components of a todo app. 

- **View**: View code is made up of all the functions that directly interact with the user. This is the code that makes your app look nice, and otherwise defines how your user sees and interacts with it. 

- **Controller**: Controller code acts as a liaison between the Model and the View, receiving user input and deciding what to do with it. It’s the brains of the application, and ties together the model and the view.

------------------------

## Commands

• $ `ng new name-of-project` = spins up a new project skeleton including .gitignore, node, tsconfigs etc.
• $ `ng generate component name-of-component` = creates a new component including html/css/spec.ts/ts


------------------------

## Features

- The main feature of Angular Core is the ability of `defining our own custom HTML elements`. This allows us to extend the browser functionality with our own functionality.
- The second key feature is the ability to build our program in a way where our `data, available at the Component level, and the View definined at the HTML template are completely separate and can be bound together (binding)`.

------------------------

## Security

The following are native Angular security features:

- Angular does `HTML escaping`, meaning if someone tries to inject HTML into the website, the HTML will directly render as tags, opposed to functionally changing the design. To test, on the `title` value, inside the app.component.ts update the value to   title = `<h1>angular-course</h1>`.  If an attacker tries to inject a <script> the same thing happens. The HTML is escaped and the raw HTML of the script is rendered. 

------------------------


## DOM: Element - Events

Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element.

You can add listeners for any native events, such as: click, keydown, mouseover, etc. Check out the all available events on [elements on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element#events).


------------------------

## Syntax

{{ word }} = Interpolation syntax and allows us to access the data in the View. Javascript expression that will be evaluted in the context of the Component class. This is a binding expression. This syntax can also extract values from an object defined on the Component e.g. {{ data.title }}


### Binding

In Angular, a binding creates a dynamic connection between a component's template and its data. This connection ensures that changes to the component's data automatically update the rendered template.

- value="Test" is a plain string
- [value]="data.title"  will bind the path defined on the component
- [value]="'Plain string'" (note the single contained quotes) will render a plain string. But rather use the first example value="Plain string"
- <input class="demo" [value]="title" #titleInput/> the #titleInput is the name of the input box. This is called a Template Reference, and we can now refer to this reference at other parts of the template.
- `@Input()` has three methods: required, alias and transform e.g. `@Input({ required: true })`. This is good to use as it is better to get a compilation error, opposed to a run-time error.
- `@Output()` & `EventEmitter`: Use EventEmitter in components with the @Output directive to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance.
    - `$event` access the `event` object with the $event argument passed to the output event handler. e.g. `(courseSelected)="courseSelected($event)"`

💡 Template references and live updates of information on the website is one of the most important features of the Angular Core module. Automatically reflecting in the view, any modification of the data. This is a type of `change detection`.


### Directives

- `*ngFor` has been updated to `@for`
- `*ngIf` has been updated to `@if`

#### @for

🔗 https://angular.dev/api/core/@for

Note that the tracking function is mandatory ergo @for(x of y, track x.key). This is a safer developer experience to handle the removal/addition/change of element positions. Ensure the track expression is effectively used to identify each item `uniquely` e.g. by using ids/uuids etc. You can also write custom functions and invoke using `track functionName`. If you don't have a unique identifier in your array, as a last resort use `track $index`. Not as efficient for Angular but will resolve compilation errors. Best practise is to have a unique identifier.

Used in conjunction with `@empty` as a fallback.

Always available implicit variables:

- `$index` gives access to the index within the array
- `$count` gives a total count of the elements within the array

The following are useful for styling
- `$first`: The first element in the array
- `$last`: The last element in the array
- `$even`: Even elements in the array
- `$odd`: Odd elements in the array

💡 Note that `let` is needed for the extra options, but not for the main looping variable. With these additional options you can either do:
a. `let index = $index` then in the HTML = `[index]="index"`, this allows you to create aliases e.g. let indx = $index, or simply
b. Inside the html `[index]="$index"`. No let statement required.



⏭️ Resume at https://angular-university.io/lesson/angular-beginners-whats-next-ngfor