import React, { useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ContentWrapper } from "./ContentWrapper";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../widgets/RoomsBlock/api/getRooms";
import MobileHeader from "../../shared/ui/MobileHeader/MobileHeader";
import { Menu } from "@mui/icons-material";
import { Footer } from "../../widgets/Footer/Footer";
import { scrollToTop } from "../../shared/model/scrollToTop";
import { motion } from "motion/react";
import { LoadingCard } from "../../widgets/LoadingCard/LoadingCard";

const Content: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const width = useMemo(() => {
    return window.innerWidth;
  }, []);

  const onCatalogueClick = (id: number) => {
    navigate("/catalog?room=" + id);
    scrollToTop();
  };

  const onHomeClick = () => {
    navigate("/");
    scrollToTop();
  };

  const { data: rooms, isLoading } = useQuery({
    queryKey: ["rooms"], // Уникальный ключ для кэша
    queryFn: getRooms,
  });

  return (
    <ContentWrapper width={width}>
      {loading || isLoading ? (
        <motion.div
          style={{
            position: "absolute",
            zIndex: 10000,
            top: 0,
            overflow: "hidden",
            width: "100vw",
            maxHeight: "100vh",
          }}
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoadingCard />
        </motion.div>
      ) : (
        <>
          <div className="header-wrapper">
            <div className="header-1">
              <div className="header-1-item">
                <CallIcon className="icon" fontSize="small" />
                <div className="header-1-text">
                  +7 (863) 431-47-07, +7 (863) 431-17-07
                </div>
              </div>

              <div className="header-1-item">
                <WatchLaterIcon className="icon" fontSize="small" />
                <div className="header-1-text">Пн-Сб 10:00 - 19:00</div>
              </div>

              <div className="header-1-item">
                <LocationOnIcon className="icon" fontSize="small" />
                <div className="header-1-text">
                  г. Таганрог, ул. Петровская 15
                </div>
              </div>
            </div>

            <div className="header-2">
              <img
                src="/logo_1.svg"
                onClick={onHomeClick}
                alt="Люди! Кухни"
                className="logo"
              />

              {width > 768 ? (
                <div className="header-2-items">
                  {rooms?.map((item) => (
                    <div
                      key={item.id}
                      className="header-2-text"
                      onClick={() => onCatalogueClick(item.id || 1)}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              ) : (
                <button
                  onClick={handleOpen}
                  className="cursor-pointer p-2 hover:bg-[#e9e9e9] rounded-lg transition-colors"
                >
                  <Menu className="size-6 text-[#0f0449]" />
                </button>
              )}
            </div>
          </div>

          <MobileHeader
            rooms={rooms || []}
            isOpen={isOpen}
            // onOpen={handleOpen}
            onClose={handleClose}
          />

          <div className={width > 768 ? `mh-[700px]` : `mh-[400px]`}>
            <Outlet />
          </div>

          <Footer />
        </>
      )}
    </ContentWrapper>
  );
};

export default Content;
