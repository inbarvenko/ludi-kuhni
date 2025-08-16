import React, { useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ContentWrapper } from "./ContentWrapper";

const Content: React.FC = () => {
  const navigate = useNavigate();

  const width = useMemo(() => {
    return window.innerWidth;
  }, []);

  const onCatalogueClick = () => {
    navigate("/catalog");
  };

  const onHomeClick = () => {
    navigate("/");
  };

  return (
    <ContentWrapper width={width}>
      <div className="header-wrapper">
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
          <img
            src="/logo_1.svg"
            onClick={onHomeClick}
            alt="Лого"
            className="logo"
          />

          {width > 768 ? (
            <div className="header-2-items">
              <div className="header-2-text" onClick={onCatalogueClick}>
                Кухни
              </div>
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
      </div>

      <Outlet />
    </ContentWrapper>
  );
};

export default Content;
