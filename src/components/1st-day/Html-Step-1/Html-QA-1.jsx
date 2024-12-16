import React from "react";
import { Container } from "../../NeededComponents/common/Container";
import { QuestionTemp } from "../../NeededComponents/common/QuestionTemp";
import { Title } from "../../NeededComponents/common/Title";
import SyntaxHighlighter from "react-syntax-highlighter";
import { BasicStructure } from "./htmlData1-5";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const HtmlQA1 = () => {
  return (
    <Container>
      <QuestionTemp
        questions="1. HTML কী? এটি
          কীভাবে কাজ করে এবং HTML-এর বেসিক সিনট্যাক্স। (What is HTML? Explain its purpose & Basic Syntax Of HTML.)"
      />
      <Title title="HTML কী:" />
      <p>
        HTML (HyperText Markup Language) হলো ওয়েব ডেভেলপমেন্টের একটি বেসিক
        মার্কআপ ল্যাঙ্গুয়েজ। এর মাধ্যমে ওয়েব পেজের স্ট্রাকচার তৈরি করা হয়। HTML
        ব্রাউজারকে নির্দেশ দেয় কিভাবে কন্টেন্ট প্রদর্শন করতে হবে।
        <span className="text-html2">এর আবিষ্কারক হলেন টিম বার্নার্স-লি (Tim Berners-Lee)</span>।<br />
        তিনি 1989 সালে HTML তৈরি করেন, যা তখন ওয়ার্ল্ড ওয়াইড ওয়েব (WWW) প্রকল্পের একটি অংশ ছিল। <br />
      </p>
      
      <p>
        1990: প্রথম ওয়েব ব্রাউজার এবং ওয়েব সার্ভার তৈরি করেন। এই সময়ই তিনি HTML এর প্রাথমিক সংস্করণ তৈরি করেন। HTML এর প্রথম সংস্করণে মাত্র 18টি ট্যাগ ছিল, যা তথ্য প্রদর্শনের জন্য খুবই বেসিক কাজ করতে পারত। 1991: HTML এর প্রথম ডকুমেন্টেশন প্রকাশ করা হয়, যার শিরোনাম ছিল "HTML Tags"। <br /><br />
      </p>
      <Title title="HTML এর উদ্দেশ্য:" />
      <p className="text-html2">স্ট্রাকচার, কন্টেন্ট প্রেজেন্টেশন, ইন্টারঅ্যাকশন</p><br /><br />

      <Title title="HTML-এর বেসিক সিনট্যাক্স:" />
      <p>
        HTML ফাইলের মূল কাঠামো তৈরি হয় কিছু নির্দিষ্ট ট্যাগ দিয়ে।<br /><br />

        &lt;!DOCTYPE html&gt;, HTML5 ডকুমেন্ট ডিক্লারেশন।<br />
        &lt;html&gt; ট্যাগ: HTML ডকুমেন্টের মূল কন্টেইনার।<br />
        &lt;head&gt; ট্যাগ: মেটাডেটা এবং শিরোনামের তথ্য সংরক্ষণ করে।<br />
        &lt;body&gt; ট্যাগ: যা ব্রাউজারে দৃশ্যমান হয়।
      </p>
      <SyntaxHighlighter language="html" style={dracula}>
        {BasicStructure}
      </SyntaxHighlighter>

    </Container>
  );
};
