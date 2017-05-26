# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

May-19-2017

To do:

DONE - close alert + change shouldDisplayModel to false (ngStyle - display:none || [ngClass]="{'display-none-class': shouldDisplayModel === false}");

DONE - add esle to display "error" model if post was not submitted (ng-template);

- add interfaces for AllAdventures and Adventure;

DONE - All-adventures view: 
  -populate with data from allAdventures;
  -link each button to it's ID + pass to to singleAdventureView;

-Form: 
  -inidicate required fields visually;
  -add checks to the fields + display errors when filling the form; 
  DONE -add select dropdown to the form;

  DONE -SingleAdventureView:
    -add <aside> to show list of all adventures;
    -link each adventure to be displayed in SingleAdventureView;

Extra:

DONE -Add load more button to AllAdventures at the bottom;
-add mobile+tablet layout;
