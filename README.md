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

##### *ngFor

This is the predecessor to @for. 

Comparison:

```html
    <course-card *ngFor="let course of courses; index as i; first as isFirst"
      [class.is-first]="isFirst"
      [course]="course"
      (courseSelected)="courseSelected($event)"
      [index]="i + 1"
    ></course-card>
```

```html
    @for (course of courses; track course.id;){
    <course-card
      [class.is-first]="$first"
      [course]="course"
      [index]="$index"
      (courseSelected)="courseSelected($event)"
    ></course-card>
    }
    @empty{
      <h1>No courses exist</h1>
    }
```


#### @if

🔗 https://angular.dev/api/core/@if

This is less verbose that ngIf and more intuitive with no need for imports (immediately available for use).

Very similar to Javascript:
- if
- else if 
- else

##### *ngIf

This is the predecessor to @if.


Comparison:

```html
  <img alt="Angular Logo" *ngIf="course.iconUrl; else noImage" [src]="course.iconUrl" width="300" />

    <ng-template #noImage>
      <p>No image is available</p>
    </ng-template>
```

```html
 @if(course.iconUrl){
    <img
    width="300"
    alt="Angular Logo"
    [src]="course.iconUrl"
  />
  }
  @else{
    <h2>No image available!</h2>
  }
  ```


#### class vs [ngClass] vs [ngStyle]

- Most of the time we want to style our components with plain css classes. ergo class="".
- [ngClass] is used for conditionally adding/removing classes and should be used _a lot_ more than [ngStyle].
    - Typically we only want to use ngClass for *css state classes* that indicate the prescence of a state in the component.
- [ngStyle] is used for *data dependant content* e.g. the background image property in the below example. 


##### [ngClass]

🔗 https://angular.dev/api/common/NgClass?tab=description

Adds and removes CSS classes (styles) on an HTML element, depending on the content of the data.
Not meant to replace the class="" property, so if the styles are *constant* do use class. Whereas if the style
is *conditional*, use ngClass.

_Basic_

```html
<div class="course-card" *ngIf="course"
  [ngClass]="beginner">
```

_More advanced_

We can pass in properties and define them in the object:

```html
<div class="course-card" *ngIf="course"
  [ngClass]="{'beginner': false, 'course-card': true}">
```

We can pass in a function. This is the *recommended* approached as it keeps the template readable:

```html
<div class="course-card" [ngClass]="cardClasses()">
```


```ts
  cardClasses() {
    return {
      'beginner': this.course.category === "BEGINNER",
      'course-card': true
    }
  }

  // Alternative

  cardClasses() {
    if (this.course.category === "BEGINNER") {
      return ['beginner'] // We can also return the string directly
    }
  }
  ```

##### [ngStyle]

🔗 https://angular.dev/api/common/NgStyle

For a single style, the direct style directive can be used e.g.

```html
<div class="course-card" [style.text-decoration]="'underline'">
```

However, for multiple styles this is where ngStyle comes in useful. [ngStyle] takes an object of style properties.


```html
<div class="course-card" [ngStyle]="{'text-decoration': 'underline'}">
```

And same as [ngClass], we can return a function with the styles defined

```html
<div class="course-card" [ngStyle]="cardStyles()">
```

```ts
  cardStyles() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')',
      'text-decoration': 'underline',
    }
  }
```

#### [@switch]

🔗 https://angular.dev/api/core/@switch


Very intuitive and easy to reason about. 

- Switch directive wraps around
    - case for the scenario
    - default as the fallback

```html
  <div class="course-category">
    @switch(course.category){ 
      @case ("BEGINNER"){
      <div class="category">Beginner</div>
      } @case ("INTERMEDIATE"){
      <div class="category">Intermediate</div>
      } @case ("ADVANCED"){
      <div class="category">Advanced</div>
      } @default{
      <div class="category">Unknown</div>
      } 
    }
  </div>
```

##### [ngSwitch]

This is the predecessor to @switch.

