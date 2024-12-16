export const HQA2130 = [
  {
    q: "21. What is the <iframe> tag, and what are some common attributes used with it?",
    points: [
      {
        point: "The <iframe> tag is used to embed another HTML document within the current page.",
      },
      {
        pName: "Common Attributes:",
        point: "src, width, height, frameborder, allowfullscreen",
        example: `<iframe src="https://example.com" width="600" height="400" frameborder="0" allowfullscreen></iframe>`,
      },
    ],
  },
  {
    q: "22. Describe how the <audio> and <video> tags work, including common attributes like controls, autoplay, and loop.",
    points: [
      {
        pName: "<audio> Tag:",
        point: "Used to embed audio content.",
        example: `<audio controls autoplay loop><source src="audio.mp3" type="audio/mpeg"></audio>`,
      },
      {
        pName: "<video> Tag:",
        point: "Used to embed video content.",
        example: `<video controls autoplay loop><source src="video.mp4" type="video/mp4"></video>`,
      },
      {
        point: "Common attributes include `controls`, `autoplay`, `loop`, and `muted`.",
      },
    ],
  },
  {
    q: "23. Explain the <picture> tag and its usage in responsive design.",
    points: [
      {
        point: "The <picture> tag allows you to define multiple image sources for different screen sizes.",
        example: `
          <picture>
            <source srcset="small.jpg" media="(max-width: 600px)">
            <source srcset="large.jpg" media="(min-width: 601px)">
            <img src="fallback.jpg" alt="Responsive Image">
          </picture>
        `,
      },
    ],
  },
  {
    q: "24. Design a basic form that includes text input, radio buttons, a checkbox, and a submit button.",
    points: [
      {
        point: "Basic Form Example:",
        example: `
          <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"><br>
            <label>Gender:</label>
            <input type="radio" name="gender" value="male"> Male
            <input type="radio" name="gender" value="female"> Female<br>
            <label><input type="checkbox" name="subscribe"> Subscribe to newsletter</label><br>
            <button type="submit">Submit</button>
          </form>
        `,
      },
    ],
  },
  {
    q: "25. Embed a responsive YouTube video using the <iframe> tag.",
    points: [
      {
        point: "Embed a responsive YouTube video:",
        example: `
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        `,
      },
    ],
  },
  {
    q: "26. Make a collapsible/expandable section using <details> and <summary> tags.",
    points: [
      {
        point: "Collapsible Section Example:",
        example: `
          <details>
            <summary>Click to expand</summary>
            <p>This is hidden content that becomes visible when expanded.</p>
          </details>
        `,
      },
    ],
  },
  {
    q: "27. Create a simple navigation bar using <nav>, <ul>, and <li> tags with three links.",
    points: [
      {
        point: "Simple Navigation Bar Example:",
        example: `
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        `,
      },
    ],
  },
  {
    q: "28. Create a complex table with merged cells (using colspan and rowspan) and include a <caption>, <thead>, <tfoot>, and <tbody>. Add descriptive <th> elements for accessibility and structure.",
    points: [
      {
        point: "Complex Table Example:",
        example: `
          <table border="1">
            <caption>Sample Table</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th colspan="2">Scores</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>85</td>
                <td>90</td>
              </tr>
              <tr>
                <td rowspan="2">Jane</td>
                <td>88</td>
                <td>92</td>
              </tr>
              <tr>
                <td>95</td>
                <td>89</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3">End of Data</td>
              </tr>
            </tfoot>
          </table>
        `,
      },
    ],
  },
  {
    q: "29. Create a simple webpage layout with a header, main section, and footer using only HTML and semantic tags.",
    points: [
      {
        point: "Simple Semantic Layout Example:",
        example: `
          <header>
            <h1>Website Title</h1>
          </header>
          <main>
            <section>
              <h2>About Us</h2>
              <p>This is the main content.</p>
            </section>
          </main>
          <footer>
            <p>Footer Content</p>
          </footer>
        `,
      },
    ],
  },
  {
    q: "30. Write your favorite 10 HTML Tags & Explain Why These Are Your Favorite Tags.",
    points: [
      {
        pName: "Favorite Tags:",
        point: "Examples: <header>, <main>, <footer>, <a>, <button>, <img>, <input>, <video>, <audio>, <div>",
      },
      {
        point: "Each tag has a purpose in structuring content, improving interactivity, or adding multimedia.",
      },
      {
        example: `
          <header>For header</header>
          <main>Main content</main>
          <footer>Footer content</footer>
          <button>Click Me</button>
          <img src="image.jpg" alt="Image">
        `,
      },
    ],
  },
];

