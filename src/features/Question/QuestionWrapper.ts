import styled from "styled-components";
import { colors } from "../../shared/constants/colors";

const QuestionWrapper = styled.div<{ width: number; active: number }>`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: ${(props) => (props.active && props.width > 768 ? "10px" : "6px")};

  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .question {
    cursor: pointer;

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: ${(props) => (props.width > 768 ? "16px" : "14px")};
    color: ${colors["light"].main_blue};
    padding-right: 12px;
  }

  .answer {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: ${(props) => (props.width > 768 ? "16px" : "14px")};
    color: ${colors["light"].grey};

    overflow: hidden;
    transition: all 0.3s ease-in-out;
    padding-bottom: 10px;
  }

  .answer.max-h-0 {
    max-height: 0;
    opacity: 0;
    padding-bottom: 0;
  }

  .answer.max-h-96 {
    max-height: 100%;
    opacity: 1;
  }

  .close-button {
    cursor: pointer;
    padding: 2px;
    transition: transform 0.3s ease-in-out;

    border-radius: 100px;
    background-color: ${colors["light"].accent_green};
    color: ${colors["light"].white};
    height: 26px;
  }

  .close-button.active {
    transform: rotate(90deg);
    background-color: #47771b;
  }

  .close-button:hover,
  .close-button-active:hover {
    background-color: #28460cff;
  }
`;

export default QuestionWrapper;
