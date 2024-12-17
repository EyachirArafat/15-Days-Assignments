export const TailwindQA = [
  {
    step: "One",
    title: "Basic Tailwind CSS Questions",
    qa: [
      {
        id: 1,
        question:
          "What is Tailwind CSS, and how does it differ from traditional CSS frameworks like Bootstrap?",
        points: [
          {
            point:
              `Tailwind CSS একটি Utility-first CSS ফ্রেমওয়ার্ক, যা খুবই স্কেলেবল এবং কাস্টমাইজযোগ্য। এটি CSS ক্লাসের মাধ্যমে স্টাইলিং করতে সাহায্য করে, যেখানে প্রতিটি ক্লাস একটি নির্দিষ্ট স্টাইল (যেমন মার্জিন, প্যাডিং, রঙ ইত্যাদি) প্রদান করে। Tailwind CSS-এ আপনার কম্পোনেন্টের জন্য নির্দিষ্ট CSS লিখতে হয় না; বরং অধিকাংশ স্টাইলিং CSS ক্লাসের মাধ্যমে সরাসরি HTML ট্যাগে প্রয়োগ করা হয়।

Tailwind CSS-এর প্রাথমিক ধারণা হল, এটি স্টাইলিংয়ের জন্য নির্দিষ্ট ক্লাস প্রদান করে, যা সোজাসুজি আপনার HTML ফাইলে ব্যবহার করা যায়। এই পদ্ধতিতে কাস্টম স্টাইলিং করার চেয়ে এটি ফাস্ট এবং মোডুলার।

`,
            example:
              `Tailwind CSS এর বৈশিষ্ট্য:
1. Utility-First: Tailwind CSS-এর প্রতিটি ক্লাস একটি একক কাজ করে 
(যেমন p-4 প্যাডিং দেয়, bg-blue-500 ব্যাকগ্রাউন্ড রঙ দেয়)।
2. Highly Customizable: আপনি Tailwind CSS কনফিগারেশন ফাইলের মাধ্যমে আপনার ডিজাইন সিস্টেম কাস্টমাইজ করতে পারেন 
(যেমন কালার স্কিম, স্পেসিং ইত্যাদি)।
3. No Predefined Components: Tailwind CSS এর মধ্যে আগেই তৈরি করা কম্পোনেন্ট (বাটন, কার্ড ইত্যাদি) নেই, 
কিন্তু আপনি যেকোনো ডিজাইন তৈরি করতে কাস্টম ক্লাস ব্যবহার করতে পারেন।
4. Responsive Design: Tailwind CSS-এ রেসপন্সিভ ডিজাইন সহজে করা যায়। 
আপনি মিডিয়া কুয়েরি গুলি ব্যবহার না করেই বিভিন্ন স্ক্রীন সাইজের জন্য ক্লাস অ্যাড করতে পারেন।
5. Minimal CSS: Tailwind CSS আপনার HTML ফাইলের মধ্যে ছোট ছোট ক্লাস অ্যাসাইন করে, ফলে CSS ফাইল কমপ্যাক্ট এবং লাইটও হয়।`,
          },
          {
            point:
              "Unlike Bootstrap, Tailwind does not provide prebuilt components but focuses on utility classes.",
            example: ``,
          },
        ],
      },
      {
        id: 2,
        question:
          "How do you set up Tailwind CSS in a project? Describe the different installation methods.",
        points: [
          {
            point:
              "Tailwind can be installed using npm, yarn, or via a CDN link.",
            example: "`npm install -D tailwindcss postcss autoprefixer`",
          },
          {
            point: "Initialize Tailwind configuration using the CLI.",
            example: "`npx tailwindcss init`",
          },
          {
            point:
              "Configure the `content` array to specify paths to files using Tailwind utilities.",
            example: "`content: ['./src/**/*.{html,js,jsx,ts,tsx}']`",
          },
          {
            point:
              "Tailwind CSS প্রকল্পে সেটআপ করার জন্য বেশ কয়েকটি পদ্ধতি রয়েছে:",
            example: `1. npm প্যাকেজ:
npm install tailwindcss এর মাধ্যমে Tailwind ইনস্টল করা যায়। 
পরে Tailwind configuration file তৈরি করতে npx tailwindcss init কমান্ড চালানো হয়।

2. CDN ব্যবহার:
CDN এর মাধ্যমে দ্রুত Tailwind যুক্ত করা যায়, যেমন:
<script src="https://cdn.tailwindcss.com"></script>

3. PostCSS ও Build Tools:
আপনার প্রকল্পে PostCSS এবং Webpack এর মাধ্যমে Tailwind যোগ করা যায়,
যেখানে আপনার CSS কোডকে প্রক্রিয়া করা হয়।

`,
          },
        ],
      },
      {
        id: 3,
        question:
          "What are utility classes in Tailwind CSS? How do they help in building UI components?",
        points: [
          {
            point:
              "Utility classes are single-purpose classes like `p-4`, `m-2`, or `text-blue-500`.",
            example: "`<div class='p-4 bg-gray-100'>Content</div>`",
          },
          {
            point:
              "They allow you to design directly in HTML without writing custom CSS.",
            example: ``,
          },
          {
            point:
              "Utility classes হলো ছোট CSS ক্লাস যা একটি নির্দিষ্ট স্টাইল প্রোপার্টি প্রয়োগ করে। উদাহরণস্বরূপ, p-4 ক্লাস প্যাডিং যোগ করবে, bg-blue-500 ব্যাকগ্রাউন্ড রং নির্ধারণ করবে। এগুলি একত্রে ব্যবহার করে আপনি দ্রুত UI কম্পোনেন্ট তৈরি করতে পারেন। Tailwind এর এভাবে ইউটিলিটি ক্লাস ব্যবহার UI ডিজাইন এবং ডেভেলপমেন্ট প্রক্রিয়াকে আরও দ্রুত এবং কাস্টমাইজযোগ্য করে তোলে।",
            example: ``,
          },
        ],
      },
      {
        id: 4,
        question:
          "Explain the benefits of using Tailwind’s JIT (Just-in-Time) mode.",
        points: [
          {
            point:
              "Tailwind CSS এর JIT মোড শুধু সেই CSS স্টাইলগুলি তৈরি করে যা আপনি প্রকল্পে ব্যবহার করছেন, যার ফলে ফাইল সাইজ ছোট হয় এবং ডেভেলপমেন্ট প্রক্রিয়া দ্রুত হয়। এই মোডের মাধ্যমে ডিজাইন পরিবর্তন করলেও সেগুলি একে একে কম্পাইল হবে এবং ডিপেন্ডেন্সি লোডিং কম থাকবে। এটি CSS প্যাকেজ কমপ্যাক্ট রাখে এবং কোড পুনঃব্যবহারযোগ্যতা বৃদ্ধি করে।",
            example:
              `<div class='text-green-500 bg-yellow-200'>JIT Example</div>`,
          },
          {
            point:
              "It improves development speed by compiling only used styles in real time.",
            example: ``,
          },
        ],
      },
      {
        id: 5,
        question:
          "What are configuration files in Tailwind, and how do they customize the framework?",
        points: [
          {
            point:
              "Tailwind CSS এর কনফিগারেশন ফাইল (tailwind.config.js) আপনাকে কাস্টম থিম, রং, স্পেসিং, ফন্ট সাইজ, এবং অন্যান্য সেটিংস সংজ্ঞায়িত করার সুযোগ দেয়। এটি দিয়ে আপনি Tailwind এর ডিফল্ট কনফিগারেশন কাস্টমাইজ করে আপনার প্রকল্পের জন্য বিশেষভাবে উপযোগী করে তুলতে পারেন। উদাহরণস্বরূপ, আপনি নিজস্ব কালার বা স্পেসিং সিস্টেম সংজ্ঞায়িত করতে পারেন।",
            example:
              "`module.exports = { theme: { extend: { colors: { primary: '#1D4ED8' } } } }`",
          },
        ],
      },
      {
        id: 6,
        question:
          "How does the `@apply` directive work, and what is its purpose in Tailwind?",
        points: [
          {
            point:
              "Tailwind CSS-এ @apply ডিরেকটিভ ব্যবহার করে আপনি একাধিক ইউটিলিটি ক্লাস একত্রিত করতে পারেন এবং তা একটি CSS ক্লাসে প্রয়োগ করতে পারেন। উদাহরণস্বরূপ, আপনি অনেকগুলি ইউটিলিটি ক্লাস একত্রে একটি নতুন ক্লাসে ব্যবহার করতে পারেন, যাতে কোড আরও পরিষ্কার এবং পুনঃব্যবহারযোগ্য হয়।",
            example: `.btn {
  @apply px-4 py-2 bg-blue-500 text-white rounded;
}

এখানে .btn ক্লাসে px-4, py-2, bg-blue-500, text-white, rounded ক্লাসগুলি একত্রিত হয়েছে।`,
          },
        ],
      },
      {
        id: 7,
        question:
          "What are responsive design utilities in Tailwind, and how do breakpoints work?",
        points: [
          {
            point:
              "Responsive utilities like `sm:`, `md:`, and `lg:` enable breakpoints for different screen sizes.",
            example:
              "`<div class='text-base md:text-lg lg:text-xl'>Responsive Text</div>`",
          },
        ],
      },
      {
        id: 8,
        question: "How does Tailwind handle theming and custom colors?",
        points: [
          {
            point:
              "Tailwind CSS-এ থিমিং এবং কাস্টম রঙ কনফিগারেশন ফাইলের মাধ্যমে পরিচালনা করা হয়। tailwind.config.js ফাইলে আপনি নতুন রঙ, ফন্ট, সাইজ ইত্যাদি কাস্টমাইজ করতে পারেন। উদাহরণ:",
            example: `module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1c92d2',
      },
    },
  },
}
  এখানে, custom-blue নামে একটি কাস্টম রঙ তৈরি করা হয়েছে যা Tailwind ক্লাসের মতো ব্যবহার করা যাবে।
`,
          },
          {
            point:
              "Colors can be applied using utility classes like `text-primary` or `bg-primary`.",
            example: "`<div class='text-primary'>Themed Text</div>`",
          },
        ],
      },
    ],
  },



  {
    step: "Two",
    title: "Commonly Used Tailwind Utilities",
    qa: [
      {
        id: 9,
        question:
          "Explain how spacing utilities (like `m-`, `p-`) work in Tailwind.",
        points: [
          {
            point:
              "Spacing utilities control margin (`m-`) and padding (`p-`) using a scale system.",
            example: "`<div class='m-4 p-2'>Spacing Example</div>`",
          },
          {
            point:
              "Values like `m-0`, `m-2`, and `p-4` represent consistent spacing sizes.",
            example: ``,
          },
        ],
      },
      {
        id: 10,
        question:
          "How do you use Flexbox utilities in Tailwind to create layouts?",
        points: [
          {
            point:
              "Flex utilities like `flex`, `justify-center`, and `items-center` help in building flexible layouts.",
            example:
              "`<div class='flex justify-between items-center'>Flex Example</div>`",
          },
        ],
      },
      {
        id: 11,
        question:
          "What are typography utilities in Tailwind, and how can you style text?",
        points: [
          {
            point:
              "Typography utilities include `text-` for size, `font-` for weight, and `text-` for colors.",
            example:
              "`<p class='text-lg font-semibold text-red-600'>Styled Text</p>`",
          },
        ],
      },
      {
        id: 12,
        question:
          "Describe how background and color utilities work in Tailwind.",
        points: [
          {
            point:
              "Background colors use `bg-*` classes, and text colors use `text-*` classes.",
            example:
              "`<div class='bg-blue-200 text-black'>Background Example</div>`",
          },
        ],
      },
      {
        id: 13,
        question:
          "What are state variants in Tailwind, and how do they apply to hover, focus, etc.?",
        points: [
          {
            point:
              "Tailwind CSS-এ স্টেট ভেরিয়েন্ট ব্যবহার করে এলিমেন্টের বিভিন্ন স্টেট যেমন hover, focus, active প্রভৃতিতে স্টাইল পরিবর্তন করা যায়। এই স্টেট ভেরিয়েন্টগুলো ব্যবহার করে ইউজার ইন্টারঅ্যাকশনের সময় স্টাইল পরিবর্তন সম্ভব হয়। উদাহরণ:",
            example:
              `<button class="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
  Hover or Focus me!
</button>
`,
          },
        ],
      },
      {
        id: 14,
        question: "How do you handle font customization in Tailwind?",
        points: [
          {
            point:
              "Custom fonts can be added in `tailwind.config.js` and applied using `font-*` utilities.",
            example: `module.exports = {
  theme: {
    extend: {
      fontFamily: {
        custom: ['CustomFont', 'sans-serif'],
      },
    },
  },
}

এখন, আপনার HTML এ আপনি font-custom ক্লাস ব্যবহার করে এই কাস্টম ফন্ট প্রয়োগ করতে পারবেন:

<p class="font-custom">This text is using the custom font.</p>
`,
          },
        ],
      },
      {
        id: 15,
        question:
          "Explain how Tailwind’s grid utilities work and compare them to CSS Grid.",
        points: [
          {
            point:
              "Tailwind’s grid system uses `grid`, `grid-cols-*`, and `gap-*` utilities.",
            example: "`<div class='grid grid-cols-3 gap-4'>Grid Example</div>`",
          },
        ],
      },
    ],
  },



  {
    step: "Three",
    title: "Tailwind Layout & Responsiveness",
    qa: [
      {
        id: 16,
        question:
          "What is the difference between Flexbox and Grid utilities in Tailwind, and when would you use each?",
        points: [
          {
            point:
              `Flexbox এবং CSS Grid উভয়ই লেআউট তৈরির জন্য ব্যবহৃত হয়, তবে তাদের ব্যবহারের ক্ষেত্রে কিছু পার্থক্য রয়েছে। Flexbox মূলত এক মাত্রিক (1D) লেআউট ব্যবস্থাপনা জন্য ব্যবহার করা হয়, অর্থাৎ এক লাইনে উপাদানগুলোকে সজ্জিত করা হয় (হরিজেন্টালি বা ভারটিকালি)। অন্যদিকে, Grid হলো দ্বিমাত্রিক (2D) লেআউট ব্যবস্থাপনা, যা আপনি rows এবং columns উভয় দিকে সজ্জিত করতে পারবেন।

              Flexbox ব্যবহার করলে flex ক্লাস এবং Grid ব্যবহারের জন্য grid ক্লাস ব্যবহার করা হয়।`,
            example:
              `* কখন ব্যবহার করবেন:
    Flexbox ব্যবহার করুন যখন উপাদানগুলো একদিক থেকে সজ্জিত করতে চান।
    CSS Grid ব্যবহার করুন যখন আপনি rows এবং columns উভয়ের সঙ্গে কাজ করতে চান।

<div class='flex justify-center items-center'>
  Flexbox Example
</div>`,
          },
          {
            point:
              "Flexbox (`flex`, `justify-*`, `items-*`) is used for one-dimensional layouts.",
            example:
              `<div class='flex justify-center items-center'>
  Flexbox Example
</div>`,
          },
          {
            point:
              "Grid (`grid`, `grid-cols-*`, `gap-*`) is used for two-dimensional layouts.",
            example: `<div class='grid grid-cols-3 gap-4'>
  Grid Example
</div>`,
          },
        ],
      },
      {
        id: 17,
        question:
          "How do you create responsive layouts in Tailwind? Provide examples.",
        points: [
          {
            point:
              "Responsive utilities like `sm:`, `md:`, and `lg:` allow layouts to adapt to screen sizes.",
            example:
              `<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    Responsive Grid
</div>`,
          },
        ],
      },
      {
        id: 18,
        question:
          "How can you center elements using Tailwind utilities? List different ways.",
        points: [
          {
            point:
              "Using Flexbox: `flex` combined with `justify-center` and `items-center`.",
            example:
              `<div class='flex justify-center items-center h-screen'>
  Centered Content
</div>`,
          },
          {
            point:
              "Using Grid: `place-items-center` centers content both vertically and horizontally.",
            example:
              `<div class='grid place-items-center h-screen'>
  Centered Content
</div>`,
          },
          {
            point:
              "মার্জিনের মাধ্যমে (auto):",
            example:
              `<div class="mx-auto w-1/2">
  Centered content using auto margin.
</div>
`,
          },
        ],
      },
      {
        id: 19,
        question:
          "What is the `container` class in Tailwind, and how does it help with layout?",
        points: [
          {
            point:
              "Tailwind-এ container ক্লাসটি মূলত একটি চাপযুক্ত লেআউট তৈরির জন্য ব্যবহৃত হয়, যা বিভিন্ন স্ক্রীন সাইজ অনুযায়ী স্বয়ংক্রিয়ভাবে প্রস্থ পরিবর্তন করে। container ক্লাস ব্যবহার করলে আপনার উপাদানটি স্ক্রীন সাইজ অনুযায়ী প্রস্থ ঠিক রাখে, এবং এটি মার্জিন auto করে কেন্দ্রীভূত হয়। উদাহরণ:",
            example:
              "`<div class='container mx-auto px-4'>Container Example</div>`",
          },
        ],
      },
      {
        id: 20,
        question:
          "Explain how Tailwind’s screen size modifiers work and list some common breakpoints.",
        points: [
          {
            point:
              "Screen size modifiers (`sm:`, `md:`, `lg:`, `xl:`) target different breakpoints.",
            example:
              "`<div class='text-base md:text-lg lg:text-xl'>Responsive Text</div>`",
          },
          {
            point:
              "Tailwind CSS-এ স্ক্রীন সাইজ মডিফায়ার যেমন sm:, md:, lg:, xl:, 2xl: বিভিন্ন ব্রেকপয়েন্টের জন্য ক্লাস ব্যবহার করতে সাহায্য করে। এই ব্রেকপয়েন্টগুলো স্ক্রীনের আকারের উপর নির্ভর করে স্টাইল পরিবর্তন করতে পারে। সাধারণ ব্রেকপয়েন্টগুলো হল:",
            example: `sm: – ছোট স্ক্রীন (600px)
md: – মাঝারি স্ক্রীন (768px)
lg: – বড় স্ক্রীন (1024px)
xl: – এক্সট্রা বড় স্ক্রীন (1280px)
2xl: – আরও বড় স্ক্রীন (1536px)`,
          },
        ],
      },
      {
        id: 21,
        question: "How do you create fixed and sticky elements using Tailwind?",
        points: [
          {
            point:
              "Tailwind CSS-এ fixed এবং sticky এলিমেন্ট তৈরি করতে fixed এবং sticky ক্লাস ব্যবহার করা হয়। fixed ক্লাস এলিমেন্টকে স্ক্রীনের নির্দিষ্ট স্থানে ফিক্স করে রাখে, এবং sticky ক্লাস এলিমেন্টকে স্ক্রোল করার সময় এক জায়গায় স্টিকি করে রাখে। উদাহরণ:",
            example:
              `<div class="fixed top-0 left-0 w-full">
  This element is fixed at the top of the page.
</div>

<div class="sticky top-0">
  This element will stick at the top when you scroll.
</div>
`,
          },
          
        ],
      },
      {
        id: 22,
        question:
          "What are responsive hiding/showing utilities in Tailwind, and how do they work?",
        points: [
          {
            point:
              "Utilities like `hidden`, `block`, and responsive prefixes (e.g., `md:block`) control visibility.",
            example:
              "`<div class='hidden md:block'>Visible only on medium screens and above</div>`",
          },
        ],
      },
      {
        id: 23,
        question: "Describe how Tailwind enables mobile-first design.",
        points: [
          {
            point:
              "Tailwind CSS স্বয়ংক্রিয়ভাবে মোবাইল-ফার্স্ট ডিজাইন সমর্থন করে, যেখানে আপনি মুল স্টাইল ছোট স্ক্রীনের জন্য লিখবেন এবং বড় স্ক্রীনের জন্য ব্রেকপয়েন্ট মডিফায়ার ব্যবহার করবেন। এটি মোবাইল-ফার্স্ট লেআউটকে সুবিধাজনক করে তোলে, যেমন:",
            example:
              `<div class="text-sm md:text-lg lg:text-xl">
  This text is mobile-first with responsive size adjustments.
</div>

এখানে, ছোট স্ক্রীনে text-sm, মাঝারি স্ক্রীনে text-lg, এবং বড় স্ক্রীনে text-xl প্রযোজ্য হবে।`,
          },
        ],
      },
    ],
  },



  {
    step: "Four",
    title: "Advanced Tailwind CSS Questions",
    qa: [
      {
        id: 24,
        question:
          "How do you extend Tailwind with custom classes and utilities in the configuration file?",
        points: [
          {
            point:
              "Tailwind CSS-এ কাস্টম ক্লাস এবং ইউটিলিটি এক্সটেন্ড করার জন্য আপনাকে tailwind.config.js ফাইলে পরিবর্তন করতে হবে। এটি ব্যবহার করে নতুন ফন্ট, কালার, স্পেসিং অথবা আপনার নিজস্ব কাস্টম ইউটিলিটি ক্লাস যোগ করা সম্ভব। উদাহরণ:",
            example:
              `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1DA1F2',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
}
এখন, আপনি HTML এ bg-custom-blue বা w-128 ক্লাস ব্যবহার করে এগুলো প্রয়োগ করতে পারবেন।`,
          },
        ],
      },
      {
        id: 25,
        question:
          "What are Tailwind plugins, and how can they add functionality to your project?",
        points: [
          {
            point:
              "Plugins extend Tailwind's functionality by adding custom utilities or components.",
            example:
          `plugins: [
    require('@tailwindcss/forms'), 
    require('@tailwindcss/typography')
  ]`,
          },
          {
            point:
              "Tailwind CSS-এ প্লাগিন ব্যবহার করে আপনি নতুন ফিচার বা ইউটিলিটি ক্লাস যোগ করতে পারেন যা Tailwind-এর ডিফল্ট সেটিংসে অন্তর্ভুক্ত নয়। আপনি প্লাগিন ইনস্টল করে আপনার প্রজেক্টে আরও নতুন ইউটিলিটিজ তৈরি করতে পারেন, যেমন:",
            example:
          `// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.rotate-45': {
          transform: 'rotate(45deg)',
        },
      })
    }),
  ],
}
  এখানে, নতুন rotate-45 ক্লাসটি যোগ করা হয়েছে যা ৪৫ ডিগ্রি ঘুরিয়ে দিবে
`,
          },
        ],
      },
      {
        id: 26,
        question:
          "Explain how you can use Tailwind with CSS preprocessors like SASS or PostCSS.",
        points: [
          {
            point:
              `Tailwind CSS-কে CSS প্রিপ্রসেসর যেমন SASS (SCSS) বা PostCSS এর সাথে সহজেই ইন্টিগ্রেট করা যায়। এখানে আমরা একটি প্রসেস কভার করব:
              SASS (SCSS) এর সাথে Tailwind ব্যবহার।
              `,
            example:
              `1. Tailwind CSS এর সাথে SASS (SCSS) ইন্টিগ্রেশন
SASS (SCSS) ব্যবহার করে আপনি Tailwind CSS এর সাথে কাস্টম স্টাইল যোগ করতে পারেন।

ধাপ ১: প্রয়োজনীয় প্যাকেজ ইন্সটল করা
নোড প্রজেক্ট তৈরি করে Tailwind CSS এবং SASS ইনস্টল করতে হবে।
npm install -D tailwindcss postcss autoprefixer sass
npx tailwindcss init

ধাপ ২: Tailwind CSS কনফিগার করা
tailwind.config.js ফাইল তৈরি হলে তা এডিট করুন:
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

ধাপ ৩: SCSS ফাইল তৈরি করা এবং Tailwind CSS ইমপোর্ট করা
Tailwind CSS এর ডিরেক্টিভ (like @tailwind base) SCSS ফাইলে যুক্ত করুন:

// styles.scss

@tailwind base;
@tailwind components;
@tailwind utilities;

// Custom SASS/SCSS styles
body {
  font-family: Arial, sans-serif;
}

.my-button {
  @apply bg-blue-500 text-white py-2 px-4 rounded;

  &:hover {
    background-color: darken(#3b82f6, 10%);
  }
}

ধাপ ৪: PostCSS এবং SCSS প্রসেস করা
package.json-এ স্ক্রিপ্ট যোগ করুন:
"scripts": {
  "build:css": "npx postcss styles.scss -o output.css",
  "watch:css": "npx postcss styles.scss -o output.css --watch"
}

`,
          },
          {
            point:
              "Tailwind integrates with preprocessors like SASS or PostCSS for advanced customization.",
            example:
              `@tailwind base; 
@tailwind components;
@tailwind utilities; 

in SCSS file`,
          },
        ],
      },
      {
        id: 27,
        question:
          "How does Tailwind handle dark mode, and how can you enable it in your project?",
        points: [
          {
            point:
              "Dark mode can be enabled using `darkMode: 'class'` in `tailwind.config.js`.",
            example:
              `Tailwind CSS-এ ডার্ক মোড সমর্থন করে এবং এটি dark: প্রিভিউ ক্লাস দিয়ে ব্যবহার করা হয়। আপনি ডার্ক মোডকে কনফিগারেশন ফাইলে darkMode: 'class' দিয়ে সক্রিয় করতে পারেন। উদাহরণ:
              
              // tailwind.config.js
module.exports = {
  darkMode: 'class', // class method for toggling dark mode
  theme: {
    extend: {
      colors: {
        'dark-background': '#2d2d2d',
      },
    },
  },
}

এখন আপনি HTML এ dark:bg-dark-background ক্লাস ব্যবহার করে ডার্ক মোডের জন্য ব্যাকগ্রাউন্ড রঙ পরিবর্তন করতে পারবেন। ডার্ক মোড এনাবল করতে <html class="dark"> ট্যাগ যোগ করতে হবে।`,
          },
        ],
      },
      {
        id: 28,
        question:
          "What are the advantages and potential drawbacks of using Tailwind CSS in a project?",
        points: [
          {
            point:
              "Advantages: Rapid development, utility-first approach, and customization.",
            example: `সুবিধা:
1. কমপ্যাক্ট কোড: Tailwind CSS সিম্পল এবং কাস্টমাইজড ক্লাস ব্যবহার করে কাজ দ্রুত করে।
2. ফাস্ট লোডিং: Tailwind JIT মোডের মাধ্যমে কম CSS কোড তৈরি হয়, যা ওয়েবসাইটের লোডিং স্পিড বাড়ায়।
3. ফ্লেক্সিবিলিটি: যেকোনো কাস্টম UI ডিজাইন খুব সহজে তৈরি করা 

সম্ভাব্য drawbacks:
1. প্রাথমিক সেটআপ: প্রাথমিক কনফিগারেশন এবং ক্লাসগুলির ব্যবহার শুরুতে জটিল হতে পারে।
2. ক্লাস কনফিউজান: অনেক ক্লাস একসাথে ব্যবহারের ফলে কোড ভারি হতে পারে, যা মাঝে মাঝে বিভ্রান্তির সৃষ্টি করে।`,
          },
        ],
      },
      {
        id: 29,
        question:
          "How do you optimize and purge unused CSS in a Tailwind project?",
        points: [
          {
            point:
              "Tailwind uses PurgeCSS to remove unused CSS in production builds.",
            example:
              "`purge: ['./src/**/*.{html,js,jsx,ts,tsx}']` in `tailwind.config.js`",
          },
          {
            point:
              "Tailwind প্রজেক্টে অপ্রয়োজনীয় CSS অপটিমাইজ এবং পুর্জ করতে PurgeCSS ব্যবহার করা হয়। এই প্রক্রিয়া অপ্রয়োজনীয় CSS স্টাইলগুলো সরিয়ে ফেলে, ফলে সাইটের সাইজ কমে যায় এবং লোড স্পিড বেড়ে যায়। purge অপশন কনফিগারেশন ফাইলে যোগ করতে হবে:",
            example:
              `// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
}

এটি নিশ্চিত করবে যে, আপনার প্রজেক্টে যা কিছু ব্যবহৃত হচ্ছে না তা CSS থেকে বাদ দেওয়া হবে।`,
          },
        ],
      },
      {
        id: 30,
        question:
          "Describe some new or recent features in the latest version of Tailwind CSS.",
        points: [
          {
            point:
              "Recent features include the JIT engine, arbitrary value support, and enhanced dark mode.",
            example:
              "`<div class='text-[22px] bg-[red]'>Arbitrary Value Example</div>`",
          },
          {
            point:
              "Tailwind CSS-এর সাম্প্রতিক সংস্করণে বেশ কিছু নতুন ফিচার যুক্ত হয়েছে, যেমন:",
            example:
              `1. JIT (Just-in-Time) মোড: 
      এটি স্টাইল প্রক্রিয়াকে আরও দ্রুত এবং কার্যকরী করে তোলে। ক্লাসগুলি তখনই তৈরি হয় যখন প্রয়োজন হয়।
2. নতুন ব্রেকপয়েন্ট এবং স্ক্রীন সাইজ ভ্যারিয়েবল: 
      নতুন স্ক্রীন সাইজ ভ্যারিয়েবল যেমন xxl ব্রেকপয়েন্ট যোগ করা হয়েছে।
3. অপারেটর ক্লাস: 
      এখন থেকে নতুন group এবং peer ক্লাস ব্যবহার করে আরও সহজভাবে বিভিন্ন UI উপাদানের স্টাইল প্রভাবিত করা যাবে।
এই নতুন ফিচারগুলো Tailwind CSS কে আরও শক্তিশালী এবং উন্নত করেছে।`,
          },
        ],
      },
    ],
  },
];
