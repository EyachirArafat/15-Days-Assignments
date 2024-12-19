export const JSDataQA = [
  {
    step: "One",
    title: "JavaScript Fundamentals",
    questions: [
      {
        id: "js-fundamentals-1",
        question: "What are the different data types in JavaScript?",
        details: {
          explanation: "JavaScript has 8 data types: 7 primitives (String, Number, BigInt, Boolean, Undefined, Null, Symbol) and 1 non-primitive (Object).",
          example: `
            let name = "Alice"; // String
            let age = 25; // Number
            let isActive = true; // Boolean
          `,
          bangla: "জাভাস্ক্রিপ্টে আটটি ডেটা টাইপ রয়েছে। সাতটি প্রিমিটিভ: স্ট্রিং, নাম্বার, বিগইন্ট, বুলিয়ান, আনডিফাইন্ড, নাল এবং সিম্বল। একটি নন-প্রিমিটিভ: অবজেক্ট।",
        },
      },
      {
        id: "js-fundamentals-2",
        question: "What is the difference between `var`, `let`, and `const`?",
        details: {
          explanation: "`var` is function-scoped, whereas `let` and `const` are block-scoped. `const` is used for constants that cannot be reassigned.",
          example: `
            var x = 10; 
            let y = 20; 
            const z = 30; 
          
          
** Scope:
1. var is function-scoped.
2. let and const are block-scoped (accessible only within the block they are defined in).

** Reassignment:
1. var and let allow reassignment.
2. const does not allow reassignment, but you can modify the contents of objects or arrays declared with const.

** Redeclaration:
1. var allows redeclaration within the same scope.
2. let and const do not allow redeclaration in the same scope.

** Hoisting:
1. var is hoisted and initialized as undefined.
2. let and const are hoisted but remain in a "temporal dead zone" until the execution reaches their declaration.

** Initialization:
1. var and let can be declared without initialization.
2. const requires initialization at the time of declaration.  `,
          bangla: "`var` ফাংশন-স্কোপড, যেখানে `let` এবং `const` ব্লক-স্কোপড। `const` ব্যবহৃত হয় এমন ভেরিয়েবলের জন্য যা পুনরায় অ্যাসাইন করা যাবে না।",
        },
      },
      {
        id: "js-fundamentals-3",
        question: "Explain JavaScript's `==` vs. `===` operators.",
        details: {
          explanation: "`==` checks for equality with type coercion (জবরদস্তি), whereas `===` checks for strict equality (no type coercion).",
          example: `
            5 == "5"; // true (type coercion)
            5 === "5"; // false (strict comparison)
          `,
          bangla: "`==` টাইপ কনভার্সন করে সমতা পরীক্ষা করে। `===` টাইপ কনভার্সন ছাড়াই কড়া সমতা পরীক্ষা করে।",
        },
      },
      {
        id: "js-fundamentals-4",
        question: "What is type coercion in JavaScript? Give an example.",
        details: {
          explanation: "Type coercion automatically converts one data type to another (e.g., string to number).",
          example: `
            "5" - 2; // 3 (string converted to number)
            "5" + 2; // "52" (number converted to string)

Type coercion হল এমন একটি প্রক্রিয়া যেখানে জাভাস্ক্রিপ্ট স্বয়ংক্রিয়ভাবে 
একটি ডেটা টাইপকে অন্য টাইপে রূপান্তর করে। 

এটি হতে পারে:
1. Implicit Coercion (অপ্রকাশিত কোয়ের্শন): জাভাস্ক্রিপ্ট নিজে স্বয়ংক্রিয়ভাবে টাইপ রূপান্তর করে।
2. Explicit Coercion (স্পষ্ট কোয়ের্শন): প্রোগ্রামার সরাসরি টাইপ রূপান্তরের জন্য কোড লিখে।

const result = 5 + "10"; // Implicit coercion
console.log(result); // Output: "510" (5 কে string এ রূপান্তর করা হয়েছে)

** বাংলা ব্যাখ্যা:
এখানে 5 একটি সংখ্যা এবং "10" একটি স্ট্রিং। + অপারেটর ব্যবহার করলে, 
জাভাস্ক্রিপ্ট 5 কে স্ট্রিং-এ রূপান্তর করে এবং দুটি স্ট্রিং যোগ করে।
          

Explicit Type Coercion (স্পষ্ট টাইপ কোয়ের্শন)
Explicit coercion প্রোগ্রামার নিজে টাইপ রূপান্তর করার জন্য ফাংশন ব্যবহার করে।


const str = "123";
const num = Number(str); // Explicit coercion
console.log(num); // Output: 123 (এখন এটি একটি সংখ্যা)

const boolToStr = String(true); // Explicit coercion
console.log(boolToStr); // Output: "true" (এখন এটি একটি স্ট্রিং)
`,
          bangla: "টাইপ কনভার্সন স্বয়ংক্রিয়ভাবে একটি ডেটা টাইপ থেকে অন্যটিতে পরিবর্তিত হয় (যেমন, স্ট্রিং থেকে নাম্বার)।",
        },
      },
      {
        id: "js-fundamentals-5",
        question: "Explain the concept of scope in JavaScript.",
        details: {
          explanation: "Scope defines the accessibility of variables. JavaScript has function scope, block scope, and global scope.",
          example: `
            function myFunction() {
              let localVar = "Local"; // Function scope
              if (true) {
                let blockVar = "Block"; // Block scope
              }
              console.log(localVar); // Accessible
              console.log(blockVar); // Error: blockVar is not defined
            }
          `,
          bangla: "স্কোপ নির্ধারণ করে কোন ভেরিয়েবল কোথায় অ্যাক্সেস করা যাবে। জাভাস্ক্রিপ্টে ফাংশন স্কোপ, ব্লক স্কোপ এবং গ্লোবাল স্কোপ রয়েছে।",
        },
      },
      {
        id: "js-fundamentals-6",
        question: "What is hoisting in JavaScript?",
        details: {
          explanation: `Hoisting হল জাভাস্ক্রিপ্টের একটি প্রক্রিয়া যেখানে ভেরিয়েবল, ফাংশন বা ক্লাসের ডিক্লেয়ারেশনগুলি স্কোপের শীর্ষে সরিয়ে নেওয়া হয় (প্রোগ্রাম চালানোর আগে)। এর ফলে, আপনি ভেরিয়েবল বা ফাংশন ডিক্লেয়ার করার আগেই সেগুলো ব্যবহার করতে পারেন।
`,
          example: `1. Variable Hoisting (ভেরিয়েবল হোস্টিং)
var দ্বারা ডিক্লেয়ার করা ভেরিয়েবলগুলি হোস্টেড হয় এবং তাদের ভ্যালু ডিফল্টভাবে undefined এ সেট করা হয়।
let এবং const দ্বারা ডিক্লেয়ার করা ভেরিয়েবলগুলিও হোস্টেড হয়, কিন্তু এগুলো "temporal dead zone" এ থাকে যতক্ষণ না স্ক্রিপ্ট তাদের ডিক্লেয়ারেশনে পৌঁছায়।
উদাহরণ: var
console.log(a); // Output: undefined (হোস্টেড, কিন্তু ইনিশিয়ালাইজ হয়নি)
var a = 5;
console.log(a); // Output: 5

বাংলা ব্যাখ্যা:
এখানে var ভেরিয়েবলটি স্কোপের শীর্ষে সরানো হয়েছে, কিন্তু এর মান শুরুতে undefined থাকে।


উদাহরণ: let এবং const

console.log(b); // Error: Cannot access 'b' before initialization
let b = 10;

বাংলা ব্যাখ্যা:
let এবং const ভেরিয়েবলগুলি স্কোপের শীর্ষে হোস্টেড হলেও তাদের ইনিশিয়ালাইজ করার আগে অ্যাক্সেস করা যায় না। এটি "temporal dead zone" এর কারণে।


Functions vs. Variables (ফাংশন বনাম ভেরিয়েবল):

ফাংশন ডিক্লেয়ারেশন সম্পূর্ণরূপে হোস্টেড হয়।
var এর ভেরিয়েবল হোস্টেড হয় কিন্তু ডিফল্ট মান undefined হয়।

Function Hoisting (ফাংশন হোস্টিং)
Function declarations (ফাংশন ডিক্লেয়ারেশন) সম্পূর্ণরূপে হোস্টেড হয়। আপনি ডিক্লেয়ারেশনের আগেই ফাংশন কল করতে পারেন।
Function expressions (ফাংশন এক্সপ্রেশন) এবং arrow functions (অ্যারো ফাংশন) হোস্টেড হয় না।

hoistedFunction(); // Output: "Hello, I am hoisted!"
function hoistedFunction() {
  console.log("Hello, I am hoisted!");
}

hoistedExpression(); // Error: Cannot access 'hoistedExpression' before initialization
const hoistedExpression = function () {
  console.log("Hello, I am not hoisted!");
};

ক্লাসগুলিও হোস্টেড হয়, কিন্তু তাদের ইনিশিয়ালাইজ করা হয় না। ডিক্লেয়ারেশনের আগে ক্লাস ব্যবহার করলে এরর হবে।
const obj = new MyClass(); // Error: Cannot access 'MyClass' before initialization
class MyClass {
  constructor() {
    console.log("Class created!");
  }
}
`,
          bangla: `Hoisting হল জাভাস্ক্রিপ্টের একটি প্রক্রিয়া যেখানে ভেরিয়েবল, ফাংশন বা ক্লাসের ডিক্লেয়ারেশনগুলি স্কোপের শীর্ষে সরিয়ে নেওয়া হয় (প্রোগ্রাম চালানোর আগে)। এর ফলে, আপনি ভেরিয়েবল বা ফাংশন ডিক্লেয়ার করার আগেই সেগুলো ব্যবহার করতে পারেন।
`,
        },
      },
      {
        id: "js-fundamentals-7",
        question: "What are template literals, and how are they used?",
        details: {
          explanation: "Template literals allow embedding expressions and multi-line strings using backticks (`) instead of quotes.",
          example: `
            const name = "Alice";
            const greeting = \`Hello, \${name}!\`; // "Hello, Alice!"
          `,
          bangla: "টেমপ্লেট লিটারাল ব্যাকটিক্স (`) ব্যবহার করে এক্সপ্রেশনের সাথে স্ট্রিং তৈরি করতে দেয়। এটি মাল্টি-লাইন স্ট্রিং তৈরি করতেও ব্যবহৃত হয়।",
        },
      },
      {
        id: "js-fundamentals-8",
        question: "Explain what a higher-order function is in JavaScript.",
        details: {
          explanation: "A higher-order function is a function that takes other functions as arguments or returns a function.",
          example: `
            function higherOrder(func) {
              return func();
            }
            function sayHello() {
              return "Hello!";
            }
            console.log(higherOrder(sayHello)); // "Hello!"
          `,
          bangla: "হায়ার-অর্ডার ফাংশন এমন একটি ফাংশন যা অন্য ফাংশনকে আর্গুমেন্ট হিসাবে গ্রহণ করে বা একটি ফাংশন রিটার্ন করে।",
        },
      },
      {
        id: "js-fundamentals-9",
        question: "What are arrow functions, and how are they different from regular functions?",
        details: {
          explanation: "Arrow functions are a concise syntax for writing functions. They don't bind their own `this`, making them different from regular functions.",
          example: `
            const add = (a, b) => a + b;
            console.log(add(2, 3)); // 5
          `,
          bangla: "অ্যারো ফাংশন হলো ফাংশন লেখার একটি সংক্ষিপ্ত পদ্ধতি। এগুলো নিজেদের `this` বাইন্ড করে না, যা নিয়মিত ফাংশনের থেকে ভিন্ন।",
        },
      },
      {
        id: "js-fundamentals-10",
        question: "What is an Immediately Invoked Function Expression (IIFE)?",
        details: {
          explanation: "IIFE is a function that is executed immediately after its definition.",
          example: `
            (function() {
              console.log("IIFE executed");
            })();
          `,
          bangla: "IIFE হলো একটি ফাংশন যা ডিফাইন হওয়ার সঙ্গে সঙ্গেই এক্সিকিউট হয়।",
        },
      },
    ],
  },



  {
    step: "Two",
    title: "Functions and Objects",
    questions: [
      {
        id: "functions-1",
        question: "Explain the concept of closures in JavaScript.",
        details: {
          explanation: "A closure is a function that retains access to its outer scope, even after the outer function has returned.",
          example: `
            function outer() {
              let count = 0;
              return function inner() {
                count++;
                return count;
              };
            }
            const counter = outer();
            console.log(counter()); // 1
            console.log(counter()); // 2
          
** ক্লোজারের ব্যবহার:
1. ডেটা প্রাইভেসি: প্রাইভেট ভেরিয়েবল তৈরি করতে।
2. : ফাংশন কলের মধ্যে স্টেট মেইনটেইন করতে।
3. ইভেন্ট হ্যান্ডলার: অ্যাসিঙ্ক্রোনাস অপারেশনের মধ্যে ভেরিয়েবল মনে রাখতে।
4. কারিং (Currying): ফাংশনের আর্গুমেন্ট সেভ করে আংশিক ফাংশন তৈরি করতে।  `,
          bangla: "ক্লোজার হলো এমন একটি ফাংশন যা তার বাইরের স্কোপে অ্যাক্সেস ধরে রাখে, এমনকি বাইরের ফাংশনটি রিটার্ন করার পরেও।",
        },
      },
      {
        id: "functions-2",
        question: "What is the `this` keyword, and how does it behave in different contexts?",
        details: {
          explanation: "`this` refers to the object it belongs to and behaves differently depending on how the function is called.",
          example: `
            const obj = {
              name: "Alice",
              greet: function () {
                console.log(this.name);
              },
            };
            obj.greet(); // "Alice"

            --------------------------------------

i) Global Context (গ্লোবাল প্রসঙ্গ)
গ্লোবাল স্কোপে (যেখানে কোনো ফাংশনের ভিতরে নয়), ব্রাউজারে this উইন্ডো অবজেক্ট নির্দেশ করে।
console.log(this); // Output: Window (ব্রাউজারে)
গ্লোবাল স্কোপে this সবসময় window (ব্রাউজারে) অথবা global (Node.js এ) অবজেক্ট নির্দেশ করে।


ii) Object Context (অবজেক্ট প্রসঙ্গ)
যখন this একটি অবজেক্টের মেথডে ব্যবহৃত হয়, এটি ঐ অবজেক্টকেই নির্দেশ করে।
const obj = {
  name: "Bangla",
  getName: function () {
    return this.name;
  },
};
console.log(obj.getName()); // Output: "Bangla"
এখানে this.name অবজেক্টের name প্রপার্টিকে নির্দেশ করে। অর্থাৎ obj অবজেক্টকেই রেফার করে।


iii) Function Context (ফাংশন প্রসঙ্গ)
স্ট্যান্ডার্ড ফাংশনে, this নির্ধারিত হয় কিভাবে ফাংশনটি কল করা হচ্ছে তার উপর ভিত্তি করে।
function showThis() {
  console.log(this);
}
showThis(); // Output: Window (ব্রাউজারে)
সাধারণ ফাংশন কল করলে this গ্লোবাল অবজেক্ট নির্দেশ করে।


iv) Arrow Functions (অ্যারো ফাংশন)
অ্যারো ফাংশনে this তার ঘেরা বাইরের স্কোপ থেকে ইনহেরিট করে।
const obj = {
  name: "Bangla",
  arrowFunc: () => {
    console.log(this);
  },
};
obj.arrowFunc(); // Output: Window (ব্রাউজারে)
অ্যারো ফাংশন তার বাইরের স্কোপের this ব্যবহার করে, অবজেক্টের নয়।


v) Constructor Functions (কন্সট্রাক্টর ফাংশন)
কন্সট্রাক্টর ফাংশনে this নতুন তৈরি করা অবজেক্টকে নির্দেশ করে।
function Person(name) {
  this.name = name;
}
const person = new Person("Bangla");
console.log(person.name); // Output: "Bangla"
কন্সট্রাক্টর ফাংশনে this নতুন অবজেক্ট নির্দেশ করে যা new কীওয়ার্ড দিয়ে তৈরি হয়েছে।


vi) Event Handlers (ইভেন্ট হ্যান্ডলার)
ইভেন্ট হ্যান্ডলারে, this সেই DOM এলিমেন্টকে নির্দেশ করে যেটি ইভেন্ট ট্রিগার করেছে।
document.getElementById("btn").addEventListener("click", function () {
  console.log(this); // Output: <button id="btn"></button>
});
ইভেন্ট হ্যান্ডলারে this সেই এলিমেন্ট নির্দেশ করে যেখানে ইভেন্টটি ঘটেছে।

** গুরুত্বপূর্ণ পয়েন্ট:
1. this এর আচরণ প্রসঙ্গভিত্তিক।
2. অ্যারো ফাংশন সবসময় বাইরের স্কোপ থেকে this গ্রহণ করে।
3. use strict মোডে, গ্লোবাল ফাংশনের this undefined হয়।
          `,
          bangla: "`this` এমন একটি কীওয়ার্ড যা একাধিক কনটেক্সটে আলাদা আলাদা ভাবে আচরণ করে। এটি সাধারণত যেখানে ব্যবহৃত হয় সেই অবজেক্টকেই নির্দেশ করে।",
        },
      },
      {
        id: "functions-3",
        question: "How do you create an object in JavaScript?",
        details: {
          explanation: "Objects can be created using object literals, constructors, or classes.",
          example: `
            const obj = { key: "value" }; // Object literal
            const obj2 = new Object(); // Constructor
          `,
          bangla: "জাভাস্ক্রিপ্টে অবজেক্ট তৈরি করার জন্য অবজেক্ট লিটারাল, কনস্ট্রাক্টর বা ক্লাস ব্যবহার করা যেতে পারে।",
        },
      },
      {
        id: "functions-4",
        question: "What is the difference between `null` and `undefined`?",
        details: {
          explanation: "`null` is an assigned value representing no value, whereas `undefined` means a variable has been declared but not assigned a value.",
          example: `
            let a = null; // a is explicitly set to "no value"
            let b; // b is declared but undefined
          `,
          bangla: "`null` একটি অ্যাসাইনড ভ্যালু যা কোনো ভ্যালু নেই বোঝায়। অন্যদিকে, `undefined` বোঝায় যে ভেরিয়েবল ডিক্লার করা হয়েছে কিন্তু কোনো মান অ্যাসাইন করা হয়নি।",
        },
      },
      {
        id: "functions-5",
        question: "How do you copy an object in JavaScript? Explain shallow vs. deep copy.",
        details: {
          explanation: "Shallow copy duplicates only the top-level properties, whereas deep copy clones nested objects as well.",
          example: `
            const obj = { a: 1, b: { c: 2 } };
            const shallowCopy = { ...obj }; // Top-level only
            const deepCopy = JSON.parse(JSON.stringify(obj)); // Full clone
          `,
          bangla: "শ্যালো কপি শুধুমাত্র উপরের লেভেলের প্রোপার্টিগুলি কপি করে, যেখানে ডীপ কপি সমস্ত নেস্টেড অবজেক্টকেও ক্লোন করে।",
        },
      },
      {
        id: "functions-6",
        question: "Explain how `call`, `apply`, and `bind` work in JavaScript.",
        details: {
          explanation: "`call` invokes a function with arguments individually. `apply` is similar but takes arguments as an array. `bind` returns a new function with a bound `this` value.",
          example: `
            function greet(message) {
              console.log(\`\${message}, \${this.name}\`);
            }
            const user = { name: "Alice" };
            greet.call(user, "Hello"); // "Hello, Alice"
            greet.apply(user, ["Hi"]); // "Hi, Alice"
            const boundGreet = greet.bind(user);
            boundGreet("Hey"); // "Hey, Alice"
          
১. call (কল) মেথড
call মেথড একটি ফাংশনকে কল করে এবং প্রথম প্যারামিটার হিসেবে পাস করা অবজেক্টটিকে this হিসেবে সেট করে। 
পরবর্তী প্যারামিটারগুলো আলাদা করে আর্গুমেন্ট হিসেবে পাস করা হয়।

functionName.call(thisArg, arg1, arg2, ...);

** Example: 

  const person = {
    name: "Rahim",
  };
  function greet(greeting) {
    console.log(\`\${greeting}, \${this.name}\`);
  }
  greet.call(person, "Hello"); // Output: "Hello, Rahim"

২. apply (অ্যাপ্লাই) মেথড
apply মেথডও call এর মতো কাজ করে, তবে এখানে আর্গুমেন্টগুলো একটি অ্যারের আকারে পাস করা হয়।   

const person = {
  name: "Karim",
};

function greet(greeting, punctuation) {
  console.log(\`\${greeting}, \${this.name}\${punctuation}\`);
}

greet.apply(person, ["Hi", "!"]); // Output: "Hi, Karim!"

৩. bind (বাইন্ড) মেথড
bind মেথড একটি নতুন ফাংশন রিটার্ন করে, যেখানে this কন্টেক্সট স্থায়ীভাবে সেট করা থাকে। এটি মূল ফাংশনকে সঙ্গে সঙ্গে কল করে না।

const person = {
  name: "Hasan",
};

function greet(greeting) {
  console.log(\`\${greeting}, \${this.name}\`);
}

const boundGreet = greet.bind(person, "Good Morning");
boundGreet(); // Output: "Good Morning, Hasan"


Method - this Set করে - ফাংশন ইনস্ট্যান্ট কল করে - Arguments Format
call -	হ্যাঁ	- হ্যাঁ - আলাদা করে আর্গুমেন্ট
apply -	হ্যাঁ - হ্যাঁ - অ্যারে আকারে আর্গুমেন্ট
bind -	হ্যাঁ - না (নতুন ফাংশন রিটার্ন করে) - আলাদা করে আর্গুমেন্ট

`,
          bangla: "`call`, `apply` এবং `bind` ফাংশন ব্যবহারের জন্য স্কোপ পরিবর্তন করে। `call` এবং `apply` ফাংশন সঙ্গে সঙ্গেই কল করে যেখানে `bind` একটি নতুন ফাংশন রিটার্ন করে।",
        },
      },
      {
        id: "functions-7",
        question: "What is the prototype chain, and how does inheritance work in JavaScript?",
        details: {
          explanation: "The prototype chain is a mechanism by which objects inherit properties and methods from other objects.",
          example: `
            function Person(name) {
              this.name = name;
            }
            Person.prototype.greet = function () {
              console.log(\`Hello, \${this.name}\`);
            };
            const alice = new Person("Alice");
            alice.greet(); // "Hello, Alice"
          `,
          bangla: "প্রোটোটাইপ চেইন জাভাস্ক্রিপ্টের একটি মেকানিজম যা একটি অবজেক্ট অন্য অবজেক্টের প্রোপার্টি এবং মেথড ইনহেরিট করে।",
        },
      },
    ],
  },

  

  {
    step: "Three",
    title: "Arrays and Strings",
    questions: [
      {
        id: "arrays-1",
        question: "What are some common array methods in JavaScript?",
        details: {
          explanation: "Common array methods include `push`, `pop`, `shift`, `unshift`, `slice`, `splice`, and `concat`.",
          example: `
            const arr = [1, 2, 3];
            arr.push(4); // [1, 2, 3, 4]
            arr.pop(); // [1, 2, 3]
          `,
          bangla: "জাভাস্ক্রিপ্টে সাধারণত ব্যবহৃত অ্যারে মেথডের মধ্যে `push`, `pop`, `shift`, `unshift`, `slice`, `splice` এবং `concat` অন্তর্ভুক্ত।",
        },
      },
      {
        id: "arrays-2",
        question: "How does `map()` differ from `forEach()` in arrays?",
        details: {
          explanation: "`map()` returns a new array with the results of applying a function to each element, whereas `forEach()` performs an action on each element without returning a new array.",
          example: `
            const arr = [1, 2, 3];
            const mapped = arr.map(x => x * 2); // [2, 4, 6]
            arr.forEach(x => console.log(x * 2)); // Logs 2, 4, 6
          `,
          bangla: "`map()` একটি নতুন অ্যারে রিটার্ন করে যেখানে প্রত্যেক উপাদানে একটি ফাংশন প্রয়োগ করা হয়। অন্যদিকে, `forEach()` শুধুমাত্র একটি অ্যাকশন সম্পন্ন করে কোনো মান রিটার্ন ছাড়াই।",
        },
      },
      {
        id: "arrays-3",
        question: "Explain the `filter()` method. How does it work?",
        details: {
          explanation: "`filter()` creates a new array containing elements that pass a given test function.",
          example: `
            const arr = [1, 2, 3, 4];
            const filtered = arr.filter(x => x % 2 === 0); // [2, 4]
          `,
          bangla: "`filter()` এমন একটি নতুন অ্যারে তৈরি করে যেটিতে শুধুমাত্র সেই উপাদানগুলো থাকে যা নির্দিষ্ট শর্ত পূরণ করে।",
        },
      },
      {
        id: "arrays-4",
        question: "What does the `reduce()` method do, and how is it used?",
        details: {
          explanation: "`reduce()` combines all array elements into a single value using a reducer function.",
          example: `
            const arr = [1, 2, 3, 4];
            const sum = arr.reduce((acc, x) => acc + x, 0); // 10
          `,
          bangla: "`reduce()` একটি রিডিউসার ফাংশন ব্যবহার করে সমস্ত অ্যারে উপাদানকে একক মানে রূপান্তর করে।",
        },
      },
      {
        id: "arrays-5",
        question: "How do you find the length of a string and reverse it?",
        details: {
          explanation: "Use the `.length` property for the length and split-join-reverse for reversing.",
          example: `
            const str = "hello";
            console.log(str.length); // 5
            const reversed = str.split("").reverse().join(""); // "olleh"
          `,
          bangla: "একটি স্ট্রিং এর দৈর্ঘ্য জানতে `.length` ব্যবহার করুন এবং স্ট্রিং রিভার্স করতে `split`-`reverse`-`join` মেথড ব্যবহার করুন।",
        },
      },
      {
        id: "arrays-6",
        question: "What are template literals, and how can they be used for string manipulation?",
        details: {
          explanation: "Template literals allow embedding expressions in strings using backticks (`).",
          example: `
            const name = "Alice";
            const greeting = \`Hello, \${name}!\`; // "Hello, Alice!"
          `,
          bangla: "টেমপ্লেট লিটারাল ব্যাকটিক্স (`) ব্যবহার করে স্ট্রিং এর মধ্যে এক্সপ্রেশন এম্বেড করতে দেয়।",
        },
      },
      {
        id: "arrays-7",
        question: "How do you remove duplicates from an array?",
        details: {
          explanation: "You can use a `Set` to remove duplicates from an array.",
          example: `
            const arr = [1, 2, 2, 3];
            const unique = [...new Set(arr)]; // [1, 2, 3]
          `,
          bangla: "`Set` ব্যবহার করে একটি অ্যারে থেকে ডুপ্লিকেট অপসারণ করা যায়।",
        },
      },
    ],
  },
  
  
  
  {
    step: "Four",
    title: "Control Structures and Error Handling",
    questions: [
      {
        id: "control-1",
        question: "How does JavaScript handle implicit type conversion?",
        details: {
          explanation: "JavaScript automatically converts data types when performing operations involving different types. This is known as type coercion.",
          example: `
            console.log(1 + "2"); // "12" (number + string = string)
            console.log("5" - 1); // 4 (string - number = number)
          `,
          bangla: "জাভাস্ক্রিপ্ট বিভিন্ন ডেটা টাইপের উপর অপারেশন চালানোর সময় স্বয়ংক্রিয়ভাবে ডেটা টাইপ পরিবর্তন করে। এটি টাইপ কনভার্সন নামে পরিচিত।",
        },
      },
      {
        id: "control-2",
        question: "What does `typeof` return for different data types?",
        details: {
          explanation: "`typeof` operator returns the data type of a variable or value as a string.",
          example: `
            console.log(typeof 42); // "number"
            console.log(typeof "hello"); // "string"
            console.log(typeof true); // "boolean"
            console.log(typeof undefined); // "undefined"
            console.log(typeof null); // "object" (special case)
          `,
          bangla: "`typeof` অপারেটর একটি ভেরিয়েবল বা মানের ডেটা টাইপ স্ট্রিং আকারে রিটার্ন করে।",
        },
      },
      {
        id: "control-3",
        question: "What is NaN, and how can you check if a value is NaN?",
        details: {
          explanation: "NaN (Not-a-Number) is a special value that indicates an invalid number result. Use `isNaN()` to check if a value is NaN.",
          example: `
            console.log(NaN === NaN); // false
            console.log(isNaN("hello")); // true
            console.log(isNaN(123)); // false
          `,
          bangla: "NaN (Not-a-Number) একটি বিশেষ মান যা একটি অবৈধ সংখ্যার ফলাফল নির্দেশ করে। `isNaN()` ব্যবহার করে একটি মান NaN কিনা পরীক্ষা করা যায়।",
        },
      },
    ],
  },
    
  
  
  {
    step: "Five",
    title: "Type Conversion and Comparison",
    questions: [
      {
        id: "type-1",
        question: "How does JavaScript handle implicit type conversion?",
        details: {
          explanation: "JavaScript performs implicit type conversion during operations with mixed types, often converting one type to another to complete the operation.",
          example: `
            console.log("5" + 2); // "52" (string concatenation)
            console.log("5" - 2); // 3 (string to number conversion)
          `,
          bangla: "জাভাস্ক্রিপ্ট মিশ্র টাইপের অপারেশনের সময় স্বয়ংক্রিয়ভাবে এক ধরনের ডেটা অন্য ধরনের ডেটাতে রূপান্তর করে। এটি টাইপ কনভার্সন নামে পরিচিত।",
        },
      },
      {
        id: "type-2",
        question: "What does `typeof` return for different data types?",
        details: {
          explanation: "`typeof` operator identifies the data type of a value and returns it as a string.",
          example: `
            console.log(typeof 42); // "number"
            console.log(typeof "text"); // "string"
            console.log(typeof undefined); // "undefined"
          `,
          bangla: "`typeof` অপারেটর একটি মানের ডেটা টাইপ সনাক্ত করে এবং সেটি একটি স্ট্রিং হিসাবে রিটার্ন করে।",
        },
      },
      {
        id: "type-3",
        question: "What is NaN, and how can you check if a value is NaN?",
        details: {
          explanation: "NaN (Not-a-Number) represents a computational error during number operations. Use `isNaN()` to check for NaN values.",
          example: `
            console.log(NaN === NaN); // false
            console.log(isNaN("text")); // true
            console.log(isNaN(100)); // false
          `,
          bangla: "NaN (Not-a-Number) হল এমন একটি মান যা সংখ্যা সংক্রান্ত অপারেশনের সময় ত্রুটি নির্দেশ করে। `isNaN()` ব্যবহার করে NaN সনাক্ত করা যায়।",
        },
      },
    ],
  },
  


  {
    step: "Six",
    title: "Miscellaneous",
    questions: [
      {
        id: "misc-1",
        question: "What is event delegation, and how does it work?",
        details: {
          explanation: "Event delegation allows you to handle events at a parent level rather than attaching them directly to each child element. It uses the concept of event bubbling.",
          example: `
            document.querySelector("#parent").addEventListener("click", (e) => {
              if (e.target && e.target.matches("button.class")) {
                console.log("Button clicked");
              }
            });
          `,
          bangla: "ইভেন্ট ডেলিগেশন আপনাকে প্রত্যেক চাইল্ড উপাদানে ইভেন্ট যুক্ত করার পরিবর্তে প্যারেন্ট লেভেলে ইভেন্ট পরিচালনা করতে দেয়। এটি ইভেন্ট বাবলিং ধারণার উপর ভিত্তি করে কাজ করে।",
        },
      },
      {
        id: "misc-2",
        question: "What are default parameters in JavaScript?",
        details: {
          explanation: "Default parameters allow you to initialize function parameters with default values if no argument is passed.",
          example: `
            function greet(name = "Guest") {
              console.log("Hello, " + name);
            }
            greet(); // "Hello, Guest"
            greet("Alice"); // "Hello, Alice"
          `,
          bangla: "ডিফল্ট প্যারামিটার আপনাকে ফাংশনের প্যারামিটারগুলি ডিফল্ট মান সহ শুরু করতে দেয়, যদি কোনও আর্গুমেন্ট পাস না করা হয়।",
        },
      },
      {
        id: "misc-3",
        question: "What is the difference between synchronous and asynchronous programming?",
        details: {
          explanation: "Synchronous programming executes tasks sequentially, while asynchronous programming allows tasks to run in parallel, enabling non-blocking operations.",
          example: `
            // Synchronous
            console.log("Start");
            console.log("End");

            // Asynchronous
            console.log("Start");
            setTimeout(() => console.log("Async Task"), 1000);
            console.log("End");

1. সিঙ্ক্রোনাস প্রোগ্রামিং (Synchronous Programming)
সিঙ্ক্রোনাস প্রোগ্রামিং হলো এমন একটি প্রোগ্রামিং মডেল যেখানে কোড ধাপে ধাপে (লিনিয়ারলি) এক্সিকিউট হয়। 
এক লাইন কোড শেষ না হলে পরবর্তী লাইন এক্সিকিউট হয় না।

বৈশিষ্ট্য:
* প্রতিটি কাজ ক্রমান্বয়ে (Sequentially) সম্পন্ন হয়।
* একটি কাজ চলাকালীন অন্য কাজ শুরু হতে পারে না।
* ব্লকিং প্রকৃতি রয়েছে (Blocking Nature)।

2. অ্যাসিঙ্ক্রোনাস প্রোগ্রামিং (Asynchronous Programming)
অ্যাসিঙ্ক্রোনাস প্রোগ্রামিং হলো এমন একটি মডেল যেখানে কাজগুলো একে অপরের উপর নির্ভরশীল নয়। একটি কাজ চলাকালীন অন্য কাজ শুরু হতে পারে এবং ফলাফল পরে রিটার্ন করা যায়।

বৈশিষ্ট্য:
* কাজগুলো একসাথে (Simultaneously) এক্সিকিউট হতে পারে।
* নন-ব্লকিং প্রকৃতি রয়েছে (Non-blocking Nature)।
* প্রায়ই কলব্যাক (Callback), প্রমিজ (Promise), বা অ্যাওয়েট (Async/Await) ব্যবহার করা হয়।
          `,
          bangla: "সিঙ্ক্রোনাস প্রোগ্রামিং ধারাবাহিকভাবে কাজগুলো সম্পাদন করে, যখন অ্যাসিঙ্ক্রোনাস প্রোগ্রামিং একাধিক কাজ সমান্তরালে চালাতে দেয়, যা নন-ব্লকিং অপারেশনকে সক্ষম করে।",
        },
      },
      {
        id: "misc-4",
        question: "How does the `setTimeout` function work, and what is its use?",
        details: {
          explanation: "`setTimeout` schedules a function to execute after a specified delay (in milliseconds). It is useful for delayed operations.",
          example: `
            console.log("Start");
            setTimeout(() => {
              console.log("Executed after 2 seconds");
            }, 2000);
            console.log("End");
          `,
          bangla: "`setTimeout` একটি ফাংশন নির্দিষ্ট সময় বিলম্বের পরে কার্যকর করার জন্য সময় নির্ধারণ করে। এটি বিলম্বিত অপারেশন পরিচালনার জন্য ব্যবহৃত হয়।",
        },
      },
      {
        id: "misc-5",
        question: "What is the purpose of `JSON.stringify()` and `JSON.parse()`?",
        details: {
          explanation: "`JSON.stringify()` converts a JavaScript object into a JSON string, and `JSON.parse()` converts a JSON string back to an object.",
          example: `
            const obj = { name: "Alice", age: 25 };
            const jsonString = JSON.stringify(obj);
            console.log(jsonString); // '{"name":"Alice","age":25}'
            const parsedObj = JSON.parse(jsonString);
            console.log(parsedObj.name); // "Alice"
          `,
          bangla: "`JSON.stringify()` একটি জাভাস্ক্রিপ্ট অবজেক্টকে JSON স্ট্রিংয়ে রূপান্তর করে, এবং `JSON.parse()` সেই JSON স্ট্রিংটিকে আবার একটি অবজেক্টে রূপান্তর করে।",
        },
      },
      {
        id: "misc-6",
        question: "How can you handle asynchronous code in JavaScript?",
        details: {
          explanation: "Asynchronous code can be handled using callbacks, promises, or `async/await` for cleaner syntax and better readability.",
          example: `
            // Using Promises
            fetch("https://api.example.com")
              .then((response) => response.json())
              .then((data) => console.log(data))
              .catch((error) => console.error(error));

            // Using async/await
            async function fetchData() {
              try {
                const response = await fetch("https://api.example.com");
                const data = await response.json();
                console.log(data);
              } catch (error) {
                console.error(error);
              }
            }
            fetchData();
          `,
          bangla: "অ্যাসিঙ্ক্রোনাস কোড পরিচালনা করার জন্য কলব্যাক, প্রমিস, বা `async/await` ব্যবহার করা যেতে পারে, যা সিনট্যাক্সকে পরিষ্কার এবং কোডকে আরো পাঠযোগ্য করে তোলে।",
        },
      },
      {
        id: "misc-7",
        question: "Explain the concept of the Event Loop in JavaScript.",
        details: {
          explanation: "The Event Loop handles asynchronous tasks in JavaScript by continuously checking the call stack and the message queue for pending tasks.",
          example: `
            console.log("Start");
            setTimeout(() => console.log("Async Task"), 0);
            console.log("End");

            // Output:
            // Start
            // End
            // Async Task
          `,
          bangla: "ইভেন্ট লুপ জাভাস্ক্রিপ্টে অ্যাসিঙ্ক্রোনাস কাজ পরিচালনা করে, কল স্ট্যাক এবং মেসেজ কিউ তে থাকা কাজগুলো ক্রমাগত পরীক্ষা করে।",
        },
      },
    ],
  },
];

