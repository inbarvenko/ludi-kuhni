import React, { useEffect } from "react";
import FaqBlockWrapper from "./FaqBlockWrapper";
import type { QuestionType } from "../../features/Question/types";
import Question from "../../features/Question/Question";
import { Divider } from "antd";
import { getFaq } from "./api/getFaq";

type Props = {
  width: number;
  // questions: QuestionType[];
};

const FaqBlock: React.FC<Props> = ({ width }: Props) => {
  const [questions, setQuestions] = React.useState<QuestionType[]>([]);

  useEffect(() => {
    const handleQuestions = async () => {
      await getFaq().then((res) => {
        setQuestions(res);
      });
    };

    handleQuestions();
  }, []);

  return (
    <FaqBlockWrapper width={width}>
      {questions.map((item, index) => (
        <div key={index}>
          <Question width={width} key={index} question={item} />

          {index + 1 < questions.length && <Divider className="divider" />}
        </div>
      ))}
    </FaqBlockWrapper>
  );
};

export default FaqBlock;
