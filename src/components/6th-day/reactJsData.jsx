export const reactJs = [
  {
    step: "One",
    title: "Basic Interview Questions of React",
    qa: [
      {
        id: "react-1",
        question: "What is React, and why is it used?",
        points: [
          {
            point: "React হল একটি ওপেন-সোর্স JavaScript লাইব্রেরি, যা ইউজার ইন্টারফেস তৈরি করতে ব্যবহৃত হয়। এটি Facebook দ্বারা তৈরি।",
            example: "",
          },
          {
            point: "React ব্যবহারের প্রধান কারণ হল এটি ডেটা পরিবর্তনের সময় দ্রুত এবং কার্যকরভাবে UI আপডেট করে।",
            example: "",
          },
        ],
      },
      {
        id: "react-2",
        question: "What is JSX, and why is it preferred in React?",
        points: [
          {
            point: "JSX (JavaScript XML) হল একটি সিনট্যাক্স যা JavaScript কোডে HTML লিখতে ব্যবহৃত হয়। এটি React এ কোড লেখা আরও সহজ করে।",
            example: `উদাহরণ: 
    <div>Hello, World!</div>`,
          },
          {
            point: "JSX ব্যবহার করলে HTML ট্যাগ ও JavaScript কোড একত্রে ব্যবহার করা যায়।",
          },
        ],
      },
      {
        id: "react-3",
        question: "How does JSX differ from HTML?",
        points: [
          {
            point: "JSX এ class-এর পরিবর্তে `className` ব্যবহার করতে হয়।",
            example: `উদাহরণ: 
    <div className='header'></div>`,
          },
          {
            point: "JSX এ HTML ট্যাগগুলোর মধ্যে JavaScript এক্সপ্রেশন `{}` ব্যবহার করা যায়।",
            example: `উদাহরণ: 
    <h1>{user.name}</h1>`,
          },
        ],
      },
      {
        id: "react-4",
        question: "What are components in React?",
        points: [
          {
            point: "React-এ components হল পুনরায় ব্যবহারযোগ্য UI ব্লক যা ফাংশন বা ক্লাস দিয়ে তৈরি হয়।",
            example: `উদাহরণ: 
    function Welcome() { 
      return <h1>Hello!</h1>; 
    }`,
          },
          {
            point: "Components দুই ধরনের হয়: `Functional Components` এবং `Class Components`।",
          },
        ],
      },
      {
        id: "react-5",
        question: "What is the difference between functional and class components?",
        points: [
          {
            point: "Functional components হল সাধারণ JavaScript ফাংশন যা UI রিটার্ন করে।",
            example: `উদাহরণ: 
    function Greeting() { 
      return <h1>Hello</h1>; 
    }`,
          },
          {
            point: "Class components হল ES6 ক্লাস যা `render()` মেথড ব্যবহার করে UI রিটার্ন করে।",
            example: `উদাহরণ: 
    class Greeting extends React.Component { 
      render() { 
        return <h1>Hello</h1>; 
    }}`,
          },
        ],
      },
      {
        id: "react-6",
        question: "What is a single-page application (SPA), and how does React enable it?",
        points: [
          {
            point: "SPA এমন একটি অ্যাপ্লিকেশন যেখানে শুধুমাত্র প্রয়োজনীয় অংশই রিফ্রেশ হয়, সম্পূর্ণ পেজ নয়।",
            example: "",
          },
          {
            point: "React DOM পরিবর্তন করতে Virtual DOM ব্যবহার করে, যা SPA তৈরিতে কার্যকর।",
            example: "",
          },
        ],
      },
      {
        id: "react-7",
        question: "What are props in React?",
        points: [
          {
            point: "Props হল components এর মধ্যে ডেটা পাস করার একটি উপায়। এগুলো readonly।",
            example: `উদাহরণ: 
    <Welcome name='John' /> 

— এখানে \`name\` একটি prop।`,
          },
        ],
      },
      {
        id: "react-8",
        question: "How is state different from props?",
        points: [
          {
            point: "State হল component-এর নিজস্ব ডেটা, যা component-এর মধ্যে পরিবর্তন করা যায়।",
            example: `উদাহরণ: 
    this.state = { count: 0 };`,
          },
          {
            point: "Props parent থেকে child-এ ডেটা পাঠায়, কিন্তু State শুধুমাত্র component-এর মধ্যে থাকে।",
          },
        ],
      },
      {
        id: "react-9",
        question: "How can you pass data from one component to another in React?",
        points: [
          {
            point: "Parent থেকে child-এ data পাস করতে props ব্যবহার করা হয়।",
            example: `উদাহরণ: 
    <Child name='John' /> 

— এখানে \`name\` একটি prop।`,
          },
        ],
      },
      {
        id: "react-10",
        question: "What is the significance of the `key` prop in lists?",
        points: [
          {
            point: "`key` prop ব্যবহার করলে React DOM-এ লিস্টের প্রতিটি আইটেমকে আলাদাভাবে চিনতে পারে।",
            example: `উদাহরণ: 
    <li key={id}>Item</li>`,
          },
        ],
      },
      {
        id: "react-11",
        question: "How do you handle events in React?",
        points: [
          {
            point: "React-এ events HTML এর মতো কাজ করে, তবে event নামগুলোর CamelCase ফর্ম্যাট ব্যবহার করা হয়।",
            example: `উদাহরণ: 
    <button onClick={handleClick}>Click Me</button>`,
          },
        ],
      },
      {
        id: "react-12",
        question: "What are controlled and uncontrolled components in React?",
        points: [
          {
            point: "Controlled components হল যেগুলোর মান React State দ্বারা নিয়ন্ত্রিত হয়।",
            example: `উদাহরণ: 
    <input 
      value={this.state.value} 
      onChange={this.handleChange} 
    />`,
          },
          {
            point: "Uncontrolled components হল যেগুলোর মান DOM দ্বারা নিয়ন্ত্রিত হয়।",
            example: `উদাহরণ: 
    <input ref={this.inputRef} />`,
          },
        ],
      },
      {
        id: "react-13",
        question: "What is a React fragment, and why would you use it?",
        points: [
          {
            point: "React Fragment একাধিক element রিটার্ন করার সময় ব্যবহার করা হয়, যেখানে কোন অতিরিক্ত DOM node তৈরি হয় না।",
            example: `উদাহরণ: 
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>`,
          },
        ],
      },
      {
        id: "react-14",
        question: "How do you conditionally render elements in React?",
        points: [
          {
            point: "React এ `{}` এর মধ্যে শর্ত ব্যবহার করে conditionally render করা যায়।",
            example: `উদাহরণ: 
    {
      isLoggedIn ? <h1>Welcome</h1> : <h1>Please Log In</h1>
    }`,
          },
        ],
      },
      {
        id: "react-15",
        question: "What are React Hooks? Name a few commonly used hooks.",
        points: [
          {
            point: "React Hooks এমন ফাংশন যা Functional Components-এ state এবং lifecycle features ব্যবহার করতে দেয়।",
            example: "",
          },
          {
            point: "প্রচলিত Hooks: `useState`, `useEffect`, `useContext`, `useRef`।",
            example: "",
          },
        ],
      },
    ],
  },



  {
    "step": "Two",
    "title": "Intermediate Interview Questions Of React",
    "qa": [
      {
        "id": "intermediate-1",
        "question": "Explain the useState Hook.",
        "points": [
          {
            "point": "useState হলো React Hook যা state পরিচালনার জন্য ব্যবহৃত হয়। এটি একটি array return করে, যেখানে প্রথম আইটেম হলো বর্তমান state এবং দ্বিতীয়টি হলো state আপডেট করার ফাংশন।",
            "example": `
  import React, { useState } from "react";
  
  function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    );
  }
            `
          }
        ]
      },
      {
        "id": "intermediate-2",
        "question": "How does the useEffect Hook work?",
        "points": [
          {
            "point": "useEffect side effects পরিচালনার জন্য ব্যবহৃত হয়, যেমন API কল বা DOM পরিবর্তন। এটি component render করার পরে স্বয়ংক্রিয়ভাবে execute হয় এবং dependency array ব্যবহার করে নির্দিষ্ট শর্তে চালানো যায়।",
            "example": `
  import React, { useState, useEffect } from "react";
  
  function Timer() {
    const [time, setTime] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => setTime(time + 1), 1000);
      return () => clearInterval(interval); // Cleanup
    }, [time]);
  
    return <p>Timer: {time}s</p>;
  }
            `
          }
        ]
      },
      {
        "id": "intermediate-3",
        "question": "How can you make an API call in React?",
        "points": [
          {
            "point": "React-এ API কল করার জন্য সাধারণত fetch বা axios ব্যবহার করা হয়। useEffect এর মাধ্যমে API কল এবং state আপডেট করে ডেটা সংরক্ষণ করা যায়।",
            "example": `
  import React, { useState, useEffect } from "react";
  
  function UserList() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data));
    }, []);
  
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
            `
          }
        ]
      },
      {
        "id": "intermediate-4",
        "question": "What are Higher-Order Components (HOCs)? Give an example.",
        "points": [
          {
            "point": "Higher-Order Components (HOCs) হলো ফাংশন যা একটি component কে ইনপুট হিসেবে নিয়ে একটি নতুন component return করে। এটি code reuse এবং abstraction এর জন্য ব্যবহৃত হয়।",
            "example": `
  function withLogging(WrappedComponent) {
    return function EnhancedComponent(props) {
      useEffect(() => {
        console.log("Component mounted");
      }, []);
      return <WrappedComponent {...props} />;
    };
  }
  
  function HelloWorld() {
    return <h1>Hello, World!</h1>;
  }
  
  export default withLogging(HelloWorld);
            `
          }
        ]
      },
      
      {
        "id": "intermediate-5",
        "question": "Explain the use of React Context API.",
        "points": [
          {
            "point": "React Context API একটি বৈশিষ্ট্য যা component tree-তে props drilling ছাড়াই data share করতে দেয়। এটি `React.createContext` দিয়ে context তৈরি করে এবং `Provider` এবং `Consumer` ব্যবহার করে ডেটা প্রদান ও গ্রহন করা হয়।",
            "example": `
  import React, { createContext, useContext } from "react";
  
  const ThemeContext = createContext();
  
  function App() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  
  function Toolbar() {
    const theme = useContext(ThemeContext);
    return <p>Current Theme: {theme}</p>;
  }
            `
          }
        ]
      },
      {
        "id": "intermediate-6",
        "question": "How does the Context API differ from props drilling?",
        "points": [
          {
            "point": "Context API-তে data সরাসরি পাস করা যায়, যেখানে props drilling-এ data parent থেকে child হয়ে প্রতিটি component এর মাধ্যমে পাঠাতে হয়। এটি complex tree structure-এ props management সহজ করে।",
            "example": `
  import React, { createContext, useContext } from "react";
  
  const UserContext = createContext();
  
  function App() {
    return (
      <UserContext.Provider value="John Doe">
        <Dashboard />
      </UserContext.Provider>
    );
  }
  
  function Dashboard() {
    const user = useContext(UserContext);
    return <p>Logged in as: {user}</p>;
  }
            `
          }
        ]
      },
      {
        "id": "intermediate-7",
        "question": "What are refs, and when should you use them in React?",
        "points": [
          {
            "point": "Refs React-এ DOM elements অথবা class components-এ সরাসরি reference রাখতে ব্যবহৃত হয়। এটি uncontrolled components বা imperative actions পরিচালনার জন্য কার্যকর।",
            "example": `
  import React, { useRef } from "react";
  
  function InputFocus() {
    const inputRef = useRef();
  
    const focusInput = () => {
      inputRef.current.focus();
    };
  
    return (
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    );
  }
            `
          }
        ]
      },
      {
        "id": "intermediate-8",
        "question": "What is the useRef Hook, and how is it different from createRef?",
        "points": [
          {
            "point": "useRef React functional components-এ mutable references তৈরি করে। এটি প্রতিবার re-render-এ নতুন reference তৈরি করে না। অন্যদিকে, createRef class components-এ ব্যবহার হয়।",
            "example": `
  import React, { useRef } from "react";
  
  function Timer() {
    const timerId = useRef(null);
  
    const startTimer = () => {
      timerId.current = setInterval(() => console.log("Running..."), 1000);
    };
  
    const stopTimer = () => {
      clearInterval(timerId.current);
    };
  
    return (
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
      </div>
    );
  }
            `
          }
        ]
      },
      {
        "id": "intermediate-9",
        "question": "What is the purpose of `React.memo`?",
        "points": [
          {
            "point": "`React.memo` একটি higher-order component যা component-এর props পরিবর্তিত না হলে এটি পুনরায় render হওয়া প্রতিরোধ করে। এটি performance উন্নত করে।",
            "example": `
  import React, { memo } from "react";
  
  const Child = memo(({ name }) => {
    console.log("Child rendered");
    return <p>Hello, {name}</p>;
  });
  
  function Parent() {
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <Child name="John" />
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
    );
  }
            `
          }
        ]
      },
      {
        "id": "intermediate-10",
        "question": "Explain React lifecycle methods.",
        "points": [
          {
            "point": "React lifecycle methods হলো class components-এ নির্দিষ্ট সময়ে চালিত হওয়া functions। এগুলি mounting, updating এবং unmounting সময়ে ব্যবহৃত হয়।",
            "example": `
  class App extends React.Component {
    componentDidMount() {
      console.log("Component mounted");
    }
  
    componentDidUpdate() {
      console.log("Component updated");
    }
  
    componentWillUnmount() {
      console.log("Component unmounted");
    }
  
    render() {
      return <h1>Hello, React!</h1>;
    }
  }
            `
          }
        ]
      },
      {
        "id": "intermediate-11",
        "question": "What are `componentDidMount` and `componentWillUnmount`, and when are they used?",
        "points": [
          {
            "point": "`componentDidMount` একটি lifecycle method যা component DOM-এ যুক্ত হওয়ার পরে চালিত হয়। এটি API কল বা initial data load এর জন্য ব্যবহৃত হয়।",
            "example": `
  class App extends React.Component {
    componentDidMount() {
      console.log("Component has been mounted");
    }
  
    render() {
      return <p>Hello, World!</p>;
    }
  }
            `
          },
          {
            "point": "`componentWillUnmount` একটি lifecycle method যা component DOM থেকে সরানোর আগে চালিত হয়। এটি cleanup tasks যেমন event listener সরানো বা timer বন্ধ করার জন্য ব্যবহৃত হয়।",
            "example": `
  class App extends React.Component {
    componentWillUnmount() {
      console.log("Component is being removed");
    }
  
    render() {
      return <p>Goodbye, World!</p>;
    }
  }
            `
          }
        ]
      },
      {
        "id": "intermediate-12",
        "question": "Explain the useCallback Hook and why it is useful.",
        "points": [
          {
            "point": "useCallback একটি hook যা callback function-এর memoization করে, যখন নির্দিষ্ট dependency পরিবর্তিত হয় না। এটি performance উন্নত করতে সাহায্য করে।",
            "example": `
  import React, { useState, useCallback } from "react";
  
  function App() {
    const [count, setCount] = useState(0);
  
    const increment = useCallback(() => {
      setCount((prev) => prev + 1);
    }, []);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }
            `
          }
        ]
      },
      {
        "id": "intermediate-13",
        "question": "How is the useMemo Hook used in React?",
        "points": [
          {
            "point": "useMemo একটি hook যা expensive computation এর result memoize করে। এটি unnecessary calculation প্রতিরোধ করে।",
            "example": `
  import React, { useState, useMemo } from "react";
  
  function App() {
    const [count, setCount] = useState(0);
  
    const expensiveCalculation = useMemo(() => {
      console.log("Calculating...");
      return count * 10;
    }, [count]);
  
    return (
      <div>
        <p>Result: {expensiveCalculation}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
            `
          }
        ]
      },
      {
        "id": "intermediate-14",
        "question": "What are controlled components in forms?",
        "points": [
          {
            "point": "Controlled components React-এ এমন form elements যেগুলি React state দ্বারা নিয়ন্ত্রিত হয়। এটি ডাটা পরিচালনা সহজ করে।",
            "example": `
  import React, { useState } from "react";
  
  function Form() {
    const [inputValue, setInputValue] = useState("");
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted Value:", inputValue);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
            `
          }
        ]
      }
    ]
  }
]
