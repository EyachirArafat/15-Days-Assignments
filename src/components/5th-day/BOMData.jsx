export const BOMData = [
  {
    step: "One",
    title: "BOM (8 questions & Answers)",
    qa: [
      {
        id: "bom-1",
        question: "What is the Browser Object Model (BOM) in JavaScript?",
        points: [
          {
            point:
              "BOM (Browser Object Model) হল একটি JavaScript মডেল যা ব্রাউজারের সাথে ইন্টারঅ্যাকশন করতে সাহায্য করে। এটি ব্রাউজারের উইন্ডো, ডকুমেন্ট, নেভিগেটর এবং অন্যান্য ফিচারগুলিকে এক্সেস করতে ব্যবহৃত হয়।",
            example:
              "উদাহরণ: `window.alert('Hello World!');` — এটি একটি ব্রাউজারের অ্যালার্ট বাক্স দেখাবে।",
          },
          {
            point:
              "BOM ব্যবহার করে আপনি ব্রাউজারের স্ক্রিনের আকার, উইন্ডো ওপেন বা ক্লোজ, এবং অন্যান্য ডেটা পরিচালনা করতে পারেন। এটি ব্রাউজারের ভেতরে ব্যবহৃত সমস্ত অবজেক্ট বা ইউজার ইন্টারফেসের সঙ্গে যোগাযোগের একটি পদ্ধতি।",
            example:
              "উদাহরণ: `window.innerWidth` এবং `window.innerHeight` ব্যবহার করে উইন্ডোর প্রস্থ এবং উচ্চতা পাওয়া যায়।",
          },
        ],
      },
      {
        id: "bom-2",
        question: "How does `window` differ from `document`?",
        points: [
          {
            point:
              "`window` হল গ্লোবাল অবজেক্ট যা ব্রাউজারের পুরো উইন্ডো বা পরিবেশের প্রতিনিধিত্ব করে। এটি ব্রাউজার উইন্ডো, ব্রাউজারের সাইজ, স্ক্রোলিং, ইত্যাদি নিয়ন্ত্রণ করতে ব্যবহৃত হয়।",
            example:
              `উদাহরণ: \`window.alert('This is a window alert!');\` 
— এটি ব্রাউজারের উইন্ডো থেকে একটি অ্যালার্ট দেখাবে।`,
          },
          {
            point:
              "`document` হল ওই উইন্ডোতে লোড করা HTML ডকুমেন্ট। এটি সেই ডকুমেন্টের উপাদান, যেমন ট্যাগ, আইডি, ক্লাস ইত্যাদির সাথে কাজ করতে ব্যবহৃত হয়।",
            example:
              `উদাহরণ: \`document.getElementById('myElement')\` 
— এটি HTML ডকুমেন্টের একটি নির্দিষ্ট উপাদানকে এক্সেস করবে।`,
          },
        ],
      },
      {
        id: "bom-3",
        question:
          "Explain how `localStorage`, `sessionStorage`, and `cookies` work and their differences.",
        points: [
          {
            point:
              "`localStorage` একটি স্টোরেজ যেখানে ডেটা ব্রাউজারের মধ্যে দীর্ঘ সময়ের জন্য সংরক্ষিত থাকে, অর্থাৎ আপনি যদি ব্রাউজার বন্ধও করেন, তাও ডেটা মুছে যাবে না।",
            example:
              "উদাহরণ: `localStorage.setItem('theme', 'dark');` — এটি ডেটাকে `localStorage`-এ সংরক্ষণ করবে।",
          },
          {
            point:
              "`sessionStorage` ডেটা শুধুমাত্র বর্তমান সেশন চলাকালীন সংরক্ষণ করে। ব্রাউজার বন্ধ হয়ে গেলে এটি মুছে যায়।",
            example:
              "উদাহরণ: `sessionStorage.setItem('sessionData', '123');` — এটি সেশন শেষে মুছে যাবে।",
          },
          {
            point:
              "`cookies` হল ছোট আকারের ডেটা যা ক্লায়েন্ট এবং সার্ভারের মধ্যে আদান-প্রদান করতে ব্যবহৃত হয়। এগুলির জন্য একটি এক্সপিরেশন সময় নির্ধারণ করা যায় এবং এটি HTTP রিকোয়েস্টের সাথে পাঠানো হয়।",
            example:
              `উদাহরণ: \`document.cookie = 'username=JohnDoe;
         expires=Wed, 15 Dec 2024 12:00:00 UTC';\`
          
         — এটি একটি কুকি তৈরি করবে।`,
          },
          {
            point:
              "প্রকল্প: `localStorage` ব্যবহার করে ব্যবহারকারীর থিম পছন্দ (যেমন অন্ধকার বা হালকা মোড) সংরক্ষণ এবং পুনরুদ্ধার করা।",
            example:
              "উদাহরণ: `localStorage.getItem('theme');` — এটি থিমের জন্য সংরক্ষিত মান ফেরত দেবে।",
          },
        ],
      },
      {
        id: "bom-4",
        question:
          "What is the purpose of the `navigator` object, and what properties does it have?",
        points: [
          {
            point:
              "`navigator` অবজেক্টটি ব্রাউজারের তথ্য এবং ইউজারের প্ল্যাটফর্মের তথ্য প্রদান করে, যেমন ব্রাউজারের নাম, সংস্করণ, অপারেটিং সিস্টেম, ইত্যাদি।",
            example:
              "উদাহরণ: `navigator.userAgent` — এটি ব্রাউজারের ইউজার এজেন্ট স্ট্রিং ফেরত দেবে।",
          },
          {
            point:
              "`navigator` এর মাধ্যমে আপনি ব্যবহারকারীর অবস্থান, ল্যাঙ্গুয়েজ প্রেফারেন্স, এবং আরও অনেক কিছু জানতে পারেন। এটি অনলাইনে থাকা না থাকার তথ্যও জানায়।",
            example:
              "উদাহরণ: `navigator.onLine` — এটি `true` ফেরত দেবে যদি ব্যবহারকারী অনলাইনে থাকে।",
          },
        ],
      },
      {
        id: "bom-5",
        question:
          "How do `window.open` and `window.close` methods work in JavaScript?",
        points: [
          {
            point:
              "`window.open` ফাংশনটি একটি নতুন ব্রাউজার উইন্ডো বা ট্যাব খুলতে ব্যবহৃত হয়। এটি একটি URL বা HTML পেজ লোড করতে সক্ষম।",
            example:
              "উদাহরণ: `window.open('https://www.example.com', '_blank');` — এটি একটি নতুন ট্যাব খুলবে।",
          },
          {
            point:
              "`window.close` ফাংশনটি বর্তমান উইন্ডো বা ট্যাব বন্ধ করতে ব্যবহৃত হয়। তবে, এটি শুধুমাত্র স্ক্রিপ্ট দ্বারা খুলে থাকা উইন্ডো বা ট্যাব বন্ধ করতে পারে।",
            example:
              "উদাহরণ: `window.close();` — এটি বর্তমানে খোলা উইন্ডো বা ট্যাব বন্ধ করবে।",
          },
        ],
      },
      {
        id: "bom-6",
        question:
          "Explain how to get the viewport width and height of a browser window using JavaScript.",
        points: [
          {
            point:
              "`window.innerWidth` এবং `window.innerHeight` ব্যবহার করে আপনি ব্রাউজারের ভিউপোর্টের প্রস্থ এবং উচ্চতা পেতে পারেন। এগুলি ডিভাইসের স্ক্রীনের ভিউপোর্টের আকার জানায়।",
            example:
              `উদাহরণ: 
\`let width = window.innerWidth; 
let height = window.innerHeight;\` 
— এটি ভিউপোর্টের প্রস্থ এবং উচ্চতা পাবে।`,
          },
          {
            point:
              "প্রকল্প: একটি ফাংশন তৈরি করুন যা প্রতিবার ব্রাউজার রিসাইজ হওয়ার পর উইন্ডোর সাইজ কনসোলে লগ করবে।",
            example:
              `উদাহরণ: 
\`window.onresize = function() { console.log('Width: ' + window.innerWidth + ', Height: ' + window.innerHeight); };\` 
  — এটি ব্রাউজার রিসাইজ হলে সাইজ লগ করবে।`,
          },
        ],
      },
      {
        id: "bom-7",
        question:
          "What is the purpose of the `setTimeout` and `setInterval` functions?",
        points: [
          {
            point:
              "`setTimeout` ফাংশনটি একটি নির্দিষ্ট সময় পরে একবার একটি ফাংশন চালানোর জন্য ব্যবহৃত হয়। এটি সময় বিলম্বিত কার্যকলাপ সম্পাদন করতে ব্যবহৃত হয়।",
            example:
              `উদাহরণ: 
\`setTimeout(function() { alert('Hello after 3 seconds'); }, 3000);\`
 — এটি ৩ সেকেন্ড পর একটি অ্যালার্ট দেখাবে।`,
          },
          {
            point:
              "`setInterval` ফাংশনটি একটি নির্দিষ্ট সময় অন্তর একটি ফাংশন বার বার চালানোর জন্য ব্যবহৃত হয়। এটি নিয়মিত কাজগুলো করতে ব্যবহৃত হয়।",
            example:
              `উদাহরণ: 
\`setInterval(function() { console.log('This will run every 2 seconds'); }, 2000);\` 
— এটি প্রতি ২ সেকেন্ডে একটি বার্তা কনসোলে দেবে।`,
          },
          {
            point:
              "প্রকল্প: `setInterval` ব্যবহার করে একটি ঘড়ি তৈরি করুন যা প্রতি সেকেন্ডে সময় আপডেট করবে।",
            example:
              `উদাহরণ: 
\`setInterval(function() { 
    document.getElementById('clock').innerHTML = new Date().toLocaleTimeString(); }, 1000);\` 
— এটি প্রতিটি সেকেন্ডে সময় আপডেট করবে।`,
          },
        ],
      },
      {
        id: "bom-8",
        question:
          "How can you detect if a user is online or offline using the BOM?",
        points: [
          {
            point:
              "`navigator.onLine` প্রপার্টি ব্যবহার করে আপনি জানতে পারেন ব্যবহারকারী অনলাইনে আছেন কিনা। এটি একটি বুলিয়ান মান প্রদান করে যা `true` হলে ব্যবহারকারী অনলাইনে থাকে এবং `false` হলে অফলাইনে থাকে।",
            example:
              `উদাহরণ: 
\`if (navigator.onLine) { 
      console.log('User is online'); 
} else { 
      console.log('User is offline'); 
}\` 
— এটি অনলাইনে থাকা বা না থাকার স্ট্যাটাস চেক করবে।`,
          },
        ],
      },
    ],
  },
];
