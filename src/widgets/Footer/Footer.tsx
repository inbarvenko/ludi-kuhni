import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { motion } from "motion/react";
import imgLogo from "../../shared/constants/images/svg/logo_1.svg";
import { Divider, Spin } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../RoomsBlock/api/getRooms";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const { data: rooms, isLoading } = useQuery({
    queryKey: ["rooms"], // Уникальный ключ для кэша
    queryFn: getRooms,
  });

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#0f0449] text-white mt-auto"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={imgLogo}
                alt="Люди! Кухни"
                className="h-10 w-10 sm:h-12 sm:w-12"
              />
              <h3 className="text-white">Люди! Кухни</h3>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">
              Мебельный салон премиум-класса. Индивидуальное производство кухонь
              и мебели на заказ с 2000 года.
            </div>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[#79bf3a] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#79bf3a] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#79bf3a] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          <div
            style={{ minWidth: "300px" }}
            className="flex justify-between px-[20px]"
          >
            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-white">Навигация</h4>
              <ul className="space-y-2">
                {["О компании", "Каталог", "Отзывы", "Контакты"].map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className="text-sm text-gray-300 hover:text-[#79bf3a] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="mb-4 text-white">Категории</h4>
              <ul className="space-y-2">
                {isLoading ? (
                  <Spin />
                ) : (
                  rooms?.map((category) => (
                    <li key={category.id}>
                      <a
                        href={`/catalog?room=${category.id}`}
                        className="text-sm text-gray-300 hover:text-[#79bf3a] transition-colors"
                      >
                        {category.name}
                      </a>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="mb-4 text-white">Контакты</h4>
            <div className="space-y-3">
              <a
                href="tel:+78634314707"
                className="flex items-start space-x-2 text-sm text-gray-300 hover:text-[#79bf3a] transition-colors group"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+7 (863) 431-47-07</span>
              </a>

              <a
                href="tel:+78634311707"
                className="flex items-start space-x-2 text-sm text-gray-300 hover:text-[#79bf3a] transition-colors group"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+7 (863) 431-17-07</span>
              </a>

              <div className="flex items-start space-x-2  text-gray-300">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-14">Пн-Сб: 10:00 - 19:00</div>
                  <div className="text-14 text-gray-400">Вс: выходной</div>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2 text-sm text-gray-300 hover:text-[#79bf3a] transition-colors group"
              >
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>г. Таганрог, ул. Петровская 15</span>
              </a>

              <a
                href="mailto:info@lyudikuhni.ru"
                className="flex items-start space-x-2 text-sm text-gray-300 hover:text-[#79bf3a] transition-colors group"
              >
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>ludikuhni@yandex.ru</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Divider style={{ margin: "0 12px" }} className="bg-gray-700" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <div className="text-sm sm:text-sm text-gray-400 text-center sm:text-left">
            © {currentYear} Люди! Кухни.
          </div>

          <div className="text-sm sm:text-sm text-gray-400 text-center sm:text-left">
            Все права защищены.{" "}
          </div>
          {/* <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <a href="#" className="hover:text-[#79bf3a] transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-[#79bf3a] transition-colors">
              Условия использования
            </a>
          </div> */}
        </div>
      </div>
    </motion.footer>
  );
}
