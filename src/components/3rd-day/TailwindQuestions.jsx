import { Container } from "../NeededComponents/common/Container"
import { Outlet } from "react-router-dom"
import { StepCount } from "../NeededComponents/common/StepCount"
import { Title } from "../NeededComponents/common/Title"
import { QuestionTemp } from "../NeededComponents/common/QuestionTemp"

import { dracula, nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { TailwindQA } from "./tailwindData"
import SyntaxHighlighter from "react-syntax-highlighter"


export const TailwindQAnswers =()=>{
  return(
    <Container className="px-2 bg-[#112131] text-white">
      <div className="pt-12 flex flex-col">
        <h1 className="lg:text-5xl md:text-3xl md:w-[70%] text-2xl mx-auto text-center border-l border-r md:mb-20 mb-10"><span className="text-html1">TailwindCSS</span> All Important Questions <span className="text-html2">Answers</span> To Crack The Interviews</h1>

        {
          TailwindQA.map(({step, title, qa, index})=>(
            <div key={index}>
              <StepCount step={step} titleText={title}/>

              {qa.map(({id, question, points})=>(
                <div key={id}>
                  <QuestionTemp questions={question}>
                    <ul className="list-disc">
                      {points.map((list, idx) => (
                        <li key={idx} className="pb-2">
                          <strong className="text-html2">{list.pName && `${list.pName}`}</strong>
                          {list.point} <br />
                          {list.example && (<SyntaxHighlighter language="jsx" style={nightOwl}>
                            {list.example}
                            </SyntaxHighlighter>)}
                        </li>
                      ))}
                    </ul>
                  </QuestionTemp>
                </div>
              ))}
            </div>
          ))
        }
      </div>
      <Outlet/>
    </Container>
  )
}