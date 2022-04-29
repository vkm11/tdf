# Tdf-Template Driven Forms (V33.2):-
#Angular Forms V-33.1:-

#Forms:
	-Vital to business application
	-Create an experience that guides the user efficiently and effectively through the workflow
	*Developers:-
		-Data binding
		-Change tracking
		-Validation
		-Visual feedback
		-error messages
		-form submission

#Prerequisites:-
	-HTML
	-CSS
	-Javascript
	-Angular-Template, Component, Data Binding and Services

#Angular Forms:-

	Template   -->  Class   -->   Service    -->     Server
	    |		  |		  |
     Collect Data    Bind Data       Send Data


#Two Approaches
1) Template Driven Forms
--> Heavy on the component template

2) Reactive Forms
--> Heavy on the component class



#Template Driven forms v33.2:-

	-Easy to use and similar to angular js forms
	-two way data binding with ngmodel
	-Bulky HTML and minimal component code
	-Automatically tracks the form and form elements state and validity
	-Unit testing is a challenge
	-Readability decreases with complex forms and validations
	
	
##TDF:-

	-Generate a new CLI Project
	-Add the form HTML
	-Binding data
	-Tracking state and validity
	-providing visual feedback
	-Displaying error message
	-posting data to a server
	
#Track control state and validity

          	State   			             Class if true		  Class if false
	            |				                     	|             			|
-The control has been visited.   -->	  ng-touched	 -->	  ng-untouched

-The control's value has changed.  -->  ng-dirty	   -->    ng-pristine

-The control's value is valid    -->    ng-valid     -->    ng-invalid




# Tdf

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
