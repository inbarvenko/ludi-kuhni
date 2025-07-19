import styled from "styled-components";
import { colors } from "../../constants/colors";

const DoubleButtonWrapper = styled.div<{ width: number }>`
  width: 100%;
  height: ${({ width }) => (width > 768 ? "84px" : "42px")};
  display: flex;
  flex-direction: row;

  .button {
    height: 100%;
    background-color: ${colors["light"].accent_green};
    color: ${colors["light"].white};
    border-radius: ${({ width }) => (width > 768 ? "20px" : "8px")};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .one {
    width: 80%;

    font-size: ${({ width }) => (width > 768 ? "28px" : "14px")};
    font-weight: 500;
  }

  .two {
    width: 20%;
  }

  .icon2 {
    font-size: ${({ width }) => (width > 768 ? "54px" : "28px")};
  }
`;

export default DoubleButtonWrapper;
