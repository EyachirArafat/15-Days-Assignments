import React from "react";
import { Container } from "../../NeededComponents/common/Container";
import { QuestionTemp } from "../../NeededComponents/common/QuestionTemp";
import { Title } from "../../NeededComponents/common/Title";
import SyntaxHighlighter from "react-syntax-highlighter";
import { HtmlTag } from "../data";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const HtmlQA2 = () => {
  return (
    <Container className="py-4">
      <QuestionTemp
        questions="2. What are HTML tags? How are they structured? Give Us 5 Tags As A Example."
      />
      <Title title="HTML ট্যাগ কী? এগুলো কীভাবে গঠিত হয়?" />
      <p>
        HTML ট্যাগ হলো মার্কআপ ল্যাঙ্গুয়েজের মূল উপাদান। এটি ব্রাউজারকে জানায় কিভাবে কন্টেন্ট সাজাতে হবে।<br />
        ওপেনিং ট্যাগ: &lt;tagname&gt;<br />
        ক্লোজিং ট্যাগ: &lt;/tagname&gt;<br />
        ট্যাগের মধ্যে কন্টেন্ট: ট্যাগের মধ্যে থাকা টেক্সট বা অন্যান্য উপাদান।<br />
        অ্যাট্রিবিউট: ট্যাগের বৈশিষ্ট্য বা প্রোপার্টি সেট করতে ব্যবহৃত হয়।
      </p>
     
      <SyntaxHighlighter language="html" style={darcula}>
        {HtmlTag}
      </SyntaxHighlighter>
      <br />

      <Title title="5টি ট্যাগের উদাহরণ" />

      &lt;h1&gt;
      &lt;p&gt;
      &lt;a&gt;
      &lt;img&gt;
      &lt;table&gt;

      <br />
      
    </Container>
  );
};
