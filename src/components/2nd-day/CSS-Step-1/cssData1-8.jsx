export const CssQA = [
  {
    step: "One",
    title: "CSS Interview Questions",
    qa: [
      {
        id: 1,
        question: "What is CSS, and how does it work with HTML?",
        points: [
          {
            point:
              "CSS stands for Cascading Style Sheets and is used to style HTML documents.",
            example: "body { background-color: #f0f0f0; }",
          },
          {
            point:
              "CSS works by applying styles to HTML elements based on selectors.",
            example: "",
          },
        ],
      },
      {
        id: 2,
        question:
          "What is the difference between inline, internal, and external CSS?",
        points: [
          {
            point:
              "Inline CSS is applied directly within an HTML element using the style attribute.",
            example: "<div style='color: red;'>Hello World</div>",
          },
          {
            point:
              "Internal CSS is written inside a <style> tag within the <head> of an HTML document.",
            example: "<style> body { color: blue; } </style>",
          },
          {
            point:
              "External CSS is written in separate CSS files and linked to the HTML file using a <link> tag.",
            example: "<link rel='stylesheet' href='styles.css' />",
          },
        ],
      },
      {
        id: 3,
        question:
          "Explain the CSS box model. What properties does it consist of?",
        points: [
          {
            point:
              "The CSS box model defines the rectangular boxes generated for elements in a webpage.",
            example: "",
          },
          {
            point: "It consists of: content, padding, border, and margin.",
            example: "",
          },
          {
            point:
              "The content box is where text and images appear, padding adds space inside the content box, border surrounds the padding, and margin creates space outside the border.",
            example: "",
          },
        ],
      },
      {
        id: 4,
        question: "What is specificity in CSS, and how does it affect styling?",
        points: [
          {
            point:
              "CSS specificity determines which styles are applied to an element when multiple conflicting styles exist.",
            example: "",
          },
          {
            point:
              "Specificity is calculated based on the number of IDs, classes, and element selectors in a rule.",
            example: "",
          },
        ],
      },
      {
        id: 5,
        question:
          "How do CSS selectors work, and what are some common types of selectors?",
        points: [
          {
            point:
              "CSS selectors are used to select HTML elements to apply styles to them.",
            example: "",
          },
          {
            point:
              "Common types of selectors include element, class, ID, and attribute selectors.",
            example:
              "div { color: red; } .class { font-size: 16px; } #id { background-color: blue; }",
          },
        ],
      },
      {
        id: 6,
        question:
          "What are pseudo-classes and pseudo-elements? Give examples of each.",
        points: [
          {
            point:
              "Pseudo-classes style elements based on their state, such as :hover, :focus, and :nth-child.",
            example: "a:hover { color: red; }",
          },
          {
            point:
              "Pseudo-elements style parts of an element, such as ::before, ::after, and ::first-letter.",
            example: "p::first-letter { font-size: 2em; }",
          },
        ],
      },
      {
        id: 7,
        question: "Explain the concept of inheritance in CSS.",
        points: [
          {
            point:
              "Inheritance in CSS refers to the mechanism by which some properties of a parent element are passed down to its child elements.",
            example: "font-family is inherited by default in most elements.",
          },
          {
            point:
              "Not all properties are inherited, such as margin, padding, and border.",
            example: "",
          },
        ],
      },
      {
        id: 8,
        question:
          "What is the !important rule in CSS, and when should you use it?",
        points: [
          {
            point:
              "The !important rule in CSS is used to give a style rule higher priority over other conflicting rules.",
            example: "div { color: red !important; }",
          },
          {
            point:
              "It should be used sparingly and only when absolutely necessary, as it can make debugging and future styling changes more difficult.",
            example: "",
          },
        ],
      },
    ],
  },
  {
    step: "Two",
    title: "Mostly Used CSS Properties",
    qa: [
      {
        id: 1,
        question: "How does the display property work, and what are the different display values?",
        points: [
          {
            point: "The display property defines how an element is displayed on the page.",
            example: "",
          },
          {
            point: "Common values include: block, inline, inline-block, flex, grid, and none.",
            example: "div { display: flex; }",
          },
        ],
      },
      {
        id: 2,
        question: "What is the position property, and how do different position values (static, relative, absolute, fixed, sticky) behave?",
        points: [
          {
            point: "The position property defines how an element is positioned within its parent container.",
            example: "",
          },
          {
            point: "static: default positioning, relative: relative to its normal position, absolute: relative to the nearest positioned ancestor, fixed: relative to the viewport, sticky: switches between relative and fixed based on scroll position.",
            example: "div { position: absolute; top: 10px; }",
          },
        ],
      },
      {
        id: 3,
        question: "How do the padding, margin, and border properties work in CSS?",
        points: [
          {
            point: "Padding adds space inside the element, between the content and the border.",
            example: "div { padding: 20px; }",
          },
          {
            point: "Margin adds space outside the element, between it and other elements.",
            example: "div { margin: 10px; }",
          },
          {
            point: "Border is a line that wraps around the padding and content of the element.",
            example: "div { border: 1px solid #000; }",
          },
        ],
      },
      {
        id: 4,
        question: "Explain the flex property. How do flex-grow, flex-shrink, and flex-basis work?",
        points: [
          {
            point: "The flex property defines how the child elements of a flex container should behave.",
            example: "",
          },
          {
            point: "flex-grow: defines how much a flex item should grow relative to others. flex-shrink: defines how much a flex item should shrink. flex-basis: defines the initial size of a flex item.",
            example: "div { flex-grow: 1; flex-shrink: 0; flex-basis: 100px; }",
          },
        ],
      },
      {
        id: 5,
        question: "What is the difference between width, min-width, and max-width?",
        points: [
          {
            point: "width sets the fixed width of an element.",
            example: "div { width: 200px; }",
          },
          {
            point: "min-width sets the minimum width the element can have, preventing it from shrinking below that size.",
            example: "div { min-width: 100px; }",
          },
          {
            point: "max-width sets the maximum width the element can have, preventing it from expanding beyond that size.",
            example: "div { max-width: 500px; }",
          },
        ],
      },
      {
        id: 6,
        question: "How does the z-index property work, and when would you use it?",
        points: [
          {
            point: "The z-index property specifies the stack order of elements, controlling which elements appear on top of others.",
            example: "div { z-index: 10; }",
          },
          {
            point: "It works only on elements that have a position other than static.",
            example: "",
          },
        ],
      },
      {
        id: 7,
        question: "What is the difference between the opacity and visibility properties?",
        points: [
          {
            point: "opacity makes an element transparent while still occupying space in the layout.",
            example: "div { opacity: 0.5; }",
          },
          {
            point: "visibility hides an element, but it still takes up space in the layout (unlike display: none).",
            example: "div { visibility: hidden; }",
          },
        ],
      },
    ],
  },
  {
    step: "Three",
    title: "CSS Layouts & Responsiveness",
    qa: [
      {
        id: 1,
        question: "What is the difference between flexbox and CSS Grid, and when should you use each?",
        points: [
          {
            point: "Flexbox is a one-dimensional layout model that works in either rows or columns.",
            example: "div { display: flex; flex-direction: row; }",
          },
          {
            point: "CSS Grid is a two-dimensional layout model that allows for both rows and columns at the same time.",
            example: "div { display: grid; grid-template-columns: 1fr 1fr; }",
          },
        ],
      },
      {
        id: 2,
        question: "Explain how to create a responsive layout using media queries.",
        points: [
          {
            point: "Media queries are used to apply different styles depending on the viewport size.",
            example: "@media (max-width: 768px) { .container { flex-direction: column; } }",
          },
        ],
      },
      {
        id: 3,
        question: "How do you create a centered element in CSS? Provide multiple ways.",
        points: [
          {
            point: "You can center an element using flexbox: display: flex; justify-content: center; align-items: center;",
            example: "div { display: flex; justify-content: center; align-items: center; }",
          },
          {
            point: "Alternatively, you can use grid: display: grid; place-items: center;",
            example: "div { display: grid; place-items: center; }",
          },
          {
            point: "For absolute positioning, use: position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);",
            example: "div { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }",
          },
        ],
      },
      {
        id: 4,
        question: "How does CSS Grid work, and what are grid-template-rows and grid-template-columns?",
        points: [
          {
            point: "CSS Grid is a two-dimensional layout system that defines rows and columns to position elements.",
            example: "",
          },
          {
            point: "grid-template-rows defines the sizes of the rows, while grid-template-columns defines the sizes of the columns.",
            example: "div { display: grid; grid-template-rows: 100px 200px; grid-template-columns: 1fr 2fr; }",
          },
        ],
      },
      {
        id: 5,
        question: "How does the flex-direction property work in Flexbox, and what are its values?",
        points: [
          {
            point: "flex-direction defines the direction in which flex items are placed within the flex container.",
            example: "",
          },
          {
            point: "Possible values: row, row-reverse, column, and column-reverse.",
            example: "div { display: flex; flex-direction: column; }",
          },
        ],
      },
      {
        id: 6,
        question: "What is a viewport, and how do you make elements responsive to viewport changes?",
        points: [
          {
            point: "The viewport is the visible area of the webpage in the browser window.",
            example: "",
          },
          {
            point: "Use media queries and percentage-based widths to make elements responsive to the viewport size.",
            example: "@media (max-width: 600px) { div { width: 100%; } }",
          },
        ],
      },
      {
        id: 7,
        question: "How can you create a sticky footer that stays at the bottom of the page?",
        points: [
          {
            point: "A sticky footer can be created using Flexbox or Grid.",
            example: "html, body { height: 100%; } .container { display: flex; flex-direction: column; min-height: 100%; } .footer { margin-top: auto; }",
          },
        ],
      },
      {
        id: 8,
        question: "Explain how you would approach creating a mobile-first design.",
        points: [
          {
            point: "In a mobile-first design, you start by styling for mobile devices and then use media queries to scale up to larger screens.",
            example: "@media (min-width: 768px) { .container { width: 50%; } }",
          },
        ],
      },
    ]
    
  },
  {
    step: "Four",
    title: "Advanced CSS Questions",
    qa: [
      {
        id: 1,
        question: "What do you understand by the universal selector?",
        points: [
          {
            point: "The universal selector (*) applies styles to all elements on the page.",
            example: "* { margin: 0; padding: 0; }",
          },
        ],
      },
      {
        id: 2,
        question: "What are CSS preprocessors, and how do they work? Give examples like SASS or LESS.",
        points: [
          {
            point: "CSS preprocessors like SASS and LESS extend CSS with features like variables, mixins, and nesting.",
            example: "$primary-color: #3498db; .button { background-color: $primary-color; }",
          },
        ],
      },
      {
        id: 3,
        question: "Explain CSS custom properties (CSS variables) and their benefits.",
        points: [
          {
            point: "CSS variables are reusable values that can be defined and used throughout the stylesheet.",
            example: "--main-color: #3498db; body { color: var(--main-color); }",
          },
          {
            point: "They allow for easy theming and dynamic styling changes without modifying the entire stylesheet.",
            example: "",
          },
        ],
      },
      {
        id: 4,
        question: "How do CSS animations work, and how can you create a keyframe animation?",
        points: [
          {
            point: "CSS animations allow elements to change styles over time, using keyframes.",
            example: "@keyframes example { 0% { opacity: 0; } 100% { opacity: 1; } }",
          },
          {
            point: "You can define animations using the 'animation' shorthand property, specifying duration, delay, and iteration count.",
            example: "div { animation: fadeIn 2s ease-in-out; }",
          },
        ],
      },
      {
        id: 5,
        question: "What are CSS transitions, and how are they different from animations?",
        points: [
          {
            point: "CSS transitions provide smooth transitions between two states when a property value changes.",
            example: "div { transition: all 0.3s ease; }",
          },
          {
            point: "CSS animations, on the other hand, allow for continuous or complex animations over a period of time.",
            example: "",
          },
        ],
      },
      {
        id: 6,
        question: "What is the difference between rem, em, and px units?",
        points: [
          {
            point: "px (pixels) is an absolute unit based on screen resolution.",
            example: "div { width: 100px; }",
          },
          {
            point: "em is relative to the font-size of the parent element.",
            example: "div { font-size: 2em; }",
          },
          {
            point: "rem (root em) is relative to the font-size of the root element (usually <html>).",
            example: "div { font-size: 1.5rem; }",
          },
        ],
      },
      {
        id: 7,
        question: "What is SVG and how can it be used to create custom shapes?",
        points: [
          {
            point: "SVG (Scalable Vector Graphics) is a vector-based image format used to create scalable shapes and designs.",
            example: "<svg width='100' height='100'><circle cx='50' cy='50' r='40' stroke='black' stroke-width='3' fill='red' /></svg>",
          },
          {
            point: "SVG is resolution-independent and can be styled with CSS, making it great for icons, logos, and other graphic elements.",
            example: "",
          },
        ],
      },
    ]
  },
];
