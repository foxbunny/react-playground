# React playground

This is a very simple React app that demos a few interesting concepts:

1. Splitting components between state management and view rendering (see `Greeter.js` vs `greeting-editor.js`).
1. Testing the state updates using `setState` spy (see `Greeter.test.js`, L11).
1. Testing views using `react-testing-library` and snapshots (see `greeting-editor.test.js`).
1. Usage of `prop-types` library to validate props (see `Greeter.js` and `greeting-editor.js`).
1. Avoiding method binding by using anonymous functions (see `Greeter.js`, L16-L17).
1. Using destructuring in an event handler to avoid passing the event object to a method (see `Greeter.js`, L16).
