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



  

  
]