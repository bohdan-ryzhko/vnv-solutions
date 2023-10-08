import sass from "./FAQ.module.scss";
import { Container, Title } from "../../components";
import { FC } from "react";
import { QuestionAnswerBoard } from "./components";

export const FAQ: FC = () => {
  return (
    <section className={sass.sectionFaq}>
      <Container>
        <div className={sass.faqSection}>
          <Title title="FAQ" />
          <QuestionAnswerBoard />
        </div>
      </Container>
    </section>
  )
}
