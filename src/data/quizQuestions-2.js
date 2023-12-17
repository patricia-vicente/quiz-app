
export const quizQuestions_2 = {
  questions: [
    {
      question: 'Which hook in functional components is used to perform side effects?',
      choices: ['useState', 'useEffect', 'useReducer', 'useContext'],
      correctAnswer: 'useEffect',
    },
    
    {
      question: 'What is the correct way to handle a click event in a functional component?',
      choices: ['<button onClick={handleClick()}>Click me</button>', '<button onClick={handleClick}>Click me</button>', '<button click={handleClick}>Click me</button>', '<button onHandleClick={handleClick}>Click me</button>'],
      correctAnswer: '<button onClick={handleClick}>Click me</button>',
    },
    
    {
      question: 'How do you conditionally render a component in React based on a prop?',
      choices: ['{prop && <Component />}', '{if(prop) { return <Component />; }}', '<Component visible={prop} />', '<Component if={prop} />'],
      correctAnswer: '{prop && <Component />}',
    },
    
    {
      question: 'What is the primary reason for using props in functional components?',
      choices: ['To create a private state', 'For global state management', 'To pass data from parent to child components', 'To interact with the DOM'],
      correctAnswer: 'To pass data from parent to child components',
    },
    
    {
      question: 'How can you pass multiple props to a component in React?',
      choices: ['<Component {...props} />', '<Component props={...props} />', '<Component multiProps={props1, props2} />', 'Component(props1, props2)'],
      correctAnswer: '<Component {...props} />',
    },
    
    {
      question: 'In functional components, what is the standard way to access a prop named "size"?',
      choices: ['this.size', 'props.size()', 'props.size', 'getSize()'],
      correctAnswer: 'props.size',
    },
    
    {
      question: 'Can functional components in ReactJS return null?',
      choices: ['Yes, if there is nothing to render', 'No, they must return at least an empty element', 'Only if they are pure functions', 'No, they must always return JSX'],
      correctAnswer: 'Yes, if there is nothing to render',
    },
    
    {
      question: 'What is the purpose of defaultProps in a React functional component?',
      choices: ['To provide default values to props', 'To document the purpose of props', 'To optimize component performance', 'To enforce type checking on props'],
      correctAnswer: 'To provide default values to props',
    },
    
    {
      question: 'How do you make a functional component receive children in React?',
      choices: ['Using the children prop: <Component children={<Child />} />', 'Defining a children parameter: function Component(children) { return <div>{children}</div>; }', 'It cannot receive children', 'Placing them between the opening and closing tags of the component: <Component><Child /></Component>'],
      correctAnswer: 'Placing them between the opening and closing tags of the component: <Component><Child /></Component>',
    },
    
    {
      question: 'In a functional component, how do you ensure that a prop is optional?',
      choices: ['Using the OptionalProp in PropTypes', 'By not providing a default value', 'By not including it in the propTypes definition', 'All props are optional by default'],
      correctAnswer: 'All props are optional by default',
    },
    
  ],
}