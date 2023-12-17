
export const quizQuestions_10 = {
  questions: [
    {
      question: 'What is the primary benefit of using functional components over class components in React?',
      choices: ['Functional components are more performant', 'They have access to more React features', 'Simpler syntax and easier use of hooks', 'Functional components can directly manipulate the DOM'],
      correctAnswer: 'Simpler syntax and easier use of hooks',
    },
    
    {
      question: 'How do you handle a click event in a functional component in React?',
      choices: ['Using an inline function in the onClick attribute', 'By calling a global function', 'React does not support click events in functional components', 'Using a dedicated event handling hook'],
      correctAnswer: 'Using an inline function in the onClick attribute',
    },
    
    {
      question: 'In React, what is the purpose of the useMemo hook in functional components?',
      choices: ['To memorize user input', 'To optimize performance by memoizing expensive calculations', 'To remember the previous state of the component', 'To handle memory management'],
      correctAnswer: 'To optimize performance by memoizing expensive calculations',
    },
    
    {
      question: 'Why is it important to avoid mutating state directly in React functional components?',
      choices: ['Direct mutation can lead to unpredictable component behavior', 'State mutation is not supported in functional components', 'It can cause a memory leak', 'React state is read-only'],
      correctAnswer: 'Direct mutation can lead to unpredictable component behavior',
    },
    
    {
      question: 'How are side effects handled in a React functional component?',
      choices: ['Using the componentDidMount and componentDidUpdate methods', 'With the useEffect hook', 'Functional components do not support side effects', 'By manipulating the state directly'],
      correctAnswer: 'With the useEffect hook',
    },
    
    {
      question: 'What is the significance of the dependencies array in the useEffect hook in React?',
      choices: ['It lists the components that useEffect depends on', 'It specifies when the useEffect hook should re-run', 'Dependencies array is not a part of useEffect', 'It contains the state variables used inside useEffect'],
      correctAnswer: 'It specifies when the useEffect hook should re-run',
    },
    
    {
      question: 'In React functional components, how do you share logic between components?',
      choices: ['Using global functions', 'Through higher-order components', 'By passing props', 'Using custom hooks'],
      correctAnswer: 'Using custom hooks',
    },
    
    {
      question: 'What is the best practice for initializing state from props in a functional component?',
      choices: ['Directly in the JSX', 'Using the useState hook in the component body', 'In the component’s constructor', 'State should not be initialized from props'],
      correctAnswer: 'Using the useState hook in the component body',
    },
    
    {
      question: 'How can you prevent a functional component from rendering when its props have not changed?',
      choices: ['Using shouldComponentUpdate', 'With the PureComponent', 'By using React.memo', 'Functional components automatically prevent this'],
      correctAnswer: 'By using React.memo',
    },
    
    {
      question: 'What is the primary use case for using props in React functional components?',
      choices: ['To maintain internal state', 'For passing data and event handlers to the component', 'To manipulate DOM elements', 'Props are mainly used for styling purposes'],
      correctAnswer: 'For passing data and event handlers to the component',
    },
    
  ],
}