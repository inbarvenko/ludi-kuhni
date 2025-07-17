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
          <div className="block-2-text">
            <p className="block-2-text-padding block-2-text-title">/О нас</p>

            <p className="block-2-text-padding">
              Добро пожаловать в <b>Люди! Кухни</b>
              <br />– семейный бизнес, развивающийся уже
              <br />
              <b>в трех поколениях</b>, с собственным
              <br />
              производством корпусной мебели.
              <br />
              Наша большая команда профессионалов
              <br />
              вкладывает душу в каждую деталь, чтобы
              <br />
              ваша кухня стала идеальным сочетанием
              <br />
              комфорта, стиля и функциональности.
              <br />
              <br />
              Мы изготавливаем как кухни,
              <br />
              так и шкафы-купе и мебель для других
              <br />
              комнат.{" "}
              <b>
                Именно мы поможем
                <br />и подскажем, как оформить дом
                <br /> в стиле вашей мечты.
              </b>
              <br />В нашем большом каталоге можно найти
              <br />
              примеры и вдохновиться перед заказом.
              <br />
              <br />
              Спасибо, что остаетесь с нами.
              <br />
              Мы гордимся тем, что создаем мебель,
              <br />
              которая делает ваш дом уютнее
              <br />и удобнее.
            </p>
          </div>
          <img
            src="/src/shared/constants/images/svg/20years.svg"
            alt="20 лет"
            className="block-2-20years"
          />
          <div className="block-2-video">
            <video
              autoPlay
              muted
              loop
              playsInline
              id="animation-advantage"
              className="block-2-video-clip"
            >
              <source
                src="/src/shared/constants/videos/kuhni1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </HomePageWrapper>
  );
};

export default HomePage;
