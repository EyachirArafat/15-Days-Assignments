import { Container } from "../NeededComponents/common/Container";
import { Outlet } from "react-router-dom";
import { StepCount } from "../NeededComponents/common/StepCount";

import { QuestionTemp } from "../NeededComponents/common/QuestionTemp";

import {
  dracula,
  nightOwl,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

import SyntaxHighlighter from "react-syntax-highlighter";
import { ES6Data } from "./ES6Data";

export const ES6 = () => {
  return (
    <Container className="px-2 bg-[#112131] text-white">
      <div className="pt-12 flex flex-col">
        <h1 className="lg:text-5xl md:text-3xl md:w-[70%] text-2xl mx-auto text-center border-l border-r md:mb-20 mb-10">
          <span className="text-html1">Advance JavaScript</span> Important
          Questions <span className="text-html2">Answers</span> To Crack The
          Interviews
        </h1>

        {ES6Data.map(({ step, title, qa, index }) => (
          <div key={index}>
            <StepCount step={step} titleText={title} />

            {qa.map(({ id, question, points, project }) => (
              <div key={id}>
                <QuestionTemp questions={question}>
                  <ul className="list-disc">
                    {points.map((list, idx) => (
                      <li key={idx} className="pb-2">
                        <strong className="text-html2">
                          {list.pName && `${list.pName}`}
                        </strong>
                        {list.point} <br />
                        {list.example && (
                          <SyntaxHighlighter
                            language="javascript"
                            style={nightOwl}
                          >
                            {list.example}
                          </SyntaxHighlighter>
                        )}
                      </li>
                    ))}
                    {project && (
                      <li>
                        <strong>Project:</strong>
                        <ul>
                          {project.map(({ description, example1 }, idx) => (
                            <li key={idx}>
                              <p>{description}</p>
                              {example1 && (
                                <SyntaxHighlighter
                                  language="javascript"
                                  style={nightOwl}
                                >
                                  {example1}
                                </SyntaxHighlighter>
                              )}
                            </li>
                          ))}
                        </ul>
                      </li>
                    )}
                  </ul>
                </QuestionTemp>
              </div>
            ))}
          </div>
        ))}
        <p className="text-center mt-4 font-bold text-green-500 border w-1/2 mx-auto">Update Coming soon</p>
      </div>
      <Outlet />
    </Container>
  );
};
