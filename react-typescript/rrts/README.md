## Available Scripts

## React Exercises

What you'll need

- yarn version 1.17+
- visual studio code
- Creating a react project with typescript
- Use yarn to create your react application.

```javascript
yarn create react-app my-app --typescript
```

Create unit tests for every exercise.

## Exercise 1

Locate App.tsx and add a button that shows an alert when clicked.

## Exercise 2

Create a component named DogDetails that display's a dog's name and image and a button 'Bark!'. Render this component on App.
Make sure that the name and image are passed as props to the component.

Tip: Write the component as a function, instead of using the class syntax. For more information, look at this article.

## Exercise 3

On DogDetails add a new prop called onBark that accepts a function.
Whenever the bark button is clicked, this prop should be called.
Use this prop to display an alert message 'Woof! Woof!' when the button is clicked.

> Tip: the function that displays the alert should be defined on App and passed as prop to DogDetails.

## Exercise 4

Add a button 'Scold!' and a scolding counter to the DogDetails component. When the user clicks on the button, the counter increments.

Tip: use React's useState hook to do this. [Tip.](https://kentcdodds.com/blog/react-hooks-whats-going-to-happen-to-my-tests)

## Exercise 5

Create a new component named CreateBeerForm. This form will have the following inputs:

- beer name: text input
- beer type: combobox with different beer types (Ale, Lager, Stout, etc)
- has corn: checkbox
- ingredients: text area
- When the user clicks on the submit button, the values on the form must be written on the console. For this exercise, no new libraries are allowed

> Tip: use React's useState hook to do this.

## Exercise 6

Create a new component named CreateBeerFormikForm. This form will have the following inputs:

- beer name: text input
- beer type: combobox with different beer types (Ale, Lager, Stout, etc)
- has corn: checkbox
- ingredients: text area
- When the user clicks on the submit button, the values on the form must be written on the console. For this exercise, use the formik library

> Please tell me you are already splitting your code in more than on file.

## Exercise 7

Add validation on both forms.

- beer name: required
- beer type: required
- ingredients: required

> If the form is not valid, the submit button should be disabled. yup can be used for validation if you want.

## Exercise 8

Use the components of Material UI to improve the ui of the form. Input, Card, Button, etc are probably going to be needed for this.

## Exercise 9

Use the layout components of Material UI to display the components created so far as follows:
| DogDetails | CreateBeerForm | CreateBeerFormikForm |
| ---------- | :------------: | -------------------: |

## Exercise 10

Create the component DogList. This component accepts an array of dogs and displays them in a list. To get the list of dogs, consume the Dogs API using the browser's fetch method. Each item of the list should show the name of a breed (you don't need to include sub-breeds). Make sure that the first letter is capitalized.

> Do not display a loading indicator while the API is being called yet. This will be done in another exercise

> You can't use any external library that does http communication on this exercise.

> Tip: think about testability and the responsabilities of each component. Is DogList the only component you will need to create?

> Tip: Consider using lodash's capitalize and map methods.

> Tip: Read React's documentation about lists

## Exercise 11

Change the DogList component to show an image for each item of the list. Look into the API documentation to realize how to do it

## Exercise 12

Replace the use of fetch for an external library like superagent.

> If you have time: find out what are the limitations of fetch

Exercise 13

Display a loading indicator while the communication with the api is being made.

> Tip: Think about where the variable that controls the loading state should be

Exercise 14

Combine the components DogList and DogDetails in a way that whenever the user clicks on an item of the list, that item is highlighted and the selected dog is shown in DogDetails component.

> Tip: pay attention about how you are passing data across the components

Exercise 15

Change the DogList component to show the scolding counter for each item. Whenever the 'Scold!' button is clicked on DogDetails the counter must be incremented consistently.

Exercise 16

Create a DogFilter component. This component will display one button for each letter from A to Z. Use a radio component to do that. Each button will have a number showing how many dogs of the list start with that letter.

Combine them with the other two components.

When the use clicks on a button, the DogList should only show the rows with dogs whose names start with the selected letter.

Exercise 17

Refactor your code to use effectorjs. Using this lib, you should be able to concentrate all status changes in one place, and remove the use of state of all components.
