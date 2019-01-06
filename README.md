# AngularWeatherElement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## How to use ?

Clone this project

To install packages run command : npm install

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

I have added one more HTML file in the project named as 'weather.html' in which I have called the custom angular element.
For this to work, you need to copy 'ng-city-weather.js' file from elements folder from angular project which is at source level.
Place ng-city-weather.js, weather.html file at same level and run the HTML file in browser. You will see the output.

## Steps to create angular-element :
1. You'll need just a few things installed to get started with Angular Elements:
Angular CLI (version 6 or 6+)
NPM (I'm using version 6.2.0)
Node (I'm on version 11.0.2)
2. Create Angular project
ng new project-name
cd project-name
ng serve
3. Install angular elements package via npm : npm install @angular/elements
4. Install web components package: npm install @webcomponents/custom-elements
5. Modify pollyfills.js:
 // Used for browsers with partially native support of Custom Elements
import '@webcomponents/custom-elements/src/native-shim';
// Used for browsers without a native support of Custom Elements
import '@webcomponents/custom-elements/custom-elements.min';
6. App module changes:
import {createCustomElement} from "@angular/elements";
bootstrap: [],
entryComponents: [WeatherDetailsComponent]
 export class AppModule {

 a. constructor(private injector: Injector) {
   const customElement = createCustomElement(WeatherDetailsComponent,    {injector: injector});

   customElements.define('ng-weather', customElement);
 }

 ngDoBootstrap() {}
}
7. Exporting Angular element for rest of the world!
a. ng build --prod
b. npm install fs-extra concat --save-dev
c. create a file named build-script.js on the same folder level as of package.json file
d. Package.json : "build:elements": "ng build --prod --output-hashing=none && node build-script.js"
e. Src level = create new folder named elements
f. npm run build:elements : It will create bundled file in elements folder which is bundle of main.js, runtime.js, pollyfills.js
e. Import this file in react/any other app and call custom element

