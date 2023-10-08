import sass from "../FAQ.module.scss";
import { useReduxState } from "../../../hooks";
import { FC } from "react";
import { QuestionItem } from "./QuestionItem";

export const QuestionAnswerBoard: FC = () => {
  const { questions } = useReduxState();

  return (
    <ul className={sass.questionList}>
      {
        questions.questions.map((question) => <QuestionItem key={question.id} question={question} />)
      }
    </ul>
  )
}
