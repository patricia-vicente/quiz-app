
export const quizQuestions_7 = {
  questions: [
    {
      question: 'In React, what is the effect of returning null from a functional component?',
      choices: ['The component will not render anything', 'It causes an error', 'The component renders an empty div', 'It renders default props'],
      correctAnswer: 'The component will not render anything',
    },
    
    {
      question: 'How do you handle side effects in a React functional component that depend on a specific prop?',
      choices: ['Using useEffect with that prop as a dependency', 'With the useState hook', 'Side effects are not allowed in functional components', 'By manually updating the DOM'],
      correctAnswer: 'Using useEffect with that prop as a dependency',
    },
    
    {
      question: 'What is the purpose of returning a function from a useEffect hook in a functional component?',
      choices: ['To perform an additional effect', 'As a cleanup mechanism for the effect', 'To pass data to the parent component', 'Returning a function is not allowed in useEffect'],
      correctAnswer: 'As a cleanup mechanism for the effect',
    },
    
    {
      question: 'Can you use multiple useState hooks in a single functional component?',
      choices: ['No, only one useState hook is allowed', 'Yes, you can use multiple useState hooks', 'Yes, but only if they manage different types of state', 'Using useState is discouraged in functional components'],
      correctAnswer: 'Yes, you can use multiple useState hooks',
    },
    
    {
      question: 'What is the best practice for handling large amounts of data passed as props to a functional component?',
      choices: ['Storing the data in local storage', 'Passing only what is necessary and using memoization techniques', 'Splitting the component into smaller components', 'Converting the functional component to a class component'],
      correctAnswer: 'Passing only what is necessary and using memoization techniques',
    },
    
    {
      question: 'In a functional component, how does React treat a function declared inside the component body?',
      choices: ['It is memoized automatically', 'It is recreated on every render', 'It behaves as a static function', 'It is hoisted to the top of the component'],
      correctAnswer: 'It is recreated on every render',
    },
    
    {
      question: 'Why is it beneficial to split a large functional component into smaller components?',
      choices: ['For easier testing and maintenance', 'To increase the component’s rendering speed', 'Smaller components are not beneficial', 'To reduce the number of props'],
      correctAnswer: 'For easier testing and maintenance',
    },
    
    {
      question: 'How do functional components improve the readability of React code?',
      choices: ['By eliminating the use of JSX', 'Through less boilerplate compared to class components', 'Functional components do not improve readability', 'By enforcing strict typing'],
      correctAnswer: 'Through less boilerplate compared to class components',
    },
    
    {
      question: 'What is the key reason to use PropTypes in functional components?',
      choices: ['To ensure components receive the correct type of props', 'For better performance', 'PropTypes are mandatory in functional components', 'To automatically generate documentation'],
      correctAnswer: 'To ensure components receive the correct type of props',
    },
    
    {
      question: 'How can you handle asynchronous operations in a React functional component?',
      choices: ['Using the async function directly in the render method', 'With the useEffect hook', 'Asynchronous operations are not supported', 'By using a class component instead'],
      correctAnswer: 'With the useEffect hook',
    },
    
  ],
}