import styled from "styled-components";
import { colors } from "../../shared/constants/colors";
import ill from "../../shared/constants/images/svg/main_ill.svg";

export const HomePageWrapper = styled.div<{ width: number }>`
  height: 100%;
  display: flex;
  flex-direction: column;

  background-color: ${colors["light"].white};

  .icon {
    color: ${colors["light"].brown};
    max-width: ${(props) => (props.width > 768 ? "20px" : "16px")};
  }

  .logo {
    max-width: ${(props) => (props.width > 768 ? "64px" : "45px")};
    padding-right: 48px;
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
      max-width: 100%;
      height: ${(props) => (props.width > 768 ? "89px" : "65px")};

      display: flex;
      flex-direction: row;
      align-items: center;

      background-color: ${colors["light"].white};

      &-text {
        color: ${colors["light"].main_blue};
        font-weight: 600;
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

  .content {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  .block-1 {
    background-size: cover;
    background-position: center; /* Это свойство позволяет выбрать, какую часть изображения оставить видимой */
    background-repeat: no-repeat; /* Отключаем повторение фона */
    z-index: 1;
    background-image: url(${ill});

    &-buttons {
      margin-top: ${(props) => (props.width > 768 ? "48px" : "18px")};
      display: flex;
      flex-direction: row;
      gap: 24px;
      min-height: ${(props) => (props.width > 768 ? "48px" : "28px")};
      width: ${(props) => (props.width > 768 ? "521px" : "247px")};
      z-index: 2;

      &-1 {
        width: 100%;
        height: 100%;

        font-size: ${(props) => (props.width > 768 ? "16px" : "14px")};
        font-weight: 500;
        font-family: "Montserrat", sans-serif;

        background-color: ${colors["light"].accent_green};
        color: ${colors["light"].white};
        border-radius: 8px;
      }

      &-2 {
        display: ${(props) => (props.width > 768 ? "flex" : "none")};

        width: 303px;
        height: 100%;

        border-radius: 8px;
        color: ${colors["light"].grey};
        background: none;
        border: 1px solid ${colors["light"].grey};

        font-size: ${(props) => (props.width > 768 ? "16px" : "14px")};
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
      }
    }

    &-info {
      position: relative;
      width: ${(props) => (props.width > 768 ? "687px" : "300px")};
      left: ${(props) => (props.width > 768 ? "20px" : "10px")};
      top: 40px;
      height: ${(props) => (props.width > 768 ? "600px" : "300px")};

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &-background {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: ${colors["light"].white};
      filter: ${(props) => (props.width > 768 ? "blur(70px)" : "blur(30px)")};
    }

    &-name {
      width: ${(props) => (props.width > 768 ? "521px" : "247px")};
      z-index: 2;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: ${(props) => (props.width > 768 ? "24px" : "12px")};

      &-img {
        width: 100%;
      }

      &-text {
        width: 100%;
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        color: ${colors["light"].brown};
      }
    }
  }

  .block-2 {
    width: 100%;
    height: ${(props) => (props.width > 768 ? "713px" : "300px")};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &-text {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 40%;

      z-index: 1;
      background-image: url("/src/shared/constants/images/svg/bubble_2.svg");
      background-repeat: round;
    }

    &-20years {
      width: 301px;
    }

    &-video {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 40%;

      z-index: 1;
      /* object-fit: cover;
      clip-path: url("/src/shared/constants/images/svg/bubble_2_video.svg"); */
      /* background-image: url("/src/shared/constants/images/svg/bubble_2_video.svg"); */
      /* background-repeat: round; */

      &-clip {
      }
    }
  }
`;
