export const BootstrapQA =[
  {
    step: "One",
    title: "Basic Bootstrap Questions",
    qa: [
      {
        id: "basic-1",
        question: "What is Bootstrap, and why is it used in web development?",
        points: [
          {
            point: `Bootstrap একটি জনপ্রিয় ফ্রন্টএন্ড ফ্রেমওয়ার্ক যা HTML, CSS, এবং JavaScript ভিত্তিক ইউটিলিটি এবং কম্পোনেন্ট সরবরাহ করে। এটি দ্রুত এবং সহজে রেসপন্সিভ ওয়েবসাইট তৈরি করতে ব্যবহৃত হয়। Bootstrap ব্যবহারের সুবিধা হলো এটি রেসপন্সিভ গ্রিড সিস্টেম, প্রস্তুত করা UI কম্পোনেন্ট, এবং ক্রস-ব্রাউজার সামঞ্জস্য প্রদান করে।

`,
            example: ``,
          },
          {
            point: "It provides pre-designed components and a grid system to simplify UI development.",
            example: ``,
          },
        ],
      },
      {
        id: "basic-2",
        question: "How do you include Bootstrap in a project? Describe the different methods.",
        points: [
          {
            point: "",
            example: `** Bootstrap যোগ করার জন্য তিনটি পদ্ধতি ব্যবহার করা যায়:

1. CDN (Content Delivery Network): সরাসরি Bootstrap এর CSS এবং JS ফাইল লিঙ্ক করে।
2. Download and Host Locally: Bootstrap এর ফাইলগুলো ডাউনলোড করে আপনার প্রোজেক্টে যোগ করা।
3. Package Manager: npm বা yarn ব্যবহার করে Bootstrap ইনস্টল করা।`,
          },
          {
            point: "Bootstrap can be included via CDN by linking its stylesheet and JavaScript.",
            example: `<link 
  rel='stylesheet' 
  href='https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css' 
>`,
          },
          {
            point: "It can also be installed locally using npm or yarn.",
            example: `npm install bootstrap`,
          },
        ],
      },
      {
        id: "basic-3",
        question: "Explain the grid system in Bootstrap. How many columns does it have, and how does it work?",
        points: [
          {
            point: "Bootstrap গ্রিড সিস্টেম একটি ১২-কলামের লেআউট সিস্টেম যা রেসপন্সিভ ডিজাইন তৈরি করতে ব্যবহৃত হয়। এটি রো এবং কলাম ভিত্তিক লেআউট ডিজাইন করতে সহায়তা করে। .row এর ভেতর .col-* ক্লাস ব্যবহার করে বিভিন্ন ব্রেকপয়েন্টে কন্টেন্ট সাইজ সেট করা হয়।",
            example: ``,
          },
          {
            point: "The grid system in Bootstrap is based on a 12-column layout.",
            example: `<div class='row'> 
  <div class='col-6'>
    Column 1
  </div> 
  <div class='col-6'>
    Column 2
  </div> 
</div>`,
          },
          {
            point: "It allows responsive layouts by using classes like `col-`, `col-sm-`, and `col-lg-`.",
            example: ``,
          },
        ],
      },
      {
        id: "basic-4",
        question: "What are Bootstrap containers, and what’s the difference between `.container` and `.container-fluid`?",
        points: [
          {
            point: "Bootstrap কন্টেইনার হল একটি রেসপন্সিভ, ফিক্সড-ওয়াইড লেআউট সিস্টেম।",
            example: `.container: একটি ফিক্সড-ওয়াইড লেআউট, স্ক্রিন সাইজের উপর ভিত্তি করে ব্রেকপয়েন্টে পরিবর্তন হয়।
.container-fluid: সম্পূর্ণ চওড়া লেআউট, সবসময় স্ক্রিনের প্রস্থকে পূর্ণ করে।`,
          },
          {
            point: "`container` provides a fixed-width container with breakpoints.",
            example: `<div class='container'>Content</div>`,
          },
          {
            point: "`container-fluid` provides a full-width container that spans the entire viewport.",
            example: `<div class='container-fluid'>Full-Width Content</div>`,
          },
        ],
      },
      {
        id: "basic-5",
        question: "What are Bootstrap classes, and how do they differ from CSS classes?",
        points: [
          {
            point: "Bootstrap ক্লাস হল পূর্বনির্ধারিত CSS ক্লাস যা দ্রুত স্টাইলিংয়ের জন্য ব্যবহার করা হয়। এগুলি সাধারণ CSS ক্লাসের মতোই তবে এগুলিতে Bootstrap ফ্রেমওয়ার্কের নিজস্ব স্টাইল আগে থেকে সংযুক্ত থাকে। উদাহরণস্বরূপ, .btn ক্লাস ব্যবহার করে Button তৈরি করা যায়।",
            example: `<div class='text-center'>Centered Text</div>`,
          },
        ],
      },
      {
        id: "basic-6",
        question: "Explain the concept of responsive design in Bootstrap.",
        points: [
          {
            point: "Bootstrap এর মাধ্যমে রেসপন্সিভ ডিজাইন সহজে তৈরি করা যায় কারণ এটি একটি মোবাইল-ফার্স্ট ফ্রেমওয়ার্ক। এর গ্রিড সিস্টেম এবং ব্রেকপয়েন্ট ইউটিলিটিজ ডিভাইসের স্ক্রিন সাইজের উপর ভিত্তি করে লেআউট পরিবর্তন করতে দেয়।",
            example: `<div class='col-md-6 col-sm-12'>Responsive Column</div>`,
          },
        ],
      },
      {
        id: "basic-7",
        question: "How do breakpoints work in Bootstrap? List some commonly used breakpoints.",
        points: [
          {
            point: "Breakpoints are predefined screen widths where the layout changes.",
            example: ``,
          },
          {
            point: "Bootstrap এর ব্রেকপয়েন্ট স্ক্রিন সাইজের উপর ভিত্তি করে কন্টেন্টের লেআউট নিয়ন্ত্রণ করে।",
            example: `** Common breakpoints:
xs (<576px)
sm (≥576px)
md (≥768px)
lg (≥992px)
xl (≥1200px)`,
          },
        ],
      },
      {
        id: "basic-8",
        question: "What is a Bootstrap component? Give examples of some commonly used components.",
        points: [
          {
            point: `A Bootstrap component is a pre-styled UI element, like buttons, modals, or navbars.[Bootstrap কম্পোনেন্ট হলো পুনরায় ব্যবহারযোগ্য UI উপাদান যেমন Button, কার্ড, নেভিগেশন বার, এবং মডাল।
]`,
            example: `<button class='btn btn-primary'>Primary Button</button>
            
** উদাহরণ:

নেভিগেশন বার (.navbar)
মডাল (.modal)
কার্ড (.card)
এলার্ট (.alert)`,
          },
        ],
      },
    ],
  },



  {
    step: "Two",
    title: "Commonly Used Bootstrap Components",
    qa: [
      {
        id: "components-1",
        question: "How do you create a navigation bar using Bootstrap? Explain any commonly used classes.",
        points: [
          {
            point: "Bootstrap নেভিগেশন বার তৈরি করতে .navbar, .navbar-expand-*, এবং .navbar-light বা .navbar-dark ক্লাস ব্যবহার করা হয়। উদাহরণ:",
            example: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Brand</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
    </ul>
  </div>
</nav>
`,
          },
        ],
      },
      {
        id: "components-2",
        question: "What is a card in Bootstrap, and how do you create one?",
        points: [
          {
            point: "A card is a flexible content container with classes like `card`, `card-body`, and `card-title`.",
            example: `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some text.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`,
          },
        ],
      },
      {
        id: "components-3",
        question: "Explain how the modal component works in Bootstrap. How do you trigger a modal?",
        points: [
          {
            point: `মডাল একটি পপআপ ডায়ালগ যা .modal ক্লাস ব্যবহার করে তৈরি করা হয়। এটি data-toggle="modal" এবং data-target অ্যাট্রিবিউট দিয়ে ট্রিগার করা যায়। [A modal in Bootstrap is a popup or dialog box that appears over the main content of the page. It is often used for displaying information, forms, alerts, or confirming user actions. Modals in Bootstrap are typically hidden by default and can be shown or hidden by triggering actions like button clicks.]
            উদাহরণ:`,
            example: `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Open Modal
</button>

<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
      </div>
      <div class="modal-body">Modal body text.</div>
    </div>
  </div>
</div>
`,
          },
        ],
      },
      {
        id: "components-4",
        question: "What is the purpose of the `btn` class in Bootstrap, and how do you style buttons differently using Bootstrap?",
        points: [
          {
            point: "`btn` is used to style buttons, and variants like `btn-primary`, `btn-secondary` provide different styles.",
            example: `<button class='btn btn-primary'>Primary Button</button>`,
          },
        ],
      },
      {
        id: "components-5",
        question: "How does the alert component work in Bootstrap, and what are some of its variations?",
        points: [
          {
            point: "Alerts are used to display messages with classes like `alert`, `alert-success`, and `alert-danger`.",
            example: `<div class='alert alert-success'>Success Message</div>`,
          },
        ],
      },
      {
        id: "components-6",
        question: "What are dropdowns in Bootstrap, and how do they work?",
        points: [
          {
            point: "Dropdowns provide a toggleable menu using `dropdown` and `dropdown-menu` classes.",
            example: `<div class="dropdown">
  <button 
    class="btn btn-secondary dropdown-toggle" 
    type="button" 
    data-toggle="dropdown"
  >
  Dropdown
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
  </div>
</div>
`,
          },
        ],
      },
      {
        id: "components-7",
        question: "How do you create forms in Bootstrap, and what are the advantages of using form groups?",
        points: [
          {
            point: "Forms use `form-group` and input classes like `form-control` to style form elements.",
            example: `<form>
  <div class="form-group">
    <label for="exampleInputEmail">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail">
  </div>
</form>
`,
          },
        ],
      },
    ],
  },



  {
    step: "Three",
    title: "Bootstrap Layout & Utilities",
    qa: [
      {
        id: "layout-1",
        question: "How does the grid system in Bootstrap differ when using Flexbox or Grid layout utilities?",
        points: [
          {
            point: `Bootstrap এর গ্রিড সিস্টেম Flexbox এবং CSS Grid উভয়ের সাপোর্ট করে। Flexbox ভিত্তিক গ্রিড সিস্টেম সহজ এবং দ্রুত লেআউট তৈরি করতে ব্যবহৃত হয়, যেখানে CSS Grid আরও জটিল এবং নির্দিষ্ট লেআউট ডিজাইনের জন্য ব্যবহার করা হয়। Flexbox .row এবং .col-* ক্লাসের মাধ্যমে কন্টেন্ট সজ্জিত করে, কিন্তু CSS Grid .d-grid এবং grid-template-* ইউটিলিটি ব্যবহার করে।`,
            example: `<div class='d-flex justify-content-center'>
  Flexbox Example
</div>`,
          },
        ],
      },
      {
        id: "layout-2",
        question: "What is the difference between `.col`, `.col-sm`, `.col-md`, etc., in Bootstrap's grid system?",
        points: [
          {
            point: "`col` is for all screen sizes, while `col-sm` and `col-md` are breakpoint-specific.",
            example: `Bootstrap এর .col, .col-sm, .col-md ইত্যাদি ক্লাস ব্রেকপয়েন্ট অনুযায়ী লেআউট নিয়ন্ত্রণ করে:

.col: সব স্ক্রিন সাইজে একত্রে কাজ করে।
.col-sm: শুধুমাত্র স্ক্রিন ≥576px হলে কার্যকর।
.col-md: শুধুমাত্র স্ক্রিন ≥768px হলে কার্যকর।`,
          },
        ],
      },
      {
        id: "layout-3",
        question: "How do you center elements in Bootstrap? Provide multiple methods.",
        points: [
          {
            point: "Use the `d-flex` and `justify-content-center` classes for horizontal centering.",
            example: `<div class='d-flex justify-content-center'>
  Centered Content
</div>`,
          },
          {
            point: "For vertical centering, use `align-items-center` or `vh-100` with Flexbox.",
            example: `<div class='d-flex align-items-center vh-100'>
  Centered Vertically
</div>`,
          },
        ],
      },
      {
        id: "layout-4",
        question: "What are utility classes in Bootstrap, and how do they help in quick styling?",
        points: [
          {
            point: "Utility classes provide pre-defined styles like `text-center`, `bg-primary`, and `m-2`.",
            example: `<p class='text-center'>
  Centered Text
</p>

Utility ক্লাস হলো পূর্বনির্ধারিত ক্লাস যা দ্রুত স্টাইল যোগ করতে ব্যবহৃত হয়। 
উদাহরণস্বরূপ,
.m-3 (মার্জিন 3 ইউনিট), 
.p-2 (প্যাডিং 2 ইউনিট), এবং 
.text-center (কেন্দ্রীকরণ)।`,
          },
        ],
      },
      {
        id: "layout-5",
        question: "Explain how the `m-` and `p-` classes work for margin and padding in Bootstrap.",
        points: [
          {
            point: "`m-` is for margin, and `p-` is for padding. They can be combined with directional suffixes like `t` (top), `b` (bottom), `l` (left), and `r` (right).",
            example: `<div class='m-3 p-2'>Box with Margin and Padding</div>`,
          },
          {
            point: "Values range from `0` (no space) to `5` (largest space) or `auto` (automatic adjustment).",
            example: `<div class='mt-5 mb-auto'>Top Margin and Auto Bottom</div>`,
          },
        ],
      },
      {
        id: "layout-6",
        question: "How does the Bootstrap spacing system work?",
        points: [
          {
            point: "Bootstrap's spacing system uses a scale from 0 to 5 to define spacing values.",
            example: `<div class='m-0'>No Margin</div> <div class='m-5'>Max Margin</div>`,
          },
        ],
      },
      {
        id: "layout-7",
        question: "What are responsive utilities in Bootstrap, and how can you hide/show elements on specific screen sizes?",
        points: [
          {
            point: "Responsive utilities like `d-none`, `d-sm-block`, and `d-md-none` control element visibility based on breakpoints.",
            example: `Responsive utilities .d-* ক্লাসের মাধ্যমে কন্টেন্ট প্রদর্শন বা লুকাতে সাহায্য করে। উদাহরণ:

.d-none: সব স্ক্রিনে কন্টেন্ট লুকাবে।
.d-md-block: শুধুমাত্র মধ্যম বা বড় স্ক্রিনে কন্টেন্ট দেখাবে।
.d-lg-none: বড় স্ক্রিনে কন্টেন্ট লুকাবে।`,
          },
        ],
      },
      {
        id: "layout-8",
        question: "How do you use the `.d-flex` and `.justify-content-*` classes to align items?",
        points: [
          {
            point: "`d-flex` creates a Flexbox container, and `justify-content-*` aligns content horizontally.",
            example: `<div class='d-flex justify-content-between'> <span>Left</span> <span>Right</span> </div>`,
          },
          {
            point: "Use `align-items-*` for vertical alignment within the Flexbox container.",
            example: `<div class='d-flex align-items-center'>Centered Vertically</div>`,
          },
        ],
      },
    ],
  },



  {
    step: "Four",
    title: "Advanced Bootstrap Questions",
    qa: [
      {
        id: "advanced-1",
        question: "How do you customize Bootstrap using SASS or LESS?",
        points: [
          {
            point: `Bootstrap কাস্টমাইজ করতে SASS বা LESS ব্যবহার করে ভ্যারিয়েবল পরিবর্তন করা হয়। উদাহরণস্বরূপ, custom.scss ফাইলে:`,
            example: `$primary: #ff5722; // পরিবর্তিত প্রাথমিক রঙ
@import "bootstrap";

এরপর, SASS কম্পাইল করে কাস্টম Bootstrap ফাইল তৈরি করা হয়।`,
          },
          {
            point: "Bootstrap allows customization via SASS or LESS variables and mixins.",
            example: `$primary-color: #ff5733;`,
          },
          {
            point: "You can import Bootstrap’s source files and override default variables before compiling.",
            example: `@import 'bootstrap/scss/bootstrap';`,
          },
        ],
      },
      {
        id: "advanced-2",
        question: "Explain Bootstrap’s JavaScript components and how they add interactivity.",
        points: [
          {
            point: "Bootstrap provides JavaScript-based components like modals, tooltips, and carousels for added interactivity.",
            example: `<button data-bs-toggle='tooltip' title='Tooltip Text'>Hover me</button>`,
          },
          {
            point: `Bootstrap-এর JavaScript কম্পোনেন্ট হলো এমন ফিচার, যেগুলো ওয়েবপেজে ইন্টারঅ্যাকটিভিটি এবং ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে ব্যবহার করা হয়। এই কম্পোনেন্টগুলো মূলত Bootstrap-এর বিল্ট-ইন জাভাস্ক্রিপ্ট বা jQuery প্লাগইন দ্বারা চালিত, এবং এগুলো HTML কোডের মাধ্যমে সহজেই ব্যবহার করা যায়।`,
            example: `JavaScript কম্পোনেন্ট কীভাবে কাজ করে?
Bootstrap-এর জাভাস্ক্রিপ্ট কম্পোনেন্টগুলো ব্যবহার করতে HTML অ্যাট্রিবিউট (যেমন data-bs-toggle, data-bs-target) বা জাভাস্ক্রিপ্ট মেথড ব্যবহার করতে হয়।
এগুলো DOM (Document Object Model)-এর সাথে ইন্টারঅ্যাকশন করে ইভেন্ট বেসড অ্যাকশন পরিচালনা করে।
এগুলো অ্যানিমেশন, ট্রিগার, এবং ইভেন্ট হ্যান্ডলার ব্যবহার করে ব্যবহারকারীর ইন্টারঅ্যাকশনের উপর ভিত্তি করে কার্যকর হয়।

Modal, dropdown, Tooltip, Carousel(Slider), Tabs etc


JavaScript ব্যবহার ছাড়া (Data Attributes)
Bootstrap কম্পোনেন্টগুলো data-bs- অ্যাট্রিবিউট দিয়ে ইন্টারঅ্যাকটিভ করা যায়, জাভাস্ক্রিপ্ট কোড না লিখেই।

JavaScript ব্যবহার করে (Manually Controlling)
Bootstrap কম্পোনেন্টগুলো প্রোগ্রামmatically নিয়ন্ত্রণ করতে bootstrap নামে একটি জাভাস্ক্রিপ্ট ক্লাস ব্যবহার করা যায়।

Example:
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
myModal.show();
`,
          },
        ],
      },
      {
        id: "advanced-3",
        question: "What is the carousel component in Bootstrap, and how do you create one?",
        points: [
          {
            point: "The carousel is a slideshow component with classes like `carousel`, `carousel-item`, and `carousel-indicators`.",
            example: `<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <!-- Indicators -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
  </div>

  <!-- Slides -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="image1.jpg" class="d-block w-100" alt="Slide 1">
      <div class="carousel-caption d-none d-md-block">
        <h5>First Slide Title</h5>
        <p>First slide description.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="image2.jpg" class="d-block w-100" alt="Slide 2">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second Slide Title</h5>
        <p>Second slide description.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="image3.jpg" class="d-block w-100" alt="Slide 3">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third Slide Title</h5>
        <p>Third slide description.</p>
      </div>
    </div>
  </div>

  <!-- Navigation Buttons -->
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
`,
          },
        ],
      },
      {
        id: "advanced-4",
        question: "How can you make a website theme dark or light using Bootstrap?",
        points: [
          {
            point: "Use Bootstrap’s `bg-dark`, `text-light`, or custom themes created using SASS variables.",
            example: `<div class='bg-dark text-light'>Dark Theme</div>`,
          },
        ],
      },
      {
        id: "advanced-5",
        question: "What are the pros and cons of using Bootstrap in a project?",
        points: [
          {
            point: "Pros: Quick development, responsive design, and pre-designed components. Cons: Can lead to uniform designs, requires overriding styles for customization.",
            example: `Pros:
1. দ্রুত ডেভেলপমেন্ট।
2. রেসপন্সিভ ডিজাইন সহজ।
3. প্রচুর প্রি-বিল্ট কম্পোনেন্ট।

Cons:
1. ওভাররাইড করতে বেশি CSS কোড লাগে।
2. সব সাইট একইরকম দেখতে হতে পারে।`,
          },
        ],
      },
      {
        id: "advanced-6",
        question: "How do you override default Bootstrap styling with custom CSS?",
        points: [
          {
            point: "Use custom CSS after including Bootstrap styles to override default styles.",
            example: `<style> .btn-primary { background-color: #333; } </style>`,
          },
        ],
      },
      {
        id: "advanced-7",
        question: "What’s new in the latest version of Bootstrap? Name some features.",
        points: [
          {
            point: "Bootstrap 5 introduces improved grid systems, CSS variables, and removes jQuery dependency.",
            example: ``,
          },
        ],
      },
    ],
  }
]