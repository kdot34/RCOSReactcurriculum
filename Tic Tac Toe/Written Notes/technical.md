# Tic Tac Toe Tutorial


## Set Up
* Option 1: Write code in browser
* Option 2: Local Development Environment

## What is React?
* JS library for building user interfaces
* Compose complex UIs from small and isolated pieces of code called "Components"
* React.Component subclasses:
```javascript
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>        
    );
  }
}
// Example usageL <ShoppingList name="Mark" />
```
* When out data changes, React will efficiently update and re-render our components
* In this example, ShoppingList is a React component class
    * A component takes in parameters, called props, and returns a hierarchy of views to display via the render method
        * Render method returns a description of what you want to see on the screen
            * React takes the description and displays a result
* JSX
    * Most react developers use a special syntax called JSX, which makes React Elements easier to Write
    * <div /> syntax is transformed at build-time to React.createElement('div')
    * Example above is equivalent to:
    ```javascript
    return React.createElement('div', {className: 'shopping-list'},
        React.createElement('h1', /*...h1 children ... */),
        react.createElement('u1', /* ... u1 children ... */)
      );
    ```
    * You can put any JavaScript expressions within braces inside JSX


## Inspecting the starter code
* Looking at index.js
* 3 React Components:
    (1) Square
    (2) Board
    (3) Game
* Square renders a single <button>
* Board renders 9 squares
* Game component renders a board with placeholer values which we'll modify later
* Currently no interactive components

## Passing Data Through Props
* Passing data from our board component to our square component
* Passing props is how information flows in React apps

## Making an interactive component
* Fill in the square component with an "X"  when we click it
* starts with adding alert on click
* Then introduces how to make components "remember" things
    * this.state
        * set this.state in component;s constructor
        * private
    * Add constructor to the class to initialize the state
        * Note: in JS classes, you need to always call super when defining the constructor of a subclass
            * All React components that have a constructor should start it with a super(props) call
* Change Square's render to display the current state's value when clicked

## Developer Tools
* React devtools Chrome/Firefox extension

## Lifting State Up
* Currently, each square component maintains the game's state
    * To check for a winner, we'll maintain the value of the 9 squares in one location
    * Best approach is to store the game's state in the parent Board component instead of in each square
        * The Board component can tell each Square what to display by passing a prop, just like we did when we passed a number to each Square
* To collect data from multiple children, or to have 2 child components communicate with each other, you need to declare the shared state in their parent component instead
    * The parent component can pass the state back down to the children using Props  
        * This keeps the child components in sync with each other and with the parent component
* Add a constructor to the Board and set the Board's initial state to contain an array with 9 nulls, corresponding to the 9 squares
* Modify the Board to instruct each individual Square about its current value ('X','O', or null)
    * Modify Board's renderSquare method to read from the Squares array
* Now, change what happens when a square is clicked
    * Need to create a way for the Square to update the Board's state
    * Pass down a function from the Board to the Square that gets called when a Square is clicked
        * Change renderSquare method
        * Now we're passing two props down from Board to Square: value and onClick
* onClick prop is a function that Square can call when clicked
    * The onClick prop on the built-in DOM <button> component tells React to set up a click event listener
    * when the button is clicked, react will call the onClick eent handler that is defined in Square's render() method
    * This event handler calls this.props.onClick().  The square's onClick prop was specified by the board
    * Since the Board passed onClick={() => this.handleClick(i)} to square, the square calls this.handleClick(i) when clicked
* Add handleClick to the board class

## Why Immutability is Important
* We used .slice() to create a copy of the squares array to modify instead of modifying the existing array
* Makes complex features easier to implement
    * Allows us to keep previous versions of the game's history intact
* Easier to detect changes
* Helps you build pure components 
    * helps determine when a component needs re-rendering

## Function Components
* We will change the Square to be a function component
    * Simplet way to write components that only contain a render method and don't have their own state
* Instead of defining a class which extends React.Component, we can write a function that takes props as input and returns what should be rendered.  

## Taking Turns
* First move will be set to "X" by default
    * Add xIsNext boolean to Board
* Change the "status" text in Board's render so that is displays which player has the next turn

## Declaring a Winner
* Add helper function to end of file
    * call in the boards render function
    * Change board's handleClick function to return early by ignoring a click if someone has won the game or if a square is already filled
