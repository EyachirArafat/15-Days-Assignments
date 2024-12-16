
import { StepCount } from "../../NeededComponents/common/StepCount";
import { Container } from "../../NeededComponents/common/Container";
import { HtmlQA1 } from "./Html-QA-1";
import { HtmlQA2 } from "./Html-QA-2";
import { HtmlQA3 } from "./Html-QA-3";
import { HtmlQA45 } from "./Html-QA-4-5";


export const HtmlStep1 = () => {
  return (
    <Container>
      <StepCount step="One" titleText="Basic HTML"/>
      <HtmlQA1/>
      <HtmlQA2/>
      <HtmlQA3/>
      <HtmlQA45/>
    </Container>
  );
};
