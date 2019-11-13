# application-state

### Author: Antonella Gutierrez

### About
Refactored mood application so it uses action creators and selectors.

### Links and Resources
* [submission PR](https://github.com/antonella-401-advanced-javascript/application-state/pull/2)
* [travis](https://travis-ci.com/antonella-401-advanced-javascript/application-state/builds/136267390)

###  Components
* `Controls.js`
  * This component will return the click actions
* `Face.js`
  * This component will return the emoji
* `Moods.js`
  * This component maps state and dispatch to props, renders Controls and Face components and passes them down their functionalities
* `Store.js`
  * This component will set initial state, create store and define switch cases
* `App.js`
  * This component render the Moods component
* `Index.js`
  * This component connects to the redux store and passes it down to the App component

### Setup
#### .env requirements
* PORT - 7890
#### Running the app
* npm run build
* npm run start
#### Tests
* Unit Tests: npm run test
* Lint Tests: npm run lint