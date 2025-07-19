import styled, { css } from "styled-components";

const FaqBlockWrapper = styled.div<{ width: number }>`
  width: 100%;

  padding: ${(props) => (props.width > 768 ? "0 78px" : "24px 24px 0 24px")};

  display: flex;
  flex-direction: column;

  gap: ${(props) => (props.width > 768 ? "10px" : "6px")};

  ${(props) =>
    props.width <= 768 &&
    css`
      background-image: url("/faq_back.svg");
      background-size: cover;
      background-position: top;
      background-repeat: no-repeat;
    `}

  .divider {
    width: 100%;
    background-color: #b8d89c;
    margin: 0;
  }
`;

export default FaqBlockWrapper;
