
export const quizQuestions_3 = {
  questions: [
    {
      question: 'How are React functional components different from arrow functions?',
      choices: ['Functional components can return JSX, arrow functions cannot', 'Arrow functions have their own context, functional components do not', 'Functional components are just syntax sugar for arrow functions', 'There is no difference'],
      correctAnswer: 'Functional components can return JSX, arrow functions cannot',
    },
    
    {
      question: 'What is a pure functional component in React?',
      choices: ['A component that uses React.PureComponent', 'A component that does not cause side effects', 'A component that only accepts strings as props', 'A component with no state or lifecycle methods'],
      correctAnswer: 'A component that does not cause side effects',
    },
    
    {
      question: 'In React, how can props be validated in a functional component?',
      choices: ['Using React.PropTypes', 'With the validateProps() function', 'Props cannot be validated in functional components', 'Using the props.validate() method'],
      correctAnswer: 'Using React.PropTypes',
    },
    
    {
      question: 'What is the main benefit of using functional components instead of class components?',
      choices: ['Better performance and simpler syntax', 'Access to private variables', 'Ability to use lifecycle methods', 'Support for local state'],
      correctAnswer: 'Better performance and simpler syntax',
    },
    
    {
      question: 'How do you handle default values for props in functional components?',
      choices: ['Using defaultProps', 'With a default case in a switch statement', 'By initializing state with props', 'Props always have default values'],
      correctAnswer: 'Using defaultProps',
    },
    
    {
      question: 'What happens when a prop changes in a functional component?',
      choices: ['The component re-renders with the new prop', 'Nothing, props are immutable', 'The component must be manually updated', 'It triggers a warning in the console'],
      correctAnswer: 'The component re-renders with the new prop',
    },
    
    {
      question: 'How can you prevent a functional component from re-rendering in React?',
      choices: ['Using shouldComponentUpdate', 'Wrapping it in React.memo', 'By using the PureComponent class', 'Functional components cannot be prevented from re-rendering'],
      correctAnswer: 'Wrapping it in React.memo',
    },
    
    {
      question: 'What is the correct way to define a functional component that takes a "user" prop?',
      choices: ['function UserComponent(user) { return <div>{user.name}</div>; }', 'const UserComponent = ({ user }) => <div>{user.name}</div>;', 'UserComponent(user) => <div>{user.name}</div>;', 'React.createUserComponent(user)'],
      correctAnswer: 'const UserComponent = ({ user }) => <div>{user.name}</div>;',
    },
    
    {
      question: 'How can functional components improve code readability in React?',
      choices: ['By reducing the amount of code needed', 'By eliminating the use of JSX', 'By using complex state management', 'They do not improve readability'],
      correctAnswer: 'By reducing the amount of code needed',
    },
    
    {
      question: 'What is the key difference between props and state in a functional component?',
      choices: ['State can change, props are read-only', 'Props are local, state is global', 'There is no difference', 'Props can change, state is read-only'],
      correctAnswer: 'State can change, props are read-only',
    },
    
  ],
}