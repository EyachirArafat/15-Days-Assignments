import { Outlet } from "react-router-dom"
import { Container } from "../NeededComponents/common/Container"
import { HtmlStep1 } from "./Html-Step-1/HtmlStep1"
import { HtmlStep2 } from "./Html-Step-2/HtmlStep2"
import { HtmlStep3 } from "./Html-Step-3/HtmlStep3"

export const AllAboutHTML =()=>{
  return(
    <Container>
      <div className="pt-12 flex flex-col">
        <h1 className="lg:text-5xl md:text-3xl md:w-[70%] text-2xl mx-auto text-center border-l border-r md:mb-20 mb-10"><span className="text-secondary">HTML</span> All Important Questions <span className="text-primary">Answers</span> To Crack The Interviews</h1>
        <HtmlStep1/>
        <HtmlStep2/>
        <HtmlStep3/>
      </div>
      <Outlet/>
    </Container>
  )
}