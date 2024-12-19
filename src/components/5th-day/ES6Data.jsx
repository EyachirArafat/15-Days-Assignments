export const ES6Data = [
  {
    step: "One",
    title: "ES6 Interview Questions with Bangla Explanations",
    qa: [
      {
        id: "es6-1",
        question: "What are arrow functions in ES6, and how are they different from regular functions?",
        points: [
          {
            point: "Arrow functions হলো ES6 এর একটি ফিচার, যা সংক্ষিপ্ত ফর্মে ফাংশন ডিফাইন করতে ব্যবহৃত হয়। এগুলো `=>` ব্যবহার করে লেখা হয়।",
            example: "`const add = (a, b) => a + b;`",
          },
          {
            point: "Arrow functions এর একটি গুরুত্বপূর্ণ বৈশিষ্ট্য হলো এটি নিজস্ব `this` তৈরি করে না, যা কলব্যাক ফাংশনের ক্ষেত্রে খুবই কার্যকর।",
            example: "`const obj = { count: 10, increment: () => this.count++; };`",
          },
        ],
      },
      {
        id: "es6-2",
        question: "What is destructuring assignment in ES6, and how does it work with arrays and objects?",
        points: [
          {
            point: "Destructuring assignment হলো এমন একটি পদ্ধতি, যার মাধ্যমে অ্যারে বা অবজেক্ট থেকে ডাটা ভ্যারিয়েবলে আনপ্যাক করা যায়।",
            example: "`const [a, b] = [1, 2]; const { name, age } = person;`",
          },
          {
            point: "এটি অনেক সহজ এবং কম কোড লেখার সুযোগ দেয়।",
            example: "`const { x, y } = { x: 10, y: 20 };`",
          },
        ],
        project: [
          {
            description: "একটি ফাংশন লিখুন, যা একটি অবজেক্ট নেবে এবং প্রতিটি প্রপার্টি আলাদাভাবে প্রিন্ট করবে।",
            example1: `
              const logProperties = ({ name, age, city }) => {
                console.log(name, age, city);
              };
              logProperties({ name: 'Alice', age: 25, city: 'Wonderland' });
            `,
          },
        ],
      },
      {
        id: "es6-3",
        question: "Explain `let`, `const`, and `var` keywords. When should you use each?",
        points: [
          {
            point: "`let` ব্লক-স্কোপড ভ্যারিয়েবল তৈরি করতে ব্যবহৃত হয়, এবং এটি পুনরায় এসাইন করা যায়।",
            example: "`let count = 0; count++;`",
          },
          {
            point: "`const` ব্লক-স্কোপড ভ্যারিয়েবল তৈরি করে, যা পুনরায় এসাইন করা যায় না। এটি কনস্ট্যান্ট ভ্যালু রাখার জন্য ব্যবহার করা হয়।",
            example: "`const pi = 3.14;`",
          },
          {
            point: "`var` ফাংশন-স্কোপড এবং অনেক ক্ষেত্রে এর ব্যবহারে অসুবিধা হতে পারে। এটি হোস্টিং-এর কারণে প্রেডিক্টেবল নয়।",
            example: "`var x = 10;`",
          },
        ],
      },
      {
        id: "es6-4",
        question: "What is the `spread` operator, and how can it be used with arrays and objects?",
        points: [
          {
            point: "`spread` অপারেটর (`...`) অ্যারে বা অবজেক্টের কন্টেন্ট কপি করতে বা এক্সপ্যান্ড করতে ব্যবহৃত হয়।",
            example: "`const newArray = [...arr1, ...arr2];`",
          },
          {
            point: "এটি অ্যারে মার্জ এবং অবজেক্ট ক্লোন করার জন্য সহজ একটি উপায়।",
            example: "`const newObj = { ...obj1, ...obj2 };`",
          },
        ],
        project: [
          {
            description: "দুটি অ্যারে `spread` অপারেটর ব্যবহার করে মার্জ করুন।",
            example1: `
              const arr1 = [1, 2];
              const arr2 = [3, 4];
              const merged = [...arr1, ...arr2];
              console.log(merged);
            `,
          },
        ],
      },
      {
        id: "es6-5",
        question: "How does template literals work in ES6, and how does it make string interpolation easier?",
        points: [
          {
            point: "Template literals ব্যাকটিক্স (``) ব্যবহার করে লেখা হয়, যা স্ট্রিংয়ের মধ্যে এক্সপ্রেশন এম্বেড করতে দেয়।",
            example: "`const greeting = `Hello, ${name}!`;`",
          },
          {
            point: "এটি মাল্টি-লাইন স্ট্রিং এবং স্ট্রিং ইন্টারপোলেশনের কাজ সহজ করে।",
            example: "`const message = `This is a\nmulti-line string`;`",
          },
        ],
      },
      {
        id: "es6-6",
        question: "What are `default parameters` in ES6, and how do they improve function flexibility?",
        points: [
          {
            point: "ডিফল্ট প্যারামিটার ফাংশনের আর্গুমেন্টের জন্য ডিফল্ট ভ্যালু সেট করতে ব্যবহৃত হয়।",
            example: "`function greet(name = 'Guest') { console.log(`Hello, ${name}`); }`",
          },
          {
            point: "যখন কোনো আর্গুমেন্ট পাস করা হয় না, তখন এটি `undefined` এর পরিবর্তে ডিফল্ট মান ব্যবহার করে।",
            example: "`greet(); // 'Hello, Guest'`",
          },
        ],
      },
      {
        id: "es6-7",
        question: "Explain what `Map` and `Set` are in ES6 and how they differ from objects and arrays.",
        points: [
          {
            point: "`Map` হলো key-value পেয়ার রাখার জন্য একটি স্ট্রাকচার, যেখানে key যেকোনো টাইপ হতে পারে।",
            example: "`const map = new Map([[1, 'one'], [2, 'two']]);`",
          },
          {
            point: "`Set` একটি ডাটা স্ট্রাকচার যা ইউনিক ভ্যালু রাখে।",
            example: "`const set = new Set([1, 2, 2, 3]); // Set { 1, 2, 3 }`",
          },
        ],
        project: [
          {
            description: "`Map` ব্যবহার করে একটি সাধারণ ডিকশনারি তৈরি করুন।",
            example1: `
              const dictionary = new Map();
              dictionary.set('apple', 'A fruit');
              console.log(dictionary.get('apple')); // 'A fruit'
            `,
          },
        ],
      },
      {
        id: "es6-8",
        question: "What is the purpose of the `for...of` loop, and how is it different from `for...in`?",
        points: [
          {
            point: "`for...of` ইটেরেবল অবজেক্টের উপর লুপ চালায়, যেমন অ্যারে।",
            example: "`for (const item of [1, 2, 3]) { console.log(item); }`",
          },
          {
            point: "`for...in` অবজেক্টের এনুমারেবল প্রপার্টির উপর লুপ চালায়।",
            example: "`for (const key in { a: 1, b: 2 }) { console.log(key); }`",
          },
        ],
      },
      {
        id: "es6-9",
        question: "Explain the concept of `Promise` in JavaScript. How do you use `.then()` and `.catch()`?",
        points: [
          {
            point: "Promise হলো এমন একটি অবজেক্ট যা ভবিষ্যতে কোনো মান প্রদান করবে (resolve) অথবা কোনো ত্রুটি (reject)।",
            example: "`new Promise((resolve, reject) => { resolve('Done'); });`",
          },
          {
            point: "`then()` ব্যবহার করে সাকসেস হ্যান্ডল করা হয় এবং `catch()` ব্যবহার করে এরর হ্যান্ডল করা হয়।",
            example: "`promise.then(result => console.log(result)).catch(error => console.error(error));`",
          },
        ],
        project: [
          {
            description: "একটি প্রমিজ তৈরি করুন যা ২ সেকেন্ড পর রেজল্ভ হবে।",
            example1: `
              const promise = new Promise((resolve) => {
                setTimeout(() => resolve('Resolved after 2 seconds'), 2000);
              });
              promise.then(console.log);
            `,
          },
        ],
      },
      {
        id: "es6-10",
        question: "What is async/await, and how does it work with Promises?",
        points: [
          {
            point: "Async/await হলো ES6 এর এমন ফিচার, যা প্রমিজের উপর ভিত্তি করে asynchronous কোড লেখা সহজ করে। এটি সিনক্রোনাস স্টাইলের মতো দেখতে হয়।",
            example: `
              async function fetchData() {
                const response = await fetch('https://api.example.com/data');
                const data = await response.json();
                console.log(data);
              }
            `,
          },
          {
            point: "`async` ফাংশন সবসময় একটি প্রমিজ রিটার্ন করে, এবং `await` ব্যবহার করে প্রমিজ রিজলভ হওয়া পর্যন্ত অপেক্ষা করা হয়।",
            example: `
              async function getNumber() {
                const number = await Promise.resolve(10);
                console.log(number); // 10
              }
            `,
          },
          {
            point: "`try-catch` ব্যবহার করে async/await এর এরর হ্যান্ডলিং করা হয়।",
            example: `
              async function fetchData() {
                try {
                  const response = await fetch('invalid-url');
                  const data = await response.json();
                } catch (error) {
                  console.error('Error:', error.message);
                }
              }
            `,
          },
        ],
      },
    ],
  },
];

