import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import { HomePageWrapper } from "./HomePageWrapper";

import { Button } from "antd";
import { details } from "./mock/home.data";
import DoubleButton from "../../shared/ui/DoubleButton/DoubleButton";
import FaqBlock from "../../widgets/FaqBlock/FaqBlock";
import ContactBlock from "../../features/ContactBlock/ContactBlock";
import { RoomsBlock } from "../../widgets/RoomsBlock/RoomsBlock";
import ContactModal from "../../widgets/ContactModal/ContactModal";

const HomePage: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  const width = useMemo(() => {
    return window.innerWidth;
  }, []);

  return (
    <HomePageWrapper width={width}>
      <Helmet title="Главная страница" />

      {isContactModalOpen && (
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      )}

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
              <Button
                className="block-1-buttons-1"
                onClick={() => setIsContactModalOpen(true)}
              >
                Написать
              </Button>

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

          <RoomsBlock width={width} />
        </div>

        {width > 768 && (
          <div className="marquee-content">
            <img src="/firms.svg" alt="firms" className="marquee" />
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

              {width > 768 && (
                <DoubleButton
                  width={width}
                  onClick={() => setIsContactModalOpen(true)}
                />
              )}
            </div>

            <div className="block-4-details">
              {/* <div> */}
              {details.map((item, index) => {
                return (
                  <div key={index} className="block-4-details-item">
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

            {width < 768 && (
              <DoubleButton
                width={width}
                onClick={() => setIsContactModalOpen(true)}
              />
            )}
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

        <div className="map-block">
          {width < 768 && (
            <div className="map-block-mobile">
              <div
                className="font-['Mak:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#0f0449] text-[30px] text-left"
                style={{ width: "min-content" }}
              >
                <p className="flex align-center justify-center leading-[normal] text-accent">
                  Свяжитесь с нами!
                </p>
              </div>
            </div>
          )}

          <div
            id="map"
            style={{ width: "100vw", height: "100%", position: "relative" }}
          >
            <div style={{ position: "relative", overflow: "hidden" }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=38.936850%2C47.207398&mode=usermaps&source=constructorLink&um=constructor%3Ad1a5893aac5359b75107c15a65c9184e3bebff8fcf41061271f3a2674e1830c4&z=16"
                width="100vw"
                height="400"
                allowFullScreen={true}
                style={{ position: "relative", height: "80vh", width: "100vw" }}
              ></iframe>
            </div>

            {width > 768 && (
              <div className="flex items-center justify-center p-4 absolute z-10 top-0 left-1/30 ">
                <div className="relative ">
                  <ContactBlock />
                </div>
              </div>
            )}
          </div>

          <div className="footer"></div>
        </div>
      </div>
    </HomePageWrapper>
  );
};

export default HomePage;
