import styled from "styled-components";
import { colors } from "../../shared/constants/colors";
import ill from "../../shared/constants/images/svg/main_1.png";

export const HomePageWrapper = styled.div<{ width: number }>`
  height: 100%;
  display: flex;
  flex-direction: column;

  background-color: ${colors["light"].white};

  button:hover {
    border-color: ${colors["light"].accent_green};
  }

  .icon {
    color: ${colors["light"].brown};
    max-width: ${(props) => (props.width > 768 ? "20px" : "16px")};
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
    height: 100%;
    min-height: ${(props) => (props.width > 768 ? "80vh" : "60vh")};
    overflow: hidden;
    background-size: ${(props) =>
      props.width > 768
        ? "100% auto"
        : "220% auto"}; /* Растягивает по ширине, сохраняет пропорции по высоте */
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
    background-image: url(${ill});

    display: flex;
    align-items: center;

    &-buttons {
      margin-top: ${(props) => (props.width > 768 ? "48px" : "18px")};
      display: flex;
      flex-direction: row;
      gap: 24px;
      min-height: ${(props) => (props.width > 768 ? "56px" : "28px")};
      width: ${(props) => (props.width > 768 ? "521px" : "247px")};
      z-index: 2;

      span {
        font-size: 18px;
      }

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

    padding-bottom: 20px;
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
      width: ${(props) => (props.width > 768 ? "40%" : "100%")};

      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      gap: 24px;

      z-index: 1;
      background-image: url("/bubble_2.svg");
      background-repeat: ${(props) =>
        props.width > 768 ? "no-repeat" : "repeat"};
      /* background-size: cover; */
      background-size: ${(props) =>
        props.width > 768 ? "100% auto" : "cover"};

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
      width: 20vw;
      max-width: 350px;

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

        // Inline SVG mask с правильным позиционированием
        mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 553 725"><path d="M553 725H138.548C119.596 725 100.112 722.254 84.4177 711.632C-81.4099 599.398 119.084 152.414 1.14828 13.7515C-21.2568 -12.591 288.52 7.84714 553 3.36542C553 234.03 553 725 553 725Z" fill="black"/></svg>');

        // Ключевые настройки:
        mask-repeat: no-repeat;
        mask-position: right center; // Выравнивание по правому краю
        mask-size: contain; // или 100% 100% для растяжения

        // Для WebKit браузеров
        -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 553 725"><path d="M553 725H138.548C119.596 725 100.112 722.254 84.4177 711.632C-81.4099 599.398 119.084 152.414 1.14828 13.7515C-21.2568 -12.591 288.52 7.84714 553 3.36542C553 234.03 553 725 553 725Z" fill="black"/></svg>');
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: right center;
        -webkit-mask-size: contain;
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
    animation: marquee 40s linear infinite; /* Длительность анимации 20 секунд */
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
        font-size: ${(props) =>
          props.width > 768 ? (props.width > 1280 ? "56px" : "42px") : "24px"};
      }

      span {
        color: ${colors["light"].accent_green};
        font-size: ${(props) =>
          props.width > 768 ? (props.width > 1280 ? "56px" : "42px") : "24px"};
        font-weight: 600;
      }

      &-sub {
        font-size: 20px;
        font-weight: 400;
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

  .padding {
    padding: ${(props) => (props.width > 768 ? "0 78px" : "0 24px")};
  }

  .block-5 {
    display: flex;
    flex-direction: column;
    gap: ${(props) => (props.width > 768 ? "24px" : "0")};

    &-img {
      width: 40%;
    }

    &-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  .block-6 {
    padding: ${(props) => (props.width > 768 ? "0 78px" : "0 24px")};

    &-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      z-index: 10;
    }

    &-map_wrapper {
      position: relative;
    }

    &-map {
      width: ${(props) => props.width > 768 && "560px"};
      height: 800px;
      overflow: hidden;
      position: relative;
      z-index: 100;

      &-blob-1 {
        position: absolute;
        bottom: -15px;
        right: -120px;
        height: 40%;
      }

      &-blob-2 {
        position: absolute;
        top: -15px;
        left: -120px;
        height: 45%;
        opacity: 0.7;
      }

      &-iframe {
        width: ${(props) => (props.width > 768 ? "100%" : " 90vw")};

        height: 100%;
        border: 1px solid #e6e6e6;
        border-radius: 8px;
        box-sizing: border-box;
      }

      &-link {
        box-sizing: border-box;
        text-decoration: none;
        color: #b3b3b3;
        font-size: 10px;
        font-family: YS Text, sans-serif;
        padding: 0 20px;
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
        left: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        max-height: 14px;
        white-space: nowrap;
        padding: 0 16px;
        box-sizing: border-box;
      }
    }

    &-text_wrapper {
      position: absolute;
      /* top: 50%; */
      right: -450px;
      /* transform: translateY(-50%); */
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &-text {
      padding: 24px;
      font-size: 28px;
      font-weight: 400;
      font-family: "Montserrat", sans-serif;
      color: ${colors["light"].main_blue};

      position: relative;
      z-index: 1;

      &-blob {
        width: 90px;
        position: absolute;
        top: -10px;
        right: -30px;
        z-index: -1;
      }

      &-arrow {
        width: 40%;
        position: absolute;
        bottom: -100px;
        left: 24px;
        z-index: -1;
      }
    }

    .map-block {
      display: flex;
      flex-direction: column;

      &-mobile {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        gap: 20px;
      }
    }
  }

  .footer {
    height: 150px;
    background-color: ${colors["light"].main_blue};
    margin-top: 20px;
  }
`;
