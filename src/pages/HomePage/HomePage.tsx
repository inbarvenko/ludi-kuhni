import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import { HomePageWrapper } from "./HomePageWrapper";

import CallIcon from "@mui/icons-material/Call";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Logo from "../../shared/constants/images/svg/logo_1.svg";

import { Button } from "antd";

const HomePage: React.FC = () => {
  const width = useMemo(() => {
    return window.innerWidth;
  }, []);

  return (
    <HomePageWrapper width={width}>
      <Helmet title="Главная страница" />

      <div className="header-1">
        <div className="header-1-item">
          <CallIcon className="icon" />
          <div className="header-1-text">
            +7 (863) 431-47-07, +7 (863) 431-17-07
          </div>
        </div>

        <div className="header-1-item">
          <WatchLaterIcon className="icon" />
          <div className="header-1-text">Пн-Сб 10:00 - 19:00</div>
        </div>

        <div className="header-1-item">
          <LocationOnIcon className="icon" />
          <div className="header-1-text">г. Таганрог, ул. Петровская 15</div>
        </div>
      </div>

      <div className="header-2">
        <img src="/logo_1.svg" alt="Лого" className="logo" />

        <div className="header-2-items">
          <div className="header-2-text">Кухни</div>
          <div className="header-2-text">Шкафы</div>
          <div className="header-2-text">Прихожие</div>
          <div className="header-2-text">Ванные</div>
          <div className="header-2-text">Гостинные</div>
          <div className="header-2-text">Спальни</div>
          <div className="header-2-text">Детские</div>
          <div className="header-2-text">Офисная мебель</div>
        </div>
      </div>

      <div className="content">
        <div className="block-1">
          <div className="block-1-info">
            <div className="block-1-background"></div>

            <div className="block-1-name">
              <img
                src="/src/shared/constants/images/svg/ludi!kuhni.svg"
                alt="Название"
                className="block-1-name-img"
              />

              <div className="block-1-name-text">
                Добро пожаловать в мир уюта и тепла для всей семьи! С любовью и
                профессионализмом создаем кухни, которые вдохновляют и
                объединяют.
              </div>
            </div>

            <div className="block-1-buttons">
              <Button className="block-1-buttons-1">Написать</Button>
              <Button
                className="block-1-buttons-2"
                color="default"
                variant="outlined"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>

        <div className="block-2">
          <div className="block-2-text"></div>
          <img
            src="/src/shared/constants/images/svg/20years.svg"
            alt="20 лет"
            className="block-2-img"
          />
          <div className="block-2-video">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="block-2-video-clip"
            >
              <source
                src="/src/shared/constants/videos/kuhni1.mov"
                type="video/quicktime"
              />
            </video>
          </div>
        </div>
      </div>
    </HomePageWrapper>
  );
};

export default HomePage;
