export const ReactRouterData = [
  {
    step: "One",
    title: "React Router Questions",
    "qa": [
      {
        "id": "react-router-1",
        "question": "What is React Router, and why is it used?",
        "points": [
          {
            "point": "React Router হল একটি লাইব্রেরি যা React অ্যাপ্লিকেশনে routing পরিচালনা করার জন্য ব্যবহৃত হয়। এটি single-page application (SPA) তৈরিতে সাহায্য করে।",
            "example": `
  import { BrowserRouter as Router, Route } from "react-router-dom";
  
  function App() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Router>
    );
  }
            `
          }
        ]
      },
      {
        "id": "react-router-2",
        "question": "Explain the difference between BrowserRouter, HashRouter, and MemoryRouter.",
        "points": [
          {
            "point": "`BrowserRouter` ব্যবহার করে modern URL structure (e.g., `/about`) এবং History API। এটি server-side routing সমর্থন করে।",
            "example": `
  import { BrowserRouter } from "react-router-dom";
  
  <BrowserRouter>
    <App />
  </BrowserRouter>;
            `
          },
          {
            "point": "`HashRouter` URL-এ hash (`#`) ব্যবহার করে (e.g., `/#/about`)। এটি server configuration ছাড়াই কাজ করে।",
            "example": `
  import { HashRouter } from "react-router-dom";
  
  <HashRouter>
    <App />
  </HashRouter>;
            `
          },
          {
            "point": "`MemoryRouter` history stack-এ routing পরিচালনা করে। এটি URL update না করে routing করে।",
            "example": `
  import { MemoryRouter } from "react-router-dom";
  
  <MemoryRouter>
    <App />
  </MemoryRouter>;
            `
          }
        ]
      },
      {
        "id": "react-router-3",
        "question": "How do you handle navigation in React?",
        "points": [
          {
            "point": "React Router-এ navigation পরিচালনার জন্য `Link` এবং `useNavigate` ব্যবহার করা হয়। `Link` components navigation তৈরি করে, এবং `useNavigate` programmatically navigation পরিচালনা করে।",
            "example": `
  import { Link, useNavigate } from "react-router-dom";
  
  function App() {
    const navigate = useNavigate();
  
    return (
      <div>
        <Link to="/about">Go to About</Link>
        <button onClick={() => navigate("/home")}>Go to Home</button>
      </div>
    );
  }
            `
          }
        ]
      },
      {
        "id": "react-router-4",
        "question": "What is the use of `Switch` and `Route` in React Router?",
        "points": [
          {
            "point": "`Switch` ব্যবহৃত হয় একসঙ্গে একাধিক `Route` পরিচালনা করতে, যেখানে প্রথম মিলেছে তা render করে।",
            "example": `
  import { Switch, Route } from "react-router-dom";
  
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
  </Switch>;
            `
          },
          {
            "point": "`Route` একটি নির্দিষ্ট path-এ component render করার জন্য ব্যবহৃত হয়।",
            "example": `
  <Route path="/contact" component={Contact} />;
            `
          }
        ]
      },
      {
        "id": "react-router-5",
        "question": "How can you use dynamic routes in React Router?",
        "points": [
          {
            "point": "Dynamic routes ব্যবহৃত হয় যখন path-এ variables (parameters) থাকে। এগুলি colon (`:`) দিয়ে নির্ধারিত হয়।",
            "example": `
  import { Route } from "react-router-dom";
  
  <Route path="/user/:id" component={UserProfile} />;
            `
          }
        ]
      },
      {
        "id": "react-router-6",
        "question": "What is the purpose of `useParams` Hook?",
        "points": [
          {
            "point": "`useParams` একটি React Router Hook যা current route-এর dynamic parameters access করতে দেয়।",
            "example": `
  import { useParams } from "react-router-dom";
  
  function UserProfile() {
    const { id } = useParams();
    return <p>User ID: {id}</p>;
  }
            `
          }
        ]
      }
    ]
  },



  {
    step: "Two",
    title: "Advanced Interview Questions Of React",
    "qa": [
      {
        
        "id": "react-advanced-1",
        "question": "What are React portals, and when should you use them?",
        "points": [
          {
            "point": "React portals parent DOM tree-এর বাইরে elements render করতে ব্যবহৃত হয়। এটি modal, tooltip, বা overlay-এর মতো UI elements তৈরিতে কার্যকর।",
            "example": `
  import ReactDOM from "react-dom";
  
  function Modal({ children }) {
    return ReactDOM.createPortal(
      <div className="modal">{children}</div>,
      document.getElementById("modal-root")
    );
  }
            `
          }
        ]
      },
      {
        "id": "react-advanced-2",
        "question": "What is code-splitting, and how do you implement it in React?",
        "points": [
          {
            "point": "Code-splitting React অ্যাপের performance বাড়ানোর জন্য ব্যবহৃত হয়, যেখানে কম্পোনেন্ট বা routes আলাদা ফাইল হিসেবে লোড করা হয়।",
            "example": `
  import React, { lazy, Suspense } from "react";
  
  const LazyComponent = lazy(() => import("./LazyComponent"));
  
  function App() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    );
  }
            `
          }
        ]
      },
      {
        "id": "react-advanced-3",
        "question": "Explain lazy loading and how you can implement it in React.",
        "points": [
          {
            "point": "Lazy loading কম্পোনেন্ট বা assets শুধুমাত্র প্রয়োজন অনুযায়ী লোড করে, performance উন্নত করতে সাহায্য করে।",
            "example": `
  import React, { lazy, Suspense } from "react";
  
  const LazyComponent = lazy(() => import("./LazyComponent"));
  
  function App() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    );
  }
            `
          }
        ]
      },
      {
        "id": "react-advanced-4",
        "question": "What is Concurrent Mode in React, and what are its benefits?",
        "points": [
          {
            "point": "Concurrent Mode React-এর experimental feature যা smooth UI rendering এবং responsive performance প্রদান করে। এটি background rendering সমর্থন করে।",
            "example": ""
          }
        ]
      },
      {
        "id": "react-advanced-5",
        "question": "How do you implement Error Boundaries in React?",
        "points": [
          {
            "point": "Error Boundaries React কম্পোনেন্টে runtime errors handle করে এবং fallback UI প্রদর্শন করে।",
            "example": `
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }
            `
          }
        ]
      },
      {
        "id": "react-advanced-6",
        "question": "What are the differences between Client-Side Rendering (CSR) and Server-Side Rendering (SSR)?",
        "points": [
          {
            "point": "CSR client browser-এ rendering করে, যেখানে SSR server-side rendering করে HTML প্রদান করে।",
            "example": ""
          }
        ]
      },
      {
        "id": "react-advanced-7",
        "question": "What is Server-Side Rendering (SSR) in React, and how does it work?",
        "points": [
          {
            "point": "SSR server-এ HTML content render করে এবং ব্রাউজারকে প্রদান করে, যা SEO এবং performance উন্নত করে।",
            "example": ""
          }
        ]
      },
      {
        "id": "react-advanced-8",
        "question": "How does Next.js improve SSR and static generation in React applications?",
        "points": [
          {
            "point": "Next.js automatic server-side rendering এবং static site generation সমর্থন করে, যা performance উন্নত এবং SEO-friendly।",
            "example": ""
          }
        ]
      },
      {
        "id": "react-advanced-9",
        "question": "What are the benefits of using Next.js over a standard React app?",
        "points": [
          {
            "point": "Next.js built-in routing, SSR, static generation, এবং API endpoints প্রদান করে। এটি performance এবং development efficiency উন্নত করে।",
            "example": ""
          }
        ]
      },
   

      {
        "id": "react-advanced-10",
        "question": "What are Suspense and Concurrent Mode in React?",
        "points": [
          {
            "point": "Suspense asynchronous data বা components লোড করার সময় fallback UI প্রদর্শন করতে ব্যবহৃত হয়। Concurrent Mode smooth rendering এবং responsive UI performance প্রদান করে।",
            "example": `
    import React, { Suspense } from "react";

    const LazyComponent = React.lazy(() => import("./LazyComponent"));

    function App() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    );
    }
            `
          }
        ]
      },
      {
        "id": "react-advanced-11",
        "question": "How do you handle asynchronous data with Suspense in React?",
        "points": [
          {
            "point": "React Suspense asynchronous data fetching-এর সময় fallback UI প্রদর্শন করতে ব্যবহৃত হয়।",
            "example": `
    import React, { Suspense } from "react";

    const Resource = fetchResource(); // A hypothetical function to fetch data

    function App() {
    return (
      <Suspense fallback={<div>Loading data...</div>}>
        <DataComponent />
      </Suspense>
    );
    }

    function DataComponent() {
    const data = Resource.read(); // Hypothetical read method
    return <div>{data}</div>;
    }
            `
          }
        ]
      },
      {
        "id": "react-advanced-12",
        "question": "What are custom hooks in React, and why would you use them?",
        "points": [
          {
            "point": "Custom hooks reusable logic encapsulate করে, যা কোড সংক্ষিপ্ত এবং সহজভাবে ব্যবস্থাপনা করতে সাহায্য করে।",
            "example": `
    import { useState, useEffect } from "react";

    function useFetchData(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data));
    }, [url]);

    return data;
    }

    // Usage
    function App() {
    const data = useFetchData("https://api.example.com/data");
    return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
    }
            `
          }
        ]
      },
      {
        "id": "react-advanced-13",
        "question": "What are the best practices for structuring a large React project?",
        "points": [
          {
            "point": "React প্রজেক্টে modular structure, reusable components, এবং separation of concerns মেনে চলা উচিৎ।",
            "example": `
    src/
    components/
      Header/
        Header.js
        Header.css
      Footer/
        Footer.js
        Footer.css
    pages/
      Home/
        Home.js
        Home.css
      About/
        About.js
        About.css
    utils/
      api.js
      helpers.js
            `
          }
        ]
      },
      {
        "id": "react-advanced-14",
        "question": "How does the Virtual DOM work in React?",
        "points": [
          {
            "point": "Virtual DOM React-এর একটি lightweight representation যা UI আপডেটের performance বৃদ্ধি করে।",
            "example": ""
          }
        ]
      },
      {
        "id": "react-advanced-15",
        "question": "How does React’s reconciliation algorithm work?",
        "points": [
          {
            "point": "React এর reconciliation algorithm efficient tree diffing প্রক্রিয়া ব্যবহার করে DOM আপডেট করে।",
            "example": ""
          }
        ]
      },
      {
        "id": "react-advanced-16",
        "question": "Explain how `React.StrictMode` works and its purpose.",
        "points": [
          {
            "point": "`React.StrictMode` potential issues detect এবং future compatibility যাচাই করতে ব্যবহৃত হয়।",
            "example": `
    import React from "react";

    function App() {
    return (
      <React.StrictMode>
        <MyComponent />
      </React.StrictMode>
    );
    }
            `
          }
        ]
      },
      {
        "id": "react-advanced-17",
        "question": "How do you prevent unnecessary re-renders in React?",
        "points": [
          {
            "point": "React.memo, useCallback, এবং useMemo unnecessary re-render প্রতিরোধে কার্যকর।",
            "example": `
    const MemoizedComponent = React.memo(MyComponent);

    function Parent() {
    const memoizedCallback = useCallback(() => doSomething(), [dependency]);
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

    return <MemoizedComponent callback={memoizedCallback} value={memoizedValue} />;
    }
            `
          }
        ]
      },
      {
        "id": "react-advanced-18",
        "question": "Explain how to debounce or throttle a function in React.",
        "points": [
          {
            "point": "Debouncing and throttling frequent events handle করতে ব্যবহৃত হয়, যেমন window resize বা API calls।",
            "example": `
    import { useEffect, useState } from "react";

    function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => setDebouncedValue(value), delay);

      return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
    }
            `
          }
        ]
      },
      {
        "id": "react-advanced-19",
        "question": "What are prop types, and why are they used in React?",
        "points": [
          {
            "point": "PropTypes React এ props এর expected data types যাচাই করতে ব্যবহৃত হয়, যা bug কমাতে সাহায্য করে।",
            "example": `
  import PropTypes from "prop-types";
  
  function MyComponent({ name, age }) {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
  
  MyComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };
            `
          }
        ]
      },
      {
        "id": "react-advanced-20",
        "question": "How do you manage side effects in a React app?",
        "points": [
          {
            "point": "React এ side effects handle করতে useEffect hook ব্যবহৃত হয়। এটি DOM manipulation, API call, এবং subscription handle করতে ব্যবহৃত হয়।",
            "example": `
  import React, { useEffect, useState } from "react";
  
  function App() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch("https://api.example.com/data")
        .then((response) => response.json())
        .then((result) => setData(result));
  
      return () => {
        console.log("Cleanup code runs here");
      };
    }, []);
  
    return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
  }
            `
          }
        ]
      },
      {
        "id": "react-advanced-21",
        "question": "How does the `useReducer` Hook work, and when would you use it?",
        "points": [
          {
            "point": "useReducer complex state logic handle করতে ব্যবহৃত হয়। এটি reducer function এবং initial state দিয়ে কাজ করে।",
            "example": `
  import React, { useReducer } from "react";
  
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }
  
  function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
  
    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      </div>
    );
  }
            `
          }
        ]
      },
      {
        "id": "react-advanced-22",
        "question": "Explain how to create and use custom hooks.",
        "points": [
          {
            "point": "Custom hooks reusable logic encapsulate করতে ব্যবহৃত হয়, যেমন data fetching বা form validation।",
            "example": `
  import { useState, useEffect } from "react";
  
  function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, [url]);
  
    return { data, loading };
  }
  
  function App() {
    const { data, loading } = useFetch("https://api.example.com/data");
  
    if (loading) return <div>Loading...</div>;
  
    return <div>{JSON.stringify(data)}</div>;
  }
            `
          }
        ]
      },
      
      {
        "id": "react-advanced-23",
        "question": "(Additional) How does the Virtual DOM work in React?",
        "points": [
          {
            "point": "Virtual DOM React এর একটি lightweight in-memory representation, যা actual DOM এর পরিবর্তন গুলি efficiently update করে।",
            "example": `
  React Virtual DOM works in 3 steps:
  1. When the state or props change, a new Virtual DOM tree is created.
  2. The changes are compared with the previous Virtual DOM tree using a diffing algorithm.
  3. Only the changed nodes are updated in the actual DOM (reconciliation).
            `
          }
        ]
      },
      {
        "id": "react-advanced-24",
        "question": "(Additional) How does React’s reconciliation algorithm work?",
        "points": [
          {
            "point": "Reconciliation algorithm Virtual DOM এর changes detect করে এবং efficient ভাবে actual DOM এ apply করে।",
            "example": `
  React uses a diffing algorithm to compare the old and new Virtual DOM trees. 
  - Key steps:
    1. Element-level comparison: Checks if elements have the same type.
    2. Key-based comparison: Identifies reusable elements using \`key\` props.
    3. Updates only changed nodes in the DOM.
            `
          }
        ]
      },
      {
        "id": "react-advanced-25",
        "question": "(Additional) Explain how `React.StrictMode` works and its purpose.",
        "points": [
          {
            "point": "`React.StrictMode` development mode এ additional warnings দেখানোর জন্য ব্যবহৃত হয়। এটি component behavior যাচাই করতে সাহায্য করে।",
            "example": `
  import React from "react";
  
  function App() {
    return (
      <React.StrictMode>
        <MyComponent />
      </React.StrictMode>
    );
  }
  
  - Detects unsafe lifecycle methods.
  - Warns about deprecated APIs.
  - Identifies side effects in rendering.
            `
          }
        ]
      },
      {
        "id": "react-advanced-26",
        "question": "(Additional) How do you prevent unnecessary re-renders in React?",
        "points": [
          {
            "point": "Unnecessary re-render prevent করতে React.memo, useCallback, এবং useMemo ব্যবহার করা হয়।",
            "example": `
  import React, { memo } from "react";
  
  const Child = memo(({ value }) => {
    console.log("Rendered");
    return <div>{value}</div>;
  });
  
  function Parent() {
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <Child value="Static Value" />
      </div>
    );
  }
            `
          }
        ]
      },
      {
        "id": "react-advanced-27",
        "question": "(Additional) Explain how to debounce or throttle a function in React.",
        "points": [
          {
            "point": "Debounce function একটি নির্দিষ্ট সময়ে মাত্র একবার execute হয়, frequent calls ignore করে। Throttle একটি নির্দিষ্ট interval এ calls execute করে।",
            "example": `
  import React, { useState } from "react";
  
  function debounce(func, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  }
  
  function App() {
    const [value, setValue] = useState("");
  
    const handleInput = debounce((input) => {
      console.log("Input:", input);
    }, 500);
  
    return <input onChange={(e) => handleInput(e.target.value)} />;
  }
            `
          }
        ]
      },
        
      


    ]
  },
    

]
