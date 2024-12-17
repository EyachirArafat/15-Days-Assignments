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
            example: ``,
          },
          {
            point: `CSS (Cascading Style Sheets) একটি স্টাইল শীট ভাষা যা ওয়েবপেজের ডিজাইন এবং লেআউট নির্ধারণ করতে ব্যবহৃত হয়। এটি HTML এর সাথে কাজ করে, যেখানে HTML পেজের কনটেন্ট তৈরি করে এবং CSS সেই কনটেন্টের স্টাইল ও ডিজাইন নির্ধারণ করে। উদাহরণস্বরূপ, HTML দিয়ে টেক্সট, ছবি, লিঙ্ক ইত্যাদি তৈরি করা হয়, এবং CSS দিয়ে সেই উপাদানগুলির রঙ, আকার, ফন্ট, মার্জিন, প্যাডিং ইত্যাদি নিয়ন্ত্রণ করা হয়।`,
            example: ``,
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
            example: ``,
          },
          {
            point: "It consists of: content, padding, border, and margin.",
            example: ``,
          },
          {
            point:
              "The content box is where text and images appear, padding adds space inside the content box, border surrounds the padding, and margin creates space outside the border.",
            example: ``,
          },
          {
            point: `CSS বক্স মডেল হলো একটি ধারণা যা প্রতিটি HTML উপাদানকে একটি বাক্স হিসেবে বিবেচনা করে, যার মধ্যে কনটেন্ট, প্যাডিং, বর্ডার এবং মার্জিন থাকে। বক্স মডেলটি HTML উপাদানের আকার এবং জায়গা কিভাবে নির্ধারণ করা হবে তা নির্দেশ করে`,
            example: ``,
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
            example: ``,
          },
          {
            point:
              "Specificity is calculated based on the number of IDs, classes, and element selectors in a rule.",
            example: ``,
          },
          {
            point: `CSS specificity হল একটি ধারণা যা নির্ধারণ করে, যখন একাধিক স্টাইলিং নিয়ম একে অপরের সাথে বিরোধিতা করে, তখন কোন স্টাইলটি প্রয়োগ হবে।
              Specificity গণনা করা হয় একটি CSS সিলেক্টরের মধ্যে ব্যবহৃত ID, ক্লাস এবং এলিমেন্ট সিলেক্টরের সংখ্যা অনুযায়ী। এটি একটি নির্দিষ্ট র‌্যাঙ্কিং সিস্টেমের মাধ্যমে কাজ করে`,
            example: ``,
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
            example: ``,
          },
          {
            point:
              "Common types of selectors include element, class, ID, and attribute selectors.",
            example:
              `div {color: red;} 
.class {font-size: 16px;} 
#id {background-color: blue;}`,
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
            point: `নির্দিষ্ট অবস্থায় (যেমন:hover, :focus) একটি উপাদানের স্টাইল নির্ধারণ করে`,
            example: ``,
          },
          {
            point:
              "Pseudo-elements style parts of an element, such as ::before, ::after, and ::first-letter.",
            example: "p::first-letter { font-size: 2em; }",
          },
          {
            point: `HTML উপাদানের অংশের উপর স্টাইল প্রয়োগ করে (যেমন ::before, ::after)।`,
            example: ``,
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
            example: ``,
          },
          {
            point: `CSS ইনহেরিটেন্স হলো এমন একটি পদ্ধতি যেখানে একটি উপাদান তার অভ্যন্তরীণ বা পিতামাতার উপাদান থেকে স্টাইল গুলি উত্তরাধিকারসূত্রে পায়। উদাহরণস্বরূপ, একটি প্যারাগ্রাফের ফন্ট সাইজ যদি তার পিতামাতা থেকে ইনহেরিট হয়, তবে এটি ওই ফন্ট সাইজটি ব্যবহার করবে।`,
            example: ``,
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
            example: ``,
          },
          {
            point: `!important হলো একটি CSS রুল যা নির্দিষ্ট স্টাইলকে অন্য কোন স্টাইলের উপরে অগ্রাধিকার দেয়। এটি সাধারণত তখন ব্যবহার করা হয় যখন আপনি একটি স্টাইল নিশ্চিত করতে চান, কিন্তু এটি অত্যধিক ব্যবহার করা উচিত নয়, কারণ এটি কোডের রক্ষণাবেক্ষণ জটিল করে তোলে। উদাহরণ:`,
            example: ``,
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
        id: 9,
        question:
          "How does the display property work, and what are the different display values?",
        points: [
          {
            point:
              "The display property defines how an element is displayed on the page.",
            example: ``,
          },
          {
            point:
              "Common values include: block, inline, inline-block, flex, grid, and none.",
            example: "div { display: flex; }",
          },
          {
            point: `display প্রপার্টি হল CSS-এর একটি গুরুত্বপূর্ণ প্রপার্টি, যা একটি HTML উপাদানের প্রদর্শন শৈলী নির্ধারণ করে। এর মাধ্যমে আপনি নির্দেশ করতে পারেন একটি উপাদান কিভাবে প্রদর্শিত হবে। এর বিভিন্ন ভ্যালু রয়েছে। যেমন block ভ্যালু একটি উপাদানকে ব্লক এলিমেন্টে রূপান্তরিত করে, যা পরবর্তী উপাদানগুলিকে নতুন লাইনে প্রদর্শন করে। inline ভ্যালু, অন্যদিকে, উপাদানকে ইনলাইন হিসেবে প্রদর্শন করে, অর্থাৎ এটি অন্য উপাদানের পাশে থাকে এবং একই লাইনে থাকে। inline-block ভ্যালুতে এলিমেন্ট ইনলাইন অবস্থায় থাকে তবে এর আকার (height, width) নিয়ন্ত্রণ করা যায়। এছাড়া, none ভ্যালু ব্যবহার করলে উপাদানটি সম্পূর্ণরূপে লুকিয়ে যায়, অর্থাৎ প্রদর্শিত হয় না।`,
            example: ``,
          },
        ],
      },
      {
        id: 10,
        question:
          "What is the position property, and how do different position values (static, relative, absolute, fixed, sticky) behave?",
        points: [
          {
            point:
              "The position property defines how an element is positioned within its parent container.",
            example: ``,
          },
          {
            point:
              "static: default positioning, relative: relative to its normal position, absolute: relative to the nearest positioned ancestor, fixed: relative to the viewport, sticky: switches between relative and fixed based on scroll position.",
            example: `div { 
  position: absolute; 
  top: 10px; 
}`,
          },
          {
            point: `CSS-এ position প্রপার্টি ব্যবহার করা হয় একটি উপাদানকে নির্দিষ্ট অবস্থানে স্থাপন করতে। এর বিভিন্ন ভ্যালু রয়েছে যা উপাদানের পজিশনিং কন্ট্রোল করে। static হল ডিফল্ট পজিশন, যেখানে উপাদানটি সাধারণভাবে প্রদর্শিত হয়। relative পজিশনিং ব্যবহার করলে উপাদান তার স্বাভাবিক অবস্থান থেকে কিছুটা সরানো হয়, কিন্তু অন্যান্য উপাদানগুলোর উপর কোন প্রভাব ফেলে না। absolute পজিশনিং ব্যবহার করলে উপাদানটি তার প্যারেন্ট কন্টেইনার বা নিকটবর্তী পজিশন কন্টেইনারের উপর ভিত্তি করে পজিশন হয়। fixed পজিশনিং ব্যবহার করলে উপাদানটি স্ক্রিনের নির্দিষ্ট অংশে থাকবে এবং স্ক্রোল করার সময়ও সেটি স্থানান্তরিত হবে না। sticky পজিশনিং ব্যবহার করলে উপাদানটি পজিশন কন্টেইনারের সাথে স্ক্রোল করার সময় উপরের বা নিচের দিকে চলে যায়, যা সাধারণত স্টিকি হেডার বা ফুটারের জন্য ব্যবহৃত হয়।`,
            example: ``,
          },
        ],
      },
      {
        id: 11,
        question:
          "How do the padding, margin, and border properties work in CSS?",
        points: [
          {
            point:
              "Padding adds space inside the element, between the content and the border.",
            example: "div { padding: 20px; }",
          },
          {
            point:
              "Margin adds space outside the element, between it and other elements.",
            example: "div { margin: 10px; }",
          },
          {
            point:
              "Border is a line that wraps around the padding and content of the element.",
            example: `div { 
  border: 1px solid #000; 
}`,
          },
          {
            point: `CSS-এ padding, margin, এবং border প্রপার্টি তিনটি আলাদা ধরনের জায়গা তৈরি করতে ব্যবহৃত হয়। Padding প্রপার্টি একটি উপাদানের ভিতরের স্থান নির্দেশ করে, অর্থাৎ উপাদানের কন্টেন্ট এবং উপাদানের সীমানার মধ্যে ফাঁকা জায়গা তৈরি করে। এটি কেবলমাত্র উপাদানের ভিতরে প্রভাবিত হয়। অন্যদিকে, margin প্রপার্টি উপাদানের বাইরের স্থান নির্ধারণ করে, অর্থাৎ এটি উপাদানগুলির মধ্যে ফাঁকা স্থান তৈরি করে এবং অন্যান্য উপাদানের সাথে দুরুত্ব বজায় রাখে। Border প্রপার্টি ব্যবহার করা হয় উপাদানের চারপাশে সীমা তৈরি করার জন্য, যা বিভিন্ন প্রস্থ, রঙ এবং স্টাইলে থাকতে পারে।`,
            example: ``,
          },
        ],
      },
      {
        id: 12,
        question:
          "Explain the flex property. How do flex-grow, flex-shrink, and flex-basis work?",
        points: [
          {
            point:
              "The flex property defines how the child elements of a flex container should behave.",
            example: ``,
          },
          {
            point:
              "flex-grow: defines how much a flex item should grow relative to others. flex-shrink: defines how much a flex item should shrink. flex-basis: defines the initial size of a flex item.",
            example: `div { 
  flex-grow: 1; 
  flex-shrink: 0; 
  flex-basis: 100px; 
}`,
          },
          {
            point: `CSS-এ flex প্রপার্টি ফ্লেক্স কন্টেইনারে এলিমেন্টের লেআউট এবং আচরণ নিয়ন্ত্রণ করতে ব্যবহৃত হয়। flex-grow প্রপার্টি একটি উপাদানকে কন্টেইনারের অব্যবহৃত জায়গায় বাড়ানোর জন্য নির্দেশ করে, যাতে তা আরও জায়গা নেয়। এর মান যদি ১ হয়, তবে এটি অবশিষ্ট জায়গায় সঠিক অনুপাতে বাড়বে। flex-shrink প্রপার্টি নির্ধারণ করে উপাদানটি কিভাবে সংকুচিত হবে যদি কন্টেইনারের আকার ছোট হয়। এবং flex-basis প্রপার্টি উপাদানের প্রাথমিক আকার নির্ধারণ করে, অর্থাৎ এটি শুরুতে কতটুকু জায়গা নেবে সেটি নির্ধারণ করে। এই তিনটি প্রপার্টি একত্রে ব্যবহার করে আপনি ফ্লেক্স কন্টেইনারে উপাদানগুলির স্থান ও আকার নিয়ন্ত্রণ করতে পারেন।`,
            example: ``,
          },
          {
            point: `flex-grow নির্ধারণ করে যে একটি ফ্লেক্স আইটেম তার প্যারেন্ট কন্টেইনারের বাকি ফাঁকা জায়গা কতটুকু গ্রহণ করবে।
            যদি flex-grow 0 হয়, ফ্লেক্স আইটেম কোনো অতিরিক্ত স্থান গ্রহণ করবে না।
            যদি এটি 1 বা তার বেশি হয়, তাহলে এটি ফাঁকা জায়গা গ্রহণ করবে। একাধিক আইটেম থাকলে তাদের flex-grow এর মান অনুযায়ী স্থান বণ্টন হবে।`,
            example: `<div style="display: flex;">
  <div style="flex-grow: 1; background: red;">Box 1</div>
  <div style="flex-grow: 2; background: blue;">Box 2</div>
</div>
এখানে Box 1 ফাঁকা জায়গার 1 অংশ এবং Box 2 ফাঁকা জায়গার 2 অংশ নেবে।
            `,
          },
          {
            point: `flex-shrink নির্ধারণ করে যে একটি ফ্লেক্স আইটেম কীভাবে সংকুচিত হবে যখন প্যারেন্ট কন্টেইনারের স্পেস সংকুচিত হয়।
যদি flex-shrink 0 হয়, ফ্লেক্স আইটেম সংকুচিত হবে না, এমনকি যদি প্যারেন্ট কন্টেইনারে জায়গা কম থাকে।
যদি এটি 1 বা তার বেশি হয়, তাহলে ফ্লেক্স আইটেম সংকুচিত হবে। একাধিক আইটেম থাকলে তাদের flex-shrink এর মান অনুযায়ী সংকোচন হবে।`,
            example: `<div style="display: flex; width: 300px;">
  <div style="flex-shrink: 1; width: 200px; background: red;">Box 1</div>
  <div style="flex-shrink: 2; width: 200px; background: blue;">Box 2</div>
</div>

এখানে Box 2 বেশি সংকুচিত হবে, কারণ এর flex-shrink এর মান বেশি।
            `,
          },
          {
            point: `flex-basis নির্ধারণ করে যে একটি ফ্লেক্স আইটেমের প্রাথমিক আকার (initial size) কী হবে| যদি flex-basis মান auto হয়, ফ্লেক্স আইটেমের আকার তার কন্টেন্ট বা width/height প্রপার্টি দ্বারা নির্ধারিত হবে।
যদি এটি কোনো নির্দিষ্ট মান (যেমন, 100px বা 50%) সেট করা হয়, তাহলে সেটি ফ্লেক্স আইটেমের প্রাথমিক আকার হিসেবে কাজ করবে।`,
            example: `<div style="display: flex;">
  <div style="flex-basis: 100px; background: red;">Box 1</div>
  <div style="flex-basis: 200px; background: blue;">Box 2</div>
</div>
এখানে Box 1 এর প্রাথমিক আকার 100px এবং Box 2 এর 200px হবে।`,
          },
        ],
      },
      {
        id: 13,
        question:
          "What is the difference between width, min-width, and max-width?",
        points: [
          {
            point: "width sets the fixed width of an element.",
            example: "div { width: 200px; }",
          },
          {
            point:
              "min-width sets the minimum width the element can have, preventing it from shrinking below that size.",
            example: "div { min-width: 100px; }",
          },
          {
            point:
              "max-width sets the maximum width the element can have, preventing it from expanding beyond that size.",
            example: "div { max-width: 500px; }",
          },
        ],
      },
      {
        id: 14,
        question:
          "How does the z-index property work, and when would you use it?",
        points: [
          {
            point:
              "The z-index property specifies the stack order of elements, controlling which elements appear on top of others.",
            example: `div { 
    z-index: 10; 
  }`,
          },
          {
            point:
              "It works only on elements that have a position other than static.",
            example: ``,
          },
          {
            point: `CSS-এ z-index প্রপার্টি একটি উপাদানের স্তর (layer) নির্ধারণ করতে ব্যবহৃত হয়। এটি বিশেষত তখনই ব্যবহৃত হয় যখন একাধিক উপাদান পরস্পরকে ওভারল্যাপ করে। z-index একটি সংখ্যামূলক মান ধারণ করে, যা নির্ধারণ করে কোন উপাদানটি সামনে বা পিছনে থাকবে। উচ্চতর z-index মানধারী উপাদানগুলো নিচু z-index মানের উপাদানগুলোর উপরে প্রদর্শিত হয়। ডিফল্টভাবে, সকল উপাদানের z-index হল auto, এবং পজিশনড উপাদানের ক্ষেত্রেই এটি কার্যকর। উদাহরণস্বরূপ, পপআপ, মডাল, বা টুলটিপ তৈরি করতে এটি অত্যন্ত গুরুত্বপূর্ণ।`,
            example: ``,
          },
        ],
      },
      {
        id: 15,
        question:
          "What is the difference between the opacity and visibility properties?",
        points: [
          {
            point:
              "opacity makes an element transparent while still occupying space in the layout.",
            example: `div { 
    opacity: 0.5;
  }`,
          },
          {
            point:
              "visibility hides an element, but it still takes up space in the layout (unlike display: none).",
              example: `div { 
    visibility: hidden; 
  }`,
          },
          {
            point:
              "CSS-এ opacity এবং visibility দুটি ভিন্ন প্রপার্টি, যা উপাদান প্রদর্শন নিয়ন্ত্রণ করতে ব্যবহৃত হয়। opacity একটি উপাদানের স্বচ্ছতা (transparency) নির্ধারণ করে। এর মান ০ থেকে ১ এর মধ্যে হয়, যেখানে opacity: 0 সম্পূর্ণ অদৃশ্য এবং opacity: 1 সম্পূর্ণ দৃশ্যমান। অন্যদিকে, visibility প্রপার্টি নির্দেশ করে একটি উপাদান দৃশ্যমান থাকবে কিনা। যদি visibility: hidden সেট করা হয়, উপাদানটি লুকানো হয় তবে তার জায়গা দখল করে থাকে। তবে, opacity: 0 সেট করলে উপাদান দৃশ্যমান না হলেও তার ইন্টারঅ্যাকশন কার্যকর থাকে (যেমন, ক্লিক করা যায়)।",
            example: `div { 
    visibility: hidden; 
  }`,
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
        id: 16,
        question:
          "What is the difference between flexbox and CSS Grid, and when should you use each?",
        points: [
          {
            point:
              "Flexbox is a one-dimensional layout model that works in either rows or columns.",
            example: `div { 
  display: flex; 
  flex-direction: row; 
}`,
          },
          {
            point:
              "CSS Grid is a two-dimensional layout model that allows for both rows and columns at the same time.",
            example: `div { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
}`,
          },
          {
            point: `Flexbox এবং CSS Grid হল CSS-এর দুটি শক্তিশালী লেআউট মডেল। Flexbox একমাত্র মাত্রার লেআউট (একইসঙ্গে একাধিক সারি বা কলাম) ডিজাইনের জন্য ব্যবহৃত হয়। এটি উপাদানগুলিকে এক সারি বা এক কলামে স্থানান্তর এবং স্থান নির্ধারণে কার্যকর। উদাহরণস্বরূপ, ফ্লেক্সবক্স সাধারণত নেভিগেশন মেনু বা বাটনের জন্য ব্যবহার করা হয়। অন্যদিকে, CSS Grid দুই-মাত্রিক লেআউট তৈরি করতে ব্যবহৃত হয় যেখানে সারি এবং কলাম উভয়ই ব্যবস্থাপনা করা যায়। এটি জটিল ওয়ার্কফ্লো বা ওয়েবপেজের সম্পূর্ণ লেআউট তৈরি করার জন্য আদর্শ।`,
            example: ``,
          },
        ],
      },
      {
        id: 17,
        question:
          "Explain how to create a responsive layout using media queries.",
        points: [
          {
            point:
              "Media queries are used to apply different styles depending on the viewport size.",
            example: `@media (max-width: 768px) { 
    .container { 
          flex-direction: column; 
    } 
}`,
          },
        ],
      },
      {
        id: 18,
        question:
          "How do you create a centered element in CSS? Provide multiple ways.",
        points: [
          {
            point:
              "Centering an element using flexbox: display: flex; justify-content: center; align-items: center;",
            example: `div { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
  }`,
          },
          {
            point:
              "Alternatively, you can use grid: display: grid; place-items: center;",
            example: `div { 
    display: grid; 
    place-items: center; 
  }
      
place-items: center → এই শর্টহ্যান্ড প্রপার্টি দুইটি কাজ করে:
align-items: center → উল্লম্বভাবে সেন্টার করে।
justify-items: center → অনুভূমিকভাবে সেন্টার করে।`,
          },
          {
            point:
              "For absolute positioning, use: position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);",
            example: `div { 
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
}`,
          },
        ],
      },
      {
        id: 19,
        question:
          "How does CSS Grid work, and what are grid-template-rows and grid-template-columns?",
        points: [
          {
            point:
              "CSS Grid is a two-dimensional layout system that defines rows and columns to position elements.",
            example: ``,
          },
          {
            point:
              "grid-template-rows defines the sizes of the rows, while grid-template-columns defines the sizes of the columns.",
            example: `div { 
  display: grid; 
  grid-template-rows: 100px 200px;
  grid-template-columns: 1fr 2fr; 
}`,
          },
        ],
      },
      {
        id: 20,
        question:
          "How does the flex-direction property work in Flexbox, and what are its values?",
        points: [
          {
            point:
              "flex-direction defines the direction in which flex items are placed within the flex container.",
            example: ``,
          },
          {
            point:
              "Possible values: row, row-reverse, column, and column-reverse.",
            example: `div { 
  display: flex; 
  flex-direction: column; 
}`,
          },
          {
            point: `Flexbox-এর flex-direction প্রপার্টি নির্ধারণ করে ফ্লেক্স উপাদানগুলি কোন দিক বরাবর সাজানো হবে। এর ভ্যালুগুলি হল:`,
            example: `row: ডিফল্ট, উপাদানগুলো বাম থেকে ডানে সাজানো হয়।
row-reverse: ডান থেকে বামে সাজানো হয়।
column: উপাদানগুলো উপর থেকে নিচে সাজানো হয়।
column-reverse: নিচ থেকে উপরে সাজানো হয়।

এই প্রপার্টি বিশেষ করে ফ্লেক্স কন্টেইনারে উপাদান সাজানোর জন্য গুরুত্বপূর্ণ।`,
          },
        ],
      },
      {
        id: 21,
        question:
          "What is a viewport, and how do you make elements responsive to viewport changes?",
        points: [
          {
            point:
              "The viewport is the visible area of the webpage in the browser window.(ভিউপোর্ট হল একটি ডিভাইসের দৃশ্যমান এলাকা। এটি স্ক্রিন সাইজের উপর নির্ভর করে পরিবর্তিত হয়।)",
            example: ``,
          },
          {
            point:
              "Use media queries and percentage-based widths to make elements responsive to the viewport size.",
            example: `@media (max-width: 600px) {
  div { width: 100%; } 
}`,
          },
        ],
      },
      {
        id: 22,
        question:
          "How can you create a sticky footer that stays at the bottom of the page?",
        points: [
          {
            point: "A sticky footer can be created using Flexbox or Grid.",
            example: `html, body { 
  height: 100%; 
} 
.container { 
  display: flex; 
  flex-direction: column; 
  min-height: 100%; 
} 
.footer { 
  margin-top: auto; 
}`,
          },
        ],
      },
      {
        id: 23,
        question:
          "Explain how you would approach creating a mobile-first design.",
        points: [
          {
            point:
              "In a mobile-first design, you start by styling for mobile devices and then use media queries to scale up to larger screens.",
            example: `@media (min-width: 768px) { 
  .container { 
      width: 50%; 
  } 
}`,
          },
        ],
      },
    ],
  },


  
  {
    step: "Four",
    title: "Advanced CSS Questions",
    qa: [
      {
        id: 24,
        question: "What do you understand by the universal selector?",
        points: [
          {
            point:
              "CSS-এ ইউনিভার্সাল সিলেক্টর (*) ব্যবহার করা হয় সমস্ত HTML এলিমেন্টের উপর স্টাইল প্রয়োগ করার জন্য। এটি ডকুমেন্টের সমস্ত উপাদানকে একসাথে টার্গেট করে এবং সাধারণত গ্লোবাল স্টাইল সেট করতে ব্যবহৃত হয়",
            example: `* { 
  margin: 0; 
  padding: 0;
}`,
          },
        ],
      },
      {
        id: 25,
        question:
          "What are CSS preprocessors, and how do they work? Give examples like SASS or LESS.",
        points: [
          {
            point:
              "CSS প্রিপ্রসেসর হলো একটি টুল যা CSS-এর স্টাইল লেখার প্রক্রিয়াকে আরও সহজ এবং উন্নত করে। এটি ভ্যারিয়েবল, নেস্টিং, মিক্সিন এবং ফাংশনের মতো বৈশিষ্ট্য সরবরাহ করে যা সাধারণ CSS-এ নেই। SASS (Syntactically Awesome Style Sheets) এবং LESS (Leaner CSS) জনপ্রিয় প্রিপ্রসেসর।",
            example: `$primary-color: blue;

button {
  background-color: $primary-color;
  &:hover {
    background-color: darken($primary-color, 10%);
  }
}
  SASS কোডটি কম্পাইল করে সাধারণ CSS-এ রূপান্তরিত হয়।

কীভাবে কাজ করে?
  CSS প্রিপ্রসেসর একটি প্রিপ্রোসেসর ভাষায় লেখা কোড 
  (যেমন SASS বা LESS) কে কম্পাইল করে সাধারণ CSS ফাইলে রূপান্তরিত করে। 
  এটি ব্রাউজার দ্বারা সরাসরি বোঝা যায় না, তাই কম্পাইল করার পরেই এটি ব্যবহৃত হয়।

Write SASS/LESS Code → 2. Compile → 3. Generate Standard CSS
`,
          },
        ],
      },
      {
        id: 26,
        question:
          "Explain CSS custom properties (CSS variables) and their benefits.",
        points: [
          {
            point:
              "CSS কাস্টম প্রপার্টি, যা CSS Variables নামেও পরিচিত, স্টাইলের জন্য ডাইনামিক ভ্যালু সংরক্ষণ করতে ব্যবহৃত হয়। এটি পুনরায় ব্যবহারযোগ্য এবং ড্রাই কোড লেখার জন্য সহায়ক। উদাহরণ:",
            example: `--main-color: #3498db; 
  body { 
    color: var(--main-color); 
  }

উপকারিতা:
1. পুনরায় ব্যবহারযোগ্য।
2. এক জায়গায় পরিবর্তন করলে সমস্ত সংশ্লিষ্ট এলিমেন্টে প্রভাব পড়ে।
3. থিমিং ও ডাইনামিক স্টাইলিং সহজ হয়।`,
          },
          {
            point:
              "They allow for easy theming and dynamic styling changes without modifying the entire stylesheet.",
            example: ``,
          },
        ],
      },
      {
        id: 27,
        question:
          "How do CSS animations work, and how can you create a keyframe animation?",
        points: [
          {
            point:
              "CSS animations allow elements to change styles over time, using keyframes.[CSS অ্যানিমেশন একটি উপাদানে ধীরে ধীরে স্টাইল পরিবর্তন করার জন্য ব্যবহৃত হয়। @keyframes নিয়ম ব্যবহার করে অ্যানিমেশনের বিভিন্ন ধাপ তৈরি করা হয়।]",
            example: `@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

div {
  animation: slideIn 2s ease-in-out;
}
// এখানে slideIn নামের অ্যানিমেশন ২ সেকেন্ড ধরে চলবে এবং ease-in-out ইফেক্ট থাকবে।
`,
          },
          {
            point:
              "You can define animations using the 'animation' shorthand property, specifying duration, delay, and iteration count.",
            example: `div { 
  animation: fadeIn 2s ease-in-out; 
}`,
          },
        ],
      },
      {
        id: 28,
        question:
          "What are CSS transitions, and how are they different from animations?",
        points: [
          {
            point:
              "CSS transitions provide smooth transitions between two states when a property value changes.[CSS ট্রানজিশন হলো একটি উপাদানের স্টাইল পরিবর্তনকে ধীরে ধীরে বাস্তবায়িত করার পদ্ধতি। এটি সরাসরি একটি স্টেট থেকে আরেকটি স্টেটে যায়। উদাহরণ:]",
            example: `button {
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: blue;
}
*অ্যানিমেশন এর সাথে পার্থক্য:
ট্রানজিশন: শুধুমাত্র দুটি স্টেটের মধ্যে কাজ করে।
অ্যানিমেশন: @keyframes ব্যবহার করে বহু ধাপ ও জটিল স্টাইল পরিবর্তন সম্ভব।
`,
          },
          {
            point:
              "CSS animations, on the other hand, allow for continuous or complex animations over a period of time.",
            example: ``,
          },
        ],
      },
      {
        id: 29,
        question: "What is the difference between rem, em, and px units?",
        points: [
          {
            point:
              "px (pixels) is an absolute unit based on screen resolution.",
            example: `1. px হলো একটি অ্যাবসলুট ইউনিট, অর্থাৎ এটি একটি স্থির মান যা পরিবর্তন হয় না।
2. 1px মানে স্ক্রিনের উপর একটি নির্দিষ্ট পিক্সেল।
3. এটি স্কেল বা রেসপন্সিভ ডিজাইনের সাথে নিজে থেকে পরিবর্তিত হয় না।
p {
  font-size: 16px;
}
// এখানে ফন্ট সাইজ 16px, এটি স্থির এবং স্ক্রিন সাইজের উপর নির্ভর করে পরিবর্তন হবে না।`,
          },
          {
            point: "em is relative to the font-size of the parent element.",
            example: `1. em হলো রিলেটিভ ইউনিট, যা প্যারেন্ট এলিমেন্টের ফন্ট সাইজের উপর নির্ভর করে।
2. 1em = প্যারেন্ট এলিমেন্টের ফন্ট সাইজ।
3. এটি নেস্টিং (nested elements) এর ক্ষেত্রে গুণিতক আকারে বাড়তে পারে।

body {
  font-size: 16px;
}
h1 {
  font-size: 2em; /* 16px × 2 = 32px */
}
p {
  font-size: 1.5em; /* 16px × 1.5 = 24px */
}

// h1 এর ফন্ট সাইজ হবে 32px (2em = 16px × 2)।
// p এর ফন্ট সাইজ হবে 24px (1.5em = 16px × 1.5)।
`,
          },
          {
            point:
              "rem (root em) is relative to the font-size of the root element (usually <html>).",
            example: `1. rem হলো একটি রিলেটিভ ইউনিট, তবে এটি সবসময় রুট এলিমেন্টের (html) ফন্ট সাইজের উপর নির্ভর করে।
2. 1rem = html এলিমেন্টের ফন্ট সাইজ।
3. ডিফল্টভাবে html এর ফন্ট সাইজ হয় 16px (ব্রাউজার ডিফল্ট)।

html {
  font-size: 16px; /* Root font size */
}
h1 {
  font-size: 2rem; /* 16px × 2 = 32px */
}
p {
  font-size: 1.5rem; /* 16px × 1.5 = 24px */
}

// h1 এর ফন্ট সাইজ হবে 32px (2rem = 16px × 2)।
// p এর ফন্ট সাইজ হবে 24px (1.5rem = 16px × 1.5)।

*rem এর সুবিধা:
1. এটি প্যারেন্ট এলিমেন্টের উপর নির্ভর করে না।
2. এটি পুরো প্রজেক্টে একটি consistent scaling মেনে চলে।
3. রেসপন্সিভ ডিজাইন তৈরি করতে সহজ।
`,
          },
        ],
      },
      {
        id: 30,
        question: "What is SVG and how can it be used to create custom shapes?",
        points: [
          {
            point:
              "SVG (Scalable Vector Graphics) is a vector-based image format used to create scalable shapes and designs.",
            example: `<svg 
  width='100' 
  height='100'
>
<circle 
  cx='50' 
  cy='50' 
  r='40' 
  stroke='black' 
  stroke-width='3' 
  fill='red' 
/>
</svg>`,
          },
          {
            point:
              "SVG is resolution-independent and can be styled with CSS, making it great for icons, logos, and other graphic elements.",
            example: ``,
          },
        ],
      },
    ],
  },
];
