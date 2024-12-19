export const DOMData = [
  {
    step: "One",
    title: "DOM Questions",
    qa: [
      {
        id: 1,
        question: "What is the DOM, and how does JavaScript interact with it?",
        points: [
          {
            point: "The DOM (Document Object Model) is a programming interface for web documents that represents the structure of a webpage.",
            example: "",
          },
          {
            point: "JavaScript interacts with the DOM to dynamically manipulate the structure, content, and styles of a webpage.",
            example: "document.getElementById('example').textContent = 'Hello, World!'",
          },
          {
            point: "DOM (ডকুমেন্ট অবজেক্ট মডেল) হল একটি প্রোগ্রামিং ইন্টারফেস যা একটি ওয়েব ডকুমেন্টের কাঠামো উপস্থাপন করে। JavaScript এর মাধ্যমে DOM এর উপাদান পরিবর্তন, সংযোজন এবং স্টাইল কাস্টমাইজ করা যায়।",
            example: "",
          },
        ],
        project: [],
      },
      {
        id: 2,
        question: "Explain how to select elements in the DOM using methods like `getElementById`, `querySelector`, and `querySelectorAll`.",
        points: [
          {
            point: "Use `getElementById` to select an element by its ID.",
            example: "document.getElementById('myDiv')",
          },
          {
            point: "Use `querySelector` to select the first matching element for a CSS selector.",
            example: "document.querySelector('.myClass')",
          },
          {
            point: "Use `querySelectorAll` to select all matching elements for a CSS selector.",
            example: "document.querySelectorAll('p')",
          },
          {
            point: "`getElementById` একটি নির্দিষ্ট ID এর উপাদান সিলেক্ট করে, `querySelector` CSS সিলেক্টরের প্রথম মিল খুঁজে পায়, এবং `querySelectorAll` সমস্ত মিল খুঁজে পায়।",
            example: "",
          },
        ],
        project: [
          {
            desc: "Create a webpage with a button that changes the color of a `div` when clicked.",
            example: `
              document.querySelector('#myButton').addEventListener('click', () => {
                document.querySelector('#myDiv').style.backgroundColor = 'blue';
              });
            `,
          },
        ],
      },
      {
        id: 3,
        question: "How do event listeners work in JavaScript? Explain `addEventListener`.",
        points: [
          {
            point: "`addEventListener` attaches an event handler to an element without overwriting existing event handlers.",
            example: "element.addEventListener('click', () => console.log('Clicked!'))",
          },
          {
            point: "`addEventListener` multiple ইভেন্ট হ্যান্ডলার যুক্ত করতে দেয় এবং HTML থেকে লজিক আলাদা রাখে।",
            example: "",
          },
        ],
        project: [],
      },
      {
        id: 4,
        question: "What is event delegation, and why is it useful?",
        points: [
          {
            point: "Event delegation allows you to handle events at a parent level for child elements.",
            example: `
              document.querySelector('ul').addEventListener('click', (event) => {
                if (event.target.tagName === 'LI') {
                  console.log(event.target.textContent);
                }
              });
            `,
          },
          {
            point: "এটি অনেক উপাদানে ইভেন্ট হ্যান্ডলার যুক্ত করার প্রয়োজনীয়তা কমিয়ে দেয়।",
            example: "",
          },
        ],
        project: [
          {
            desc: "Create a list where clicking on each list item logs its content. Use event delegation.",
            example: `
              document.querySelector('ul').addEventListener('click', (event) => {
                if (event.target.tagName === 'LI') {
                  console.log('Item clicked: ', event.target.textContent);
                }
              });
            `,
          },
        ],
      },
      {
        id: 5,
        question: "What is the difference between `innerHTML`, `textContent`, and `innerText`?",
        points: [
          {
            point: "`innerHTML` retrieves or sets the HTML content inside an element.",
            example: "document.getElementById('div').innerHTML = '<p>Hello</p>'",
          },
          {
            point: "`textContent` retrieves or sets the plain text content of an element, ignoring HTML tags.",
            example: "document.getElementById('div').textContent = 'Hello'",
          },
          {
            point: "`innerText` retrieves or sets the visible text of an element, considering CSS styles.",
            example: "document.getElementById('div').innerText = 'Hello'",
          },
          {
            point: "`innerHTML`, `textContent`, এবং `innerText` আলাদা পদ্ধতিতে উপাদানের কনটেন্ট হ্যান্ডেল করে।",
            example: "",
          },
        ],
        project: [],
      },
      {
        id: 6,
        question: "Explain how you can manipulate CSS styles of an element using JavaScript.",
        points: [
          {
            point: "You can change the style of an element directly using the `style` property.",
            example: "document.getElementById('myDiv').style.color = 'red';",
          },
          {
            point: "Multiple styles can be applied by chaining them or using `style.cssText`.",
            example: `
              let div = document.getElementById('myDiv');
              div.style.cssText = 'background: blue; font-size: 20px;';
            `,
          },
          {
            point: "JavaScript এর মাধ্যমে CSS স্টাইল সরাসরি পরিবর্তন বা যোগ করা যায়।",
            example: "",
          },
        ],
        project: [],
      },
      {
        id: 7,
        question: "How do you traverse the DOM? Explain `parentNode`, `firstChild`, `lastChild`, etc.",
        points: [
          {
            point: "`parentNode` gets the parent element of a node.",
            example: "element.parentNode",
          },
          {
            point: "`firstChild` and `lastChild` get the first and last child nodes.",
            example: "element.firstChild; element.lastChild;",
          },
          {
            point: "DOM ট্র্যাভার্স করার জন্য বিভিন্ন পদ্ধতি ব্যবহার করা হয়, যেমন `parentNode`, `firstChild`, `lastChild`, `nextSibling`, ইত্যাদি।",
            example: "",
          },
        ],
        project: [],
      },
      {
        id: 8,
        question: "What is the purpose of `preventDefault()` and `stopPropagation()` in event handling?",
        points: [
          {
            point: "`preventDefault()` prevents the browser's default behavior for an event.",
            example: `
              document.querySelector('a').addEventListener('click', (event) => {
                event.preventDefault();
              });
            `,
          },
          {
            point: "`stopPropagation()` stops the event from propagating to parent elements.",
            example: `
              document.querySelector('button').addEventListener('click', (event) => {
                event.stopPropagation();
              });
            `,
          },
          {
            point: "`preventDefault()` এবং `stopPropagation()` ইভেন্ট হ্যান্ডলিং নিয়ন্ত্রণে ব্যবহার করা হয়।",
            example: "",
          },
        ],
        project: [
          {
            desc: "Create a form that prevents submission and logs a message instead.",
            example: `
              document.querySelector('form').addEventListener('submit', (event) => {
                event.preventDefault();
                console.log('Form submission prevented');
              });
            `,
          },
        ],
      },
    ],
  },
];
