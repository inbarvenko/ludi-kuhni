import styled from "styled-components";
import { colors } from "../../shared/constants/colors";

export const ContentWrapper = styled.div<{ width: number }>`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 100vw;

  .logo {
    max-width: ${(props) => (props.width > 768 ? "64px" : "45px")};
    /* padding: 0 48px 0 0; */

    :hover {
      cursor: pointer;
    }
  }

  .header {
    &-1 {
      max-width: 100%;
      min-height: 54px;

      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: ${(props) => (props.width > 768 ? "24px" : "18px")};
      padding-left: ${(props) => (props.width > 768 ? "78px" : "24px")};
      padding-right: ${(props) => (props.width > 768 ? "78px" : "24px")};

      background-color: ${colors["light"].light_beige};

      &-item {
        display: flex;
        flex-direction: row;
        gap: ${(props) => (props.width > 768 ? "2px" : "0")};
        align-items: center;
        text-align: center;
      }

      &-text {
        display: ${(props) => (props.width > 768 ? "flex" : "none")};

        font-family: "Montserrat", sans-serif;
        font-size: ${(props) => (props.width > 768 ? "14px" : "12px")};
        color: ${colors["light"].brown};
      }
    }

    &-2 {
      padding: ${(props) => (props.width > 768 ? "0 78px" : "0 24px")};
      max-width: 100%;
      height: ${(props) => (props.width > 768 ? "89px" : "65px")};

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: ${(props) =>
        props.width > 768 ? "flex-start" : "space-between"};

      background-color: ${colors["light"].white};

      &-text {
        color: ${colors["light"].main_blue};
        font-weight: 600;

        &:hover {
          cursor: pointer;
          color: ${colors["light"].accent_green};
        }
      }

      &-items {
        display: ${(props) => (props.width > 768 ? "flex" : "none")};
        flex-direction: row;
        gap: 24px;
        align-items: center;
        text-align: center;

        padding-left: ${(props) => (props.width > 768 ? "78px" : "24px")};
        padding-right: ${(props) => (props.width > 768 ? "78px" : "24px")};
      }
    }
  }
`;
