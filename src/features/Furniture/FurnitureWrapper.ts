import styled from "styled-components";
import { colors } from "../../shared/constants/colors";

export const FurnitureWrapper = styled.div<{ width: number }>`
  display: flex;
  position: relative;

  width: ${(props) => (props.width > 768 ? "303px" : "40vw")};
  height: ${(props) => (props.width > 768 ? "303px" : "40vw")};

  .img {
  }

  .title {
    &-text {
      color: ${colors["light"].main_blue};
      font-size: ${(props) => (props.width > 768 ? "24px" : "14px")};
      font-weight: 600;

      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2; /* Над размытым блоком */
      padding: 20px;
      text-align: center;
    }

    &-background {
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
      height: ${(props) => (props.width > 768 ? "74px" : "40px")};
      background-color: ${colors["light"].white};
      filter: ${(props) => (props.width > 768 ? "blur(20px)" : "blur(10px)")};
    }
  }
`;
