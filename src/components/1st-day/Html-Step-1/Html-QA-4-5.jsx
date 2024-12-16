import React from "react";
import { Container } from "../../NeededComponents/common/Container";
import { QuestionTemp } from "../../NeededComponents/common/QuestionTemp";
import { Title } from "../../NeededComponents/common/Title";
import SyntaxHighlighter from "react-syntax-highlighter";
import { BasicStructure, HQA45 } from "../data";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const HtmlQA45 = () => {
  return (
    <Container>
      {HQA45.map((items, index) => (
        <p key={index}>
          <QuestionTemp questions={items.q} />
          <Title title={items.title} />
          {items.points.map((point)=>(
            <ul className="list-disc">
              <li>{point}</li>
            </ul>
          ))}

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
