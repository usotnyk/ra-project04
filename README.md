ra-project04: Cohabitant Co.

This applicaion is built using Angular 4. The "Latests Adventures" section is populated with the data received from a server through HTTP GET request. The user is able to view single adventure layout and  paginated list of adventures. The application implements Model-View-Conntroller architecture. The user is also able to submit his/her own adventure, the data is validated and is then sent to the server through HTTP POST request. Validation services are built into the form, so that the user is notified of invalid input instantly (CSS is used to display validity of each form control) to provide a better user experience. 

URL: 

Used tech and libraries:

- HTML5
- CSS3
- Angular 4
- Typescript
- Gulp build system
- SASS
- Font Awesome
- Google Fonts

Workflow

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
