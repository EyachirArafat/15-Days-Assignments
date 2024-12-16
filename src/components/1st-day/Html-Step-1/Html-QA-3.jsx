import React from "react";
import { Container } from "../../NeededComponents/common/Container";
import { QuestionTemp } from "../../NeededComponents/common/QuestionTemp";
import { Title } from "../../NeededComponents/common/Title";
import SyntaxHighlighter from "react-syntax-highlighter";
import { BasicStructure, HQA3 } from "./htmlData1-5";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const HtmlQA3 = () => {
  return (
    <Container>
      <QuestionTemp questions="3. What is the difference between <head>, <body>, and <html> tags? & the role of the <!DOCTYPE html> declaration?" />
      {HQA3.map((items, index) => (
        <p key={index}>
          <Title title={items.title} />
          <ul className="list-disc">
            <li>{items.points}</li>
          </ul>

          {items.example && (
            <SyntaxHighlighter language="html" style={dracula}>
            {items.example}
          </SyntaxHighlighter>
          )}
        </p>
      ))}
    </Container>
  );
};
