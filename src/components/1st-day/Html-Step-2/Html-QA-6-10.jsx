import React from "react";
import { Container } from "../../NeededComponents/common/Container";
import { HQA610 } from "./htmlData6-10";
import { QuestionTemp } from "../../NeededComponents/common/QuestionTemp";
import { Title } from "../../NeededComponents/common/Title";
import { list } from "postcss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const HtmlQA610 = () => {
  return (
    <Container>
      {HQA610.map((items, index) => (
        <div key={index}>
          <QuestionTemp questions={items.q}>
            <ul className="list-disc">
              {items.points.map((list, idx) => (
                <li key={idx} className="pb-2">
                  <strong className="text-html2">{list.pName && `${list.pName}`}</strong>
                  {list.point} <br />
                  {list.example && (<SyntaxHighlighter language="html" style={dracula}>
                    {list.example}
                    </SyntaxHighlighter>)}
                </li>
              ))}
            </ul>
          </QuestionTemp>
        </div>
      ))}
    </Container>
  );
};


