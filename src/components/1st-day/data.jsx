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








