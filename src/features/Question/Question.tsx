import React from "react";
import QuestionWrapper from "./QuestionWrapper";
import type { QuestionType } from "./types";
import { Add, Close } from "@mui/icons-material";

type Props = {
  width: number;
  question: QuestionType;
};

const Question: React.FC<Props> = ({ width, question }: Props) => {
  const [active, setActive] = React.useState(false);

  const toggleActive = () => setActive((props) => !props);

  return (
    <QuestionWrapper active={active ? 1 : 0} width={width}>
      <div className="wrapper" onClick={toggleActive}>
        <div className="question">{question.question}</div>

        <div className={active ? "close-button active" : "close-button"}>
          {active ? <Close /> : <Add />}
        </div>
      </div>

      <div className={`${active ? "max-h-96" : "max-h-0"} answer`}>
        {question.answer}
      </div>
    </QuestionWrapper>
  );
};

export default Question;
