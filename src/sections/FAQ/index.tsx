import { Container } from "../../components";
import sass from "./FAQ.module.scss";
import { FC } from "react";
import { QuestionAnswerBoard } from "./components";

export const FAQ: FC = () => {
  return (
    <section className={sass.sectionFaq}>
      <Container>
        <div className={sass.faqSection}>
          <QuestionAnswerBoard />
        </div>
      </Container>
    </section>
  )
}
