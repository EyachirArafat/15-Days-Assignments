import SyntaxHighlighter from "react-syntax-highlighter";
import { Container } from "../NeededComponents/common/Container";
import { QuestionTemp } from "../NeededComponents/common/QuestionTemp";
import { StepCount } from "../NeededComponents/common/StepCount";
import { JSDataQA } from "./jsData";
import { irBlack } from "react-syntax-highlighter/dist/esm/styles/hljs";


export const JavaScriptQAnswers = () => {
  return (
    <Container className="px-2 bg-[#112131] text-white">
      {JSDataQA.map(({step, title, questions}, index) => (
        <div key={index}>
          <StepCount step={step} titleText={title}/>
          {questions.map((qa) => (
            <QuestionTemp key={qa.id} questions={qa.question}>

              <div>
                <p><strong>Explanation:</strong> {qa.details.explanation}</p>
                <p><strong>Example:</strong></p>
                <SyntaxHighlighter language="javascript" style={irBlack}>

                {qa.details.example}
                </SyntaxHighlighter>
                <p><strong>Bangla Explanation:</strong> {qa.details.bangla}</p>
              </div>
            
            </QuestionTemp>
          ))}
        </div>
      ))}
      <p className="text-center border mt-6 bg-zinc-800 font-bold">From Chatgpt and my sometime analysis with chatgpt for it</p>
    </Container>
  );
};