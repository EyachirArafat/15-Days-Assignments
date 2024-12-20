export const WebAPIJsonData =[
  {
    step: "One",
    title: "Web API & JSON (10 questions & Answers)",
    qa: [
      {
        id: "webapi-1",
        question: "What is the Fetch API, and how does it work with Promises?",
        points: [
          {
            point: "Fetch API হল একটি নতুন API যা HTTP রিকোয়েস্ট করতে ব্যবহৃত হয়। এটি Promise অবজেক্ট রিটার্ন করে, যার মাধ্যমে অ্যাসিনক্রোনাস ডেটা লোড করা হয়।",
            example: `উদাহরণ: 
        fetch('https://jsonplaceholder.typicode.com/posts') 
— এটি একটি GET রিকোয়েস্ট পাঠাবে এবং Promise রিটার্ন করবে।`,
          },
          {
            point: "Promise-এর মাধ্যমে আপনি API থেকে ডেটা পাওয়ার পর বিভিন্ন ধাপ অনুসরণ করতে পারেন, যেমন `.then()` এবং `.catch()` মেথড ব্যবহার করে রেসপন্স এবং ত্রুটি হ্যান্ডলিং।",
            example: `উদাহরণ: 
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))`,
          },
          {
            point: "প্রকল্প: একটি পাবলিক API (যেমন JSONPlaceholder) থেকে ডেটা ফেচ করুন এবং তা পেজে প্রদর্শন করুন।",
            example: `উদাহরণ: 
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => { document.getElementById('output')
        .innerHTML = JSON.stringify(data); });`,
          },
        ],
      },
      {
        id: "webapi-2",
        question: "How does `XMLHttpRequest` differ from the Fetch API?",
        points: [
          {
            point: "`XMLHttpRequest` একটি পুরনো API যা HTTP রিকোয়েস্ট করার জন্য ব্যবহৃত হয়। এটি কলব্যাক ফাংশন ব্যবহার করে, যা কোডকে কমপ্লেক্স করে তোলে।",
            example: `উদাহরণ: 
      var xhr = new XMLHttpRequest(); 
      xhr.open('GET', 'url', true);
      xhr.send();`,
          },
          {
            point: "`Fetch API` আরও সহজ এবং আধুনিক। এটি Promise ব্যবহার করে, যেটি কোডকে ক্লিন এবং আরও ম্যানেজেবল করে তোলে।",
            example: "উদাহরণ: `fetch('url')` — এটি Promise রিটার্ন করবে, যা আরও পরিষ্কার কোড লেখার সুবিধা দেয়।",
          },
          {
            point: "Fetch API দ্বারা কোড লিখা অনেক সহজ এবং অ্যাসিনক্রোনাস কাজ আরও পরিষ্কার এবং সোজা হয়, whereas `XMLHttpRequest`-এ কলব্যাক এবং হ্যান্ডলিং একটু জটিল।",
          },
        ],
      },
      {
        id: "webapi-3",
        question: "Explain what JSON is and how it’s used in JavaScript.",
        points: [
          {
            point: "JSON (JavaScript Object Notation) হল একটি লাইটওয়েট ডেটা ফরম্যাট যা ডেটা স্টোর এবং ট্রান্সফার করতে ব্যবহৃত হয়। এটি মানুষের পঠনযোগ্য এবং মেশিনে পার্স করা সহজ।",
            example: `উদাহরণ: 
      { 
        \"name\": \"John\",
        \"age\": 30,
        \"city\": \"New York\" 
      }
— এটি একটি JSON অবজেক্ট।`,
          },
          {
            point: "JavaScript এ JSON ডেটা প্রায়ই API থেকে পাওয়া যায়, এবং এটি JavaScript অবজেক্টে রূপান্তরিত করা হয়।",
            example: `উদাহরণ: 
      JSON.parse('{"name": "John"}')
— এটি JSON স্ট্রিংকে একটি JavaScript অবজেক্টে রূপান্তর করবে।`,
          },
        ],
      },
      {
        id: "webapi-4",
        question: "How do you parse JSON data in JavaScript, and how do you stringify JavaScript objects?",
        points: [
          {
            point: "`JSON.parse()` একটি JSON স্ট্রিংকে JavaScript অবজেক্টে রূপান্তরিত করে।",
            example: `উদাহরণ: 
      let obj = JSON.parse('{"name":"John"}');
— এটি একটি JSON স্ট্রিংকে অবজেক্টে রূপান্তর করবে।`,
          },
          {
            point: "`JSON.stringify()` একটি JavaScript অবজেক্টকে JSON স্ট্রিংয়ে রূপান্তরিত করে।",
            example: `উদাহরণ: 
      let jsonStr = JSON.stringify({
       name: 'John',
       age: 30 
      }); 
— এটি একটি অবজেক্টকে JSON স্ট্রিংয়ে রূপান্তর করবে।`,
          },
          {
            point: "প্রকল্প: একটি ফাংশন তৈরি করুন যা একটি অবজেক্টকে JSON এ রূপান্তরিত করবে এবং তারপর তা আবার অবজেক্টে রূপান্তরিত করবে।",
            example: `উদাহরণ:
      let obj = { 
        name: 'John' 
      }; 
      let jsonStr = JSON.stringify(obj); 
      let parsedObj = JSON.parse(jsonStr);`,
          },
        ],
      },
      {
        id: "webapi-5",
        question: "What is CORS, and why do we need it when making API requests?",
        points: [
          {
            point: "CORS (Cross-Origin Resource Sharing) হল একটি নিরাপত্তা বৈশিষ্ট্য যা ব্রাউজারকে এক ডোমেইন থেকে অন্য ডোমেইনে রিকোয়েস্ট করার অনুমতি দেয়।",
            example: `যদি আপনি একটি API রিকোয়েস্ট পাঠান একটি আলাদা ডোমেইনে, 
তবে CORS হেডার সেট না করলে ব্রাউজার রিকোয়েস্টটি ব্লক করে দিবে।`,
          },
          {
            point: "CORS আমাদের সুরক্ষা নিশ্চিত করে যাতে একটি ওয়েব পেজ একটি নির্দিষ্ট ডোমেইন থেকে অন্য ডোমেইনে অনধিকার প্রবেশ না করতে পারে।",
          },
        ],
      },
      {
        id: "webapi-6",
        question: "Explain how the `FormData` API works and when you’d use it.",
        points: [
          {
            point: "`FormData` API ফর্ম ডেটা সংগ্রহ এবং প্রেরণ করার জন্য ব্যবহৃত হয়, বিশেষত ফর্মে ফাইল আপলোড করার জন্য এটি উপকারী।",
            example: `উদাহরণ: 
      let formData = new FormData(); 
      formData.append('username', 'John'); 

— এটি একটি ফর্ম ডেটা অবজেক্ট তৈরি করবে।`,
          },
          {
            point: "`FormData` ফর্ম ডেটা সংগ্রহ করতে এবং ফর্মে সঠিকভাবে ফাইল অথবা অন্য তথ্য পাঠানোর জন্য ব্যবহৃত হয়।",
          },
        ],
      },
      {
        id: "webapi-7",
        question: "What is the purpose of the `History` API, and how do `pushState` and `replaceState` work?",
        points: [
          {
            point: "`History` API হালনাগাদ URL-এ পেজ রিলোড ছাড়াই ব্রাউজারের ইতিহাস এবং স্টেট পরিচালনা করতে ব্যবহৃত হয়।",
            example: `উদাহরণ: 
      history.pushState({page: 1}, 'title 1', '?page=1'); 
— এটি ব্রাউজারের URL আপডেট করবে, কিন্তু পেজ রিলোড করবে না।`,
          },
          {
            point: "`pushState()` URL পরিবর্তন করে এবং ব্রাউজারের ইতিহাসে একটি নতুন এন্ট্রি তৈরি করে। `replaceState()` একই কাজ করে তবে এটি ইতিহাসে একটি নতুন এন্ট্রি তৈরি না করে পুরনো এন্ট্রি প্রতিস্থাপন করে।",
            example: `উদাহরণ: 
      history.replaceState({page: 2}, 'title 2', '?page=2'); 
— এটি বর্তমান পেজের URL পরিবর্তন করবে।`,
          },
          {
            point: "প্রকল্প: `pushState` ব্যবহার করে একটি সাধারণ সিঙ্গেল-পেজ নেভিগেশন সিস্টেম তৈরি করুন, যা ইউআরএল আপডেট করবে কিন্তু পেজ রিলোড করবে না।",
          },
        ],
      },
      {
        id: "webapi-8",
        question: "How can you handle errors in API requests with `try/catch` blocks and the `.catch()` method?",
        points: [
          {
            point: "`try/catch` ব্লক ব্যবহার করে আপনি অ্যাসিনক্রোনাস কোডে ত্রুটি হ্যান্ডলিং করতে পারেন। `fetch` API সহ এটি ব্যবহার করা যেতে পারে।",
            example: `উদাহরণ: 
      try { 
        let response = await fetch('url'); 
      } catch (error) { 
        console.log('Error:', error); 
      }`,
          },
          {
            point: "`fetch` API এর `.catch()` মেথডও ত্রুটি হ্যান্ডলিং করতে ব্যবহৃত হয়, যদি কোনো ত্রুটি ঘটে।",
            example: `উদাহরণ: 
      fetch('url')
      .then(response => response.json())
      .catch(error => console.log(error));`,
          },
        ],
      },
      {
        id: "webapi-9",
        question: "What are WebSockets, and how do they differ from HTTP requests?",
        points: [
          {
            point: "WebSockets হল একটি টেকনোলজি যা ব্রাউজার এবং সার্ভারের মধ্যে দুই-দিকনির্দেশক কমিউনিকেশন স্থাপন করতে সহায়ক। এটি HTTP রিকোয়েস্টের চেয়ে বেশি ইন্টারঅ্যাক্টিভ এবং দ্রুত।",
            example: `উদাহরণ: 
      let socket = new WebSocket('ws://example.com');
      socket.onmessage = function(event) { 
        console.log(event.data); 
      };`,
          },
          {
            point: "HTTP রিকোয়েস্ট একমুখী, অর্থাৎ ক্লায়েন্ট সার্ভার থেকে ডেটা চেয়ে পাঠায়। কিন্তু WebSocket-এ, সার্ভার এবং ক্লায়েন্ট উভয়ই ডেটা পাঠাতে পারে।",
          },
        ],
      },
      {
        id: "webapi-10",
        question: "Explain the basics of the Service Worker API and its use in creating progressive web apps (PWAs).",
        points: [
          {
            point: "Service Worker হল একটি স্ক্রিপ্ট যা ব্রাউজারে রান করে, এবং এটি অফলাইনে কাজ করতে, ব্যাকগ্রাউন্ডে ডেটা সিঙ্ক করতে এবং নোটিফিকেশন পাঠাতে সহায়ক।",
            example: `উদাহরণ: 
      navigator.serviceWorker.register('/service-worker.js') 

— এটি একটি সার্ভিস ওয়ার্কার রেজিস্টার করবে।`,
          },
          {
            point: "Progressive Web Apps (PWAs) তৈরি করতে Service Worker ব্যবহার করা হয়, যাতে অফলাইন ব্যবহারযোগ্যতা এবং ফাস্ট লোডিং সম্ভব হয়।",
          },
        ],
      },
    ],
  }  
]