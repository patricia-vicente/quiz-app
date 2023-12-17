
export const quizQuestions_6 = {
  questions: [
    {
      question: 'What is the purpose of the useCallback hook in React functional components?',
      choices: ['To call a function as a callback', 'To memoize functions for performance optimization', 'To fetch data from an API', 'To listen for user input'],
      correctAnswer: 'To memoize functions for performance optimization',
    },
    
    {
      question: 'In a React functional component, how is useEffect with an empty dependency array similar to componentDidMount in class components?',
      choices: ['It runs only once after the initial render', 'It runs on every render', 'It watches for state changes', 'There is no similarity'],
      correctAnswer: 'It runs only once after the initial render',
    },
    
    {
      question: 'How do you create a controlled input in a React functional component?',
      choices: ['By using useRef', 'By directly manipulating the DOM', 'By linking the input to the component state using the useState hook', 'Controlled inputs are not possible in functional components'],
      correctAnswer: 'By linking the input to the component state using the useState hook',
    },
    
    {
      question: 'What is the main advantage of using functional components for smaller components in React?',
      choices: ['Faster rendering speed', 'Access to more features', 'Simpler code and easier maintenance', 'Ability to use more props'],
      correctAnswer: 'Simpler code and easier maintenance',
    },
    
    {
      question: 'Why is it important to avoid side effects in the main body of a functional component?',
      choices: ['To follow React’s rules of hooks', 'Because it can lead to unexpected behavior and performance issues', 'Side effects are not supported in functional components', 'To make the component pure'],
      correctAnswer: 'Because it can lead to unexpected behavior and performance issues',
    },
    
    {
      question: 'How do you implement error boundaries in React functional components?',
      choices: ['Using the useState hook', 'Error boundaries can only be implemented in class components', 'With the useErrorBoundary hook', 'By wrapping the component in a try-catch block'],
      correctAnswer: 'Error boundaries can only be implemented in class components',
    },
    
    {
      question: 'What is the role of the useContext hook in a React functional component?',
      choices: ['To create a new context', 'To subscribe to a context without introducing nesting', 'To manage the component’s local state', 'To replace the need for props'],
      correctAnswer: 'To subscribe to a context without introducing nesting',
    },
    
    {
      question: 'How do you optimize a functional component that receives frequently changing props?',
      choices: ['By using the PureComponent class', 'Using React.memo to prevent unnecessary re-renders', 'By using the shouldComponentUpdate method', 'Frequent changes in props cannot be optimized'],
      correctAnswer: 'Using React.memo to prevent unnecessary re-renders',
    },
    
    {
      question: 'In functional components, why are hooks preferable over HOCs (Higher Order Components) for reusing logic?',
      choices: ['Because hooks are faster than HOCs', 'Hooks provide a cleaner and more modular way to share logic', 'HOCs are deprecated in React', 'Hooks can manage local state, HOCs cannot'],
      correctAnswer: 'Hooks provide a cleaner and more modular way to share logic',
    },
    
    {
      question: 'Why should you avoid large inline styles in React functional components?',
      choices: ['Inline styles are not supported in React', 'It can make the component less readable and harder to maintain', 'Inline styles are slower than CSS files', 'React converts inline styles to external CSS files'],
      correctAnswer: 'It can make the component less readable and harder to maintain',
    },
    
  ],
}