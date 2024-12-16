export const HQA1120 = [
  {
    q: "11. How to add favicon in HTML & Why?",
    points: [
      {
        point: "A favicon is added using the <link> tag inside the <head> tag.",
        example: `<link rel="icon" href="favicon.ico" type="image/x-icon">`,
      },
      {
        point: "Favicon appears on the browser tab and helps with branding and user recognition.",
      },
    ],
  },
  {
    q: "12. What is formatting in HTML?",
    points: [
      {
        point: "Formatting in HTML involves using tags to style text or structure content.",
      },
      {
        pName: "Common Tags:",
        point: "<b>, <i>, <u>, <mark>, <small>",
        example: `<b>Bold</b>, <i>Italic</i>, <mark>Highlighted</mark>`,
      },
    ],
  },
  {
    q: "13. What is Inline and Block elements in HTML5? Give us the proper explanation with example.",
    points: [
      {
        pName: "Inline Elements:",
        point: "Do not start on a new line, take only necessary width.",
        example: `<span>This is inline</span>, <a href="#">Link</a>`,
      },
      {
        pName: "Block Elements:",
        point: "Start on a new line and take the full width of the container.",
        example: `<div>This is block</div>, <p>Paragraph</p>`,
      },
    ],
  },
  {
    q: "14. What is a marquee?",
    points: [
      {
        point: "The <marquee> tag creates scrolling text or images. (Deprecated in HTML5)",
        example: `<marquee>Scrolling Text</marquee>`,
      },
    ],
  },
  {
    q: "15. Explain the difference between <p>, <span>, and <div> tags. When would you use each?",
    points: [
      {
        pName: "<p> (Paragraph):",
        point: "Used for paragraphs or large blocks of text.",
        example: `<p>This is a paragraph.</p>`,
      },
      {
        pName: "<span>:",
        point: "Used for inline text or elements within a block.",
        example: `<span style="color: red;">Red Text</span>`,
      },
      {
        pName: "<div>:",
        point: "Used to group or section elements together.",
        example: `<div>This is a container.</div>`,
      },
    ],
  },
  {
    q: "16. Describe the <ul>, <ol>, and <li> tags for creating lists.",
    points: [
      {
        pName: "<ul> (Unordered List):",
        point: "Creates a bulleted list.",
        example: `<ul><li>Item 1</li><li>Item 2</li></ul>`,
      },
      {
        pName: "<ol> (Ordered List):",
        point: "Creates a numbered list.",
        example: `<ol><li>First</li><li>Second</li></ol>`,
      },
      {
        pName: "<li> (List Item):",
        point: "Defines each item in a list.",
        example: `<ul><li>Item</li></ul>`,
      },
    ],
  },
  {
    q: "17. Describe how <input> works and some of its types, such as text, radio, and checkbox.",
    points: [
      {
        pName: "<input>:",
        point: "Collects user input in forms.",
      },
      {
        pName: "text:",
        point: "A single-line text input.",
        example: `<input type="text" placeholder="Enter name">`,
      },
      {
        pName: "radio:",
        point: "Select one option from multiple choices.",
        example: `<input type="radio" name="gender" value="male"> Male`,
      },
      {
        pName: "checkbox:",
        point: "Select multiple options.",
        example: `<input type="checkbox" name="hobby" value="reading"> Reading`,
      },
    ],
  },
  {
    q: "18. What are <button>, <textarea>, and <select> tags, and how do they function?",
    points: [
      {
        pName: "<button>:",
        point: "Clickable button element.",
        example: `<button>Click Me</button>`,
      },
      {
        pName: "<textarea>:",
        point: "Multi-line text input field.",
        example: `<textarea rows="4" cols="50">Write here...</textarea>`,
      },
      {
        pName: "<select>:",
        point: "Dropdown list with options.",
        example: `<select><option>Option 1</option></select>`,
      },
    ],
  },
  {
    q: "19. How to link CSS to HTML?",
    points: [
      {
        point: "CSS can be linked via the <link> tag in the <head> section.",
        example: `<link rel="stylesheet" href="style.css">`,
      },
      {
        point: "Inline CSS and <style> tags can also be used.",
      },
    ],
  },
  {
    q: "20. What is the <label> tag, and how is it associated with form inputs?",
    points: [
      {
        point: "The <label> tag associates text with form controls.",
        example: `<label for="username">Username:</label><input type="text" id="username">`,
      },
      {
        point: "Improves accessibility and user experience.",
      },
    ],
  },
];