```html
  <div class="course-category" [ngSwitch]="course.category">
    <div class="category" *ngSwitchCase="'BEGINNER'">Beginner</div>
    <div class="category" *ngSwitchCase="'INTERMEDIATE'">Intermediate</div>
    <div class="category" *ngSwitchCase="'ADVANCED'">Advanced</div>
    <div class="category" *ngSwitchDefault>Unknown</div>
  </div>
  ```
  
### Pipes

A pipe is a template mechanism to transform data.

The pipe is literally the | syntax. 


#### date pipes


The following is an example of formatting the startDate into the date format.

```ts
  startDate = new Date(2000, 0, 1)
```

```html
  <div class="demo">
          <div>Start Date: {{startDate | date}}</div>
  </div>

    <div class="demo">
          <div>Start Date: {{startDate | date: 'MM/dd/yyyy'}}</div>
  </div>
```

#### string formatting pipes

- uppercase
- lowercase
- titlecase

```ts
  title = COURSES[0].description
```

```html
    <div>Title: {{title | uppercase}}</div>
    <div>Title: {{title | lowercase}}</div>
    <div>Title: {{title | titlecase}}</div>
```

### number formatting pipes

- number
- currency
- percent

```ts
  price=9.99
```

```html
    <div>Price: {{price | number: '3.3-5'}}</div>
    <div>Price: {{price | currency: 'GBP'}}</div>
    <div>Percentage: {{rate | percent }}</div>
```

### Array & Object pipes

- slice
- json
- keyvalue

The following shows how to only include the first two elements in the array. 
0 is the start
2 is the end

So 0 and 1 are included:

```html
   @for (course of courses | slice: 0:2; track course.id;){
    <course-card
      [class.is-first]="$first"
      [course]="course"
      [index]="$index"
      (courseSelected)="courseSelected($event)"
    ></course-card>
    }
    @empty{
      <h1>No courses exist</h1>
    }
   <!--json example -->
     {{courses | json }}

   <!--keyvalue example -->
       <div>
    @for (pair of course | keyvalue; track pair.key;){
      {{pair.key + ': ' + pair.value}}
    }
  </div>
```

ℹ️ At this point, we moved to /angular-course-services. Everything above is focused on the View.

#### AsyncPipe

Allows you to build your components in a more reactive way.

How it differs from other pipes:
1. Behavior: Unlike other pipes (e.g., date, uppercase), which are stateless and transform static data, AsyncPipe works with continuously changing data streams.
2. Lifecycle Management: It handles subscription and cleanup, so you don't need to manually call .subscribe() or handle memory leaks.

In Angular, an Observable is a feature provided by the RxJS (Reactive Extensions for JavaScript) library, which is used to handle asynchronous data streams. Observables allow you to define a data source and perform operations like filtering, transforming, or combining the data over time.

Examples of observables

```ts
// HTTP Requests: The HttpClient service returns observables for handling data from APIs.
this.http.get('https://api.example.com/data').subscribe(data => console.log(data));

//Forms and Events: Observables can be used with reactive forms or DOM events.
this.form.valueChanges.subscribe(value => console.log(value));

//Routing: The ActivatedRoute service provides observables for route parameters.
this.route.params.subscribe(params => console.log(params.id));
```

______

## Clients

### HTTP Client

🔗 https://angular.dev/guide/http

Angular provides a client HTTP API for Angular applications, the HttpClient service class in @angular/common/http.

Example of using the GET method

```ts
 ngOnInit() {
    const params = new HttpParams().set("page", "1").set("pageSize", "10");

    this.http
      .get("/api/courses", {params})
      .subscribe((courses) => (this.courses = courses));
  }
```

______

## Clients


## Lifecycle hooks

### OnInit & ngOnInit()

🔗 https://angular.dev/api/core/OnInit/

It is invoked only _once_ when the directive is instantiated, after Angular has initialized all data-bound properties of the directive.









⏭️ Resume at [angular-university.io](https://angular-university.io/lesson/angular-beginners-async-pipe)
and reminder to head up to the AsyncPipe section