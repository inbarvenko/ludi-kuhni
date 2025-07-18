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
    padding: 0 48px 0 0;
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
    gap: ${(props) => (props.width > 768 ? "48px" : "36px")};
  }

  .burger {
    width: 24px;
  }

  .block-1 {
    min-height: 350px;
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
      top: ${(props) => (props.width > 768 ? "40px" : "30px")};
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
        font-size: ${(props) => (props.width > 768 ? "16px" : "14px")};
        color: ${colors["light"].brown};
      }
    }
  }

  .block-name {
    font-size: ${(props) => (props.width > 768 ? "24px" : "18px")};
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    color: ${colors["light"].brown};
  }

  .block-2 {
    width: 100%;
    overflow: ${(props) => props.width > 768 && "hidden"};
    height: ${(props) => (props.width > 768 ? "713px" : "auto")};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &-text {
      padding: 24px;
      position: ${(props) => (props.width > 768 ? "absolute" : "relative")};
      left: 0;
      top: 0;
      height: 100%;
      width: ${(props) => (props.width > 768 ? "40%" : "90%")};

      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      gap: 24px;

      z-index: 1;
      background-image: url("/bubble_2.svg");
      background-repeat: ${(props) => (props.width > 768 ? "round" : "repeat")};
      /* background-size: cover; */
      background-size: ${(props) =>
        props.width > 768 ? "auto 100%" : "cover"};

      color: ${colors["light"].brown};
      font-family: "Montserrat", sans-serif;
      font-size: ${(props) => (props.width > 768 ? "18px" : "16px")};

      &-more {
        display: flex;
        width: 94%;
        justify-content: end;
        font-size: 12px;
        font-weight: 600;
        font-style: italic;
      }

      &-padding {
        padding: ${(props) => (props.width > 768 ? "0 54px " : "0 ")};
      }

      &-main {
        font-size: ${(props) => (props.width > 768 ? "18px" : "14px")};
      }
    }

    &-20years {
      width: 21vw;

      &-line {
        width: 90%;
        padding: 12px;
      }
    }

    &-video {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 40%;

      z-index: 1;

      &-clip {
        position: absolute;
        width: 100%;
        height: 100%;
        right: 0;
        top: 0;

        object-fit: cover;
        clip-path: url("/bubble_2_video.svg#blob-mask");
      }
    }
  }

  .block-3 {
    padding: ${(props) => (props.width > 768 ? "0 78px" : "0 24px")};
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-furniture {
      padding-top: ${(props) => (props.width > 768 ? "48px" : "24px")};

      display: flex;
      flex-direction: row;
      gap: 24px;

      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }

  .marquee-container {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }

  .marquee-content {
    display: inline-flex;
    animation: marquee 20s linear infinite; /* Длительность анимации 20 секунд */
  }

  .marquee-content img,
  .marquee-content svg {
    flex-shrink: 0;
    margin-right: 2rem; /* Отступ между логотипами */
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  /* Пауза анимации при наведении */
  .marquee-container:hover .marquee-content {
    animation-play-state: paused;
  }

  .block-4 {
    padding: ${(props) => (props.width > 768 ? "0 78px" : "0 24px")};
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-text {
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      color: ${colors["light"].main_blue};

      display: flex;
      flex-direction: ${(props) => (props.width > 768 ? "row" : "column")};
      justify-content: space-between;
      gap: 18px;

      &-wrapper {
        width: ${(props) => (props.width > 768 ? "47%" : "100%")};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* gap: 96px; */
      }

      &-main {
        font-size: ${(props) => (props.width > 768 ? "56px" : "24px")};
      }

      &-span {
        color: ${colors["light"].accent_green};
      }

      &-sub {
        font-size: 20px;
      }
    }

    &-details {
      width: ${(props) => (props.width > 768 ? "47%" : "100%")};
      display: flex;
      flex-direction: column;

      gap: ${(props) => (props.width > 768 ? "24px" : "12px")};

      flex-wrap: wrap;
      justify-content: center;

      &-item {
        display: flex;
        flex-direction: row;
        gap: ${(props) => (props.width > 768 ? "60px" : "24px")};
        align-items: flex-start;
      }

      &-number {
        color: ${colors["light"].accent_green};
        font-weight: 500;
        font-size: ${(props) => (props.width > 768 ? "24px" : "18px")};
      }

      &-text {
        display: flex;
        flex-direction: column;

        gap: ${(props) => (props.width > 768 ? "10px" : "6px")};

        &-name {
          font-weight: 500;
          font-size: ${(props) => (props.width > 768 ? "24px" : "16px")};
        }

        &-desc {
          font-weight: 400;
          font-size: ${(props) => (props.width > 768 ? "16px" : "14px")};
        }
      }
    }
  }
`;
