
export const quizQuestions_1 = {
  questions: [
    {
      question: 'In ReactJS, what is a functional component?',
      choices: ['A JavaScript function that accepts props and returns JSX', 'A class that extends React.Component', 'A special function provided by JavaScript', 'A method inside React.Component'],
      correctAnswer: 'A JavaScript function that accepts props and returns JSX',
    },
    
    {
      question: 'How do you pass a prop named "color" with the value "blue" to a functional component named "Button"?',
      choices: ['<Button color="blue" />', '<Button: color="blue" />', 'Button(color="blue")', '<Button>color="blue"</Button>'],
      correctAnswer: '<Button color="blue" />',
    },
    
    {
      question: 'What are "props" in a React functional component?',
      choices: ['A state management tool', 'An array containing HTML properties', 'Read-only components that are passed to the component', 'A type of React hook'],
      correctAnswer: 'Read-only components that are passed to the component',
    },
    
    {
      question: 'How do you access a prop named "title" in a functional component in ReactJS?',
      choices: ['props.title', 'this.props.title', 'React.getTitle()', 'component.title'],
      correctAnswer: 'props.title',
    },
    
    {
      question: 'What syntax is used for passing props to a functional component?',
      choices: ['<Component props={value} />', '<Component {value} />', '<Component value={value} />', '<Component(value)'],
      correctAnswer: '<Component value={value} />',
    },
    
    {
      question: 'How can you destructure props in a functional component for cleaner code?',
      choices: ['const { prop1, prop2 } = this.props', 'const { prop1, prop2 } = props', 'function({ prop1, prop2 })', 'React.destructure(props)'],
      correctAnswer: 'const { prop1, prop2 } = props',
    },
    
    {
      question: 'What is the correct way to define a functional component that takes no props in React?',
      choices: ['function MyComponent() { return <div />; }', 'class MyComponent extends React.Component { render() { return <div />; } }', 'MyComponent = () => <div />', 'React.createComponent("MyComponent")'],
      correctAnswer: 'function MyComponent() { return <div />; }',
    },
    
    {
      question: 'In ReactJS, how do you ensure that a prop named "age" is a number in a functional component?',
      choices: ['Props.typeof(age) === "number"', 'PropTypes.number(age)', 'MyComponent.propTypes = { age: PropTypes.number }', 'typeof age === "number"'],
      correctAnswer: 'MyComponent.propTypes = { age: PropTypes.number }',
    },
    
    {
      question: 'What is the main purpose of using props in functional components?',
      choices: ['To maintain internal state', 'To pass data and event handlers to the component', 'To manipulate the DOM directly', 'To perform complex calculations'],
      correctAnswer: 'To pass data and event handlers to the component',
    },
    
    {
      question: 'Which of the following is NOT a valid way to use props in a functional component?',
      choices: ['Modifying the value of a prop', 'Reading the value of a prop', 'Passing a prop to a child component', 'Using a prop to conditionally render UI elements'],
      correctAnswer: 'Modifying the value of a prop',
    },
    
  ],
}