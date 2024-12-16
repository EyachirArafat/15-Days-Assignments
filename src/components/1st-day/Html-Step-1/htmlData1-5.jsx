export const BasicStructure = [
  `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Introduction to HTML</title>
  </head>
  <body>
      <h1>Hello World!</h1>
      <p>HTML is the backbone of web development.</p>
  </body>
  </html>
  `,
];

export const HtmlTag = [
  `
  <h1>This is a Heading</h1> <!-- Heading Tag -->
  <p>This is a paragraph.</p> <!-- Paragraph Tag -->
  <a href="https://example.com">Visit Example</a> <!-- Anchor Tag -->
  <img src="image.jpg" alt="Description of Image"> <!-- Image Tag -->
  <table>
      <tr>
          <td>Cell 1</td> <!-- Table Cell -->
          <td>Cell 2</td>
      </tr>
  </table>

  `,
];

export const HQA3 = [
  {
    title: "1. <html> ট্যাগ:",
    points: [
      "এটি পুরো ডকুমেন্টের রুট এলিমেন্ট।",
      "এটি পুরো ডকুমেন্টের রুট এলিমেন্ট।",
    ],
    example: `<html>
    <head>...</head>
    <body>...</body>
    </html>
    `,
  },
  {
    title: "2. <head> ট্যাগ:",
    points: [
      "এটি ডকুমেন্টের তথ্যসমূহ সংরক্ষণ করে।",
      "উদাহরণ: টাইটেল, স্টাইলশিট, স্ক্রিপ্ট।",
    ],
    example: `<head>
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css">
</head>

    `,
  },
  {
    title: "3. <body> ট্যাগ:",
    points: ["যা ব্রাউজারে দৃশ্যমান হয়।"],
    example: `<body>
    <h1>Main Content</h1>
    <p>Page Details.</p>
</body>

    `,
  },
  {
    title: "4. <!DOCTYPE html>:",
    points: [
      "এটি পুরো ডকুমেন্টের রুট এলিমেন্ট। HTML5 ডকুমেন্ট ডিক্লারেশন।",
      "এটি ব্রাউজারকে জানায় ডকুমেন্ট HTML5 ফরম্যাটে লেখা হয়েছে।",
    ],
  },
];

export const HQA45 = [
  {
    q: "4. Describe the function of the <title> tag. Where does it appear With Example.",
    title: "<title> ট্যাগ কী? এর কার্যকারিতা কী এবং এটি কোথায় দেখা যায়?",
    points: [
      "<title> ট্যাগ HTML ডকুমেন্টের শিরোনাম নির্ধারণ করে।",
      "এটি ব্রাউজারের ট্যাবে প্রদর্শিত হয়।",
      "এটি সার্চ ইঞ্জিন অপটিমাইজেশন (SEO)-এর জন্য গুরুত্বপূর্ণ।",
    ],
    example: `<!DOCTYPE html>
      <html>
      <head>
          <title>My Website</title>
      </head>
      <body>
          <h1>Welcome to My Website</h1>
          <p>This is a demo page.</p>
      </body>
      </html>

    `,
    result: "ব্রাউজারের ট্যাবে My Website লেখা থাকবে।",
  },
  {
    q: "5. How do you add comments in HTML, and why are they useful?",
    title: "HTML-এ কিভাবে কমেন্ট যোগ করবেন এবং এগুলো কেন প্রয়োজন?",
    points: [
      "HTML-এ কমেন্ট যোগ করতে <!-- দিয়ে শুরু এবং --> দিয়ে শেষ করতে হয়।",
      "কোডের উদ্দেশ্য ব্যাখ্যা করতে।",
      "ডেভেলপারদের জন্য নোট রাখতে।",
      "কোডের অংশ সাময়িকভাবে নিষ্ক্রিয় রাখতে।",
    ],
    example: `<!DOCTYPE html>
      <html>
      <head>
          <title>Comment Example</title>
      </head>
      <body>
          <!-- This is a comment -->
          <h1>Welcome to HTML</h1>
          <!-- This paragraph explains the content -->
          <p>This is a paragraph of text.</p>
      </body>
      </html>


    `,
    result: "কমেন্ট ব্রাউজারে প্রদর্শিত হবে না।",
  },
];

