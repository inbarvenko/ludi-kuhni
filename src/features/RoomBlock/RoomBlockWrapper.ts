import styled from "styled-components";
import { colors } from "../../shared/constants/colors";

export const RoomBlockWrapper = styled.div<{ width: number }>`
  display: flex;
  position: relative;

  width: ${(props) =>
    props.width <= 360 ? "100%" : props.width > 768 ? "303px" : "40vw"};
  height: ${(props) =>
    props.width <= 360 ? "100%" : props.width > 768 ? "303px" : "40vw"};

  transform-origin: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    cursor: pointer;

    .hov {
      opacity: 1;
    }
  }

  .hov {
    opacity: 0;
  }

  .block {
    width: 100%;
    margin: ${(props) => props.width > 768 && "10px"};

    z-index: 3;
    border-radius: ${(props) => (props.width > 768 ? "30px" : "20px")};
    overflow: hidden;

    img {
      width: 100%;
    }
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
      padding: ${(props) => (props.width > 768 ? "20px" : "10px")};
      text-align: center;
    }

    &-background {
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
      height: ${(props) => (props.width > 768 ? "74px" : "40px")};
      background-color: ${colors["light"].white};
      filter: ${(props) => (props.width > 768 ? "blur(20px)" : "blur(14px)")};
    }
  }
`;
