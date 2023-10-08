import sass from "../FAQ.module.scss";
import { Question } from "../../../d";
import { FC, useState } from "react";

import { AiOutlineDown } from 'react-icons/ai';

type QuestionProps = {
  question: Question,
}

export const QuestionItem: FC<QuestionProps> = ({ question }) => {
  const [isOpenAnswer, setIsOpenAnswer] = useState<boolean>(false);

  return (
    <li className={sass.questionItem}>
      <div className={sass.question}>
        <p className={sass.questionText}>{question.question}</p>
        <div className={sass.questionIcon}>
          <AiOutlineDown size={25} />
        </div>
      </div>
    </li>
  )
};
