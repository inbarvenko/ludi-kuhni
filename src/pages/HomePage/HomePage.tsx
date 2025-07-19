import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import { HomePageWrapper } from "./HomePageWrapper";

import CallIcon from "@mui/icons-material/Call";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { Button } from "antd";
import FurnitureBlock from "../../widgets/FurnitureBlock/FurnitureBlock";
import { details } from "./mock/home.data";
import DoubleButton from "../../shared/ui/DoubleButton/DoubleButton";
import FaqBlock from "../../widgets/FaqBlock/FaqBlock";

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

        {width > 768 ? (
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
        ) : (
          <img
            src="/src/shared/constants/images/svg/burger.svg"
            className="burger"
          />
        )}
      </div>

      <div className="content">
        <div className="block-1">
          <div className="block-1-info">
            <div className="block-1-background"></div>

            <div className="block-1-name">
              <img
                src="/ludi!kuhni.svg"
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
            <p className="block-2-text-padding block-name">/О нас</p>

            <p className="block-2-text-padding block-2-text-main">
              Добро пожаловать в <b>Люди! Кухни</b>
              <br />– семейный бизнес, развивающийся уже
              <br />
              <b> в трех поколениях</b>, с собственным производством корпусной
              мебели. Наша большая команда профессионалов вкладывает душу в
              каждую деталь, чтобы ваша кухня стала идеальным сочетанием
              комфорта, стиля и функциональности.
              {width > 768 && (
                <>
                  <br />
                  <br />
                  Мы изготавливаем как кухни,
                  {/* <br /> */}
                  так и шкафы-купе и мебель для других
                  {/* <br /> */}
                  комнат.
                  <b>
                    Именно мы поможем и подскажем, как оформить дом в стиле
                    вашей мечты.
                  </b>
                  В нашем большом каталоге можно найти
                  {/* <br /> */}
                  примеры и вдохновиться перед заказом.
                  <br />
                  <br />
                  Спасибо, что остаетесь с нами.
                  {/* <br /> */}
                  Мы гордимся тем, что создаем мебель,
                  {/* <br /> */}
                  которая делает ваш дом уютнее и удобнее.
                </>
              )}
            </p>

            {width < 768 && <p className="block-2-text-more">Подробнее →</p>}
          </div>

          {width > 768 ? (
            <>
              <img
                src="/20years.svg"
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
                  <source src="/kuhni1.mp4" type="video/mp4" />
                </video>
              </div>
            </>
          ) : (
            <img
              src="/20yearc_line.svg"
              alt="20 лет"
              className="block-2-20years-line"
            />
          )}
        </div>

        <div className="block-3">
          <p className="block-name">/Мы производим</p>

          <FurnitureBlock width={width} />
        </div>

        {width > 768 && (
          <div className="marquee-content">
            <img src="/firms.svg" alt="firms" className="marquee" />
          </div>
        )}

        <div className="block-4">
          <p className="block-name">/ Как мы работаем</p>

          <div className="block-4-text">
            <div className="block-4-text-wrapper">
              <div>
                <div className="block-4-text-main">
                  Пройдите <span className="block-4-text-span">вместе</span>
                  <br />с нами все этапы работы
                  <br />
                  над проектом <span className="block-4-text-span">.</span>
                </div>

                {width > 768 && (
                  <div className="block-4-text-sub">
                    Мы контролируем качество выполнения работ на всех
                    этапах,потому что в создании корпусной мебели не бывает
                    несущественных моментов. Это дает гарантию того, что
                    полученный результат выполненного ремонта будет полностью
                    соответствовать запланированному нами в дизайн-проекте.
                  </div>
                )}
              </div>

              {width > 768 && <DoubleButton width={width} />}
            </div>

            <div className="block-4-details">
              {/* <div> */}
              {details.map((item, index) => {
                return (
                  <div className="block-4-details-item">
                    <div className="block-4-details-number">{`/${
                      index + 1
                    }`}</div>

                    <div className="block-4-details-text">
                      <div className="block-4-details-text-name">
                        {item.name}
                      </div>
                      <div className="block-4-details-text-desc">
                        {item.more}
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* </div> */}
            </div>

            {width < 768 && <DoubleButton width={width} />}
          </div>
        </div>

        <div className="block-5">
          <p className="block-name padding">/ Часто задаваемые вопросы</p>

          <div className="block-5-wrapper">
            {width > 768 && (
              <img
                src="/faq.svg"
                alt="Часто задаваемые вопросы"
                className="block-5-img"
              />
            )}

            {/* <div className="block-5-questions"></div> */}
            <FaqBlock width={width} />
          </div>
        </div>

        <div className="block-6">
          <p className="block-name">/ Контакты</p>

          <div className="block-6-wrapper">
            <div className="block-6-map_wrapper">
              <div className="block-6-map">
                <iframe
                  className="block-6-map-iframe"
                  src="https://yandex.ru/maps-reviews-widget/1086674394?comments"
                ></iframe>
                <a
                  href="https://yandex.ru/maps/org/lyudi_i_kukhni/1086674394/"
                  target="_blank"
                  className="block-6-map-link"
                >
                  Люди и кухни на карте Таганрога — Яндекс Карты
                </a>
              </div>

              <img
                src="/green_blob.svg"
                alt="blob"
                className="block-6-map-blob-1"
              />

              <img
                src="/green_blob.svg"
                alt="blob"
                className="block-6-map-blob-2"
              />
            </div>

            {width >= 1280 && (
              <div className="block-6-text_wrapper">
                <div className="block-6-text">
                  Оставь свой отзыв
                  <br />и помоги нам
                  <br />
                  <b>стать лучше</b>
                  <img
                    src="/green_blob.svg"
                    alt="blob"
                    className="block-6-text-blob"
                  />
                  <img
                    src="/arrow_green.svg"
                    alt="blob"
                    className="block-6-text-arrow"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </HomePageWrapper>
  );
};

export default HomePage;
