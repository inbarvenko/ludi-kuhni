import { motion } from "motion/react";
import { Phone, MapPin } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "./ui/drawer";

type InfoType = "info" | "location" | undefined;

interface MobileInfoDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  type: InfoType | null;
}

const infoContent = {
  info: {
    icon: Phone,
    title: "Связаться с нами",
    color: "#79bf3a",
    items: [
      {
        label: "Основной номер, мессенджеры",
        value: "+7 (928) 165-38-52",
        link: "tel:+79281653852",
      },
      {
        label: "Стационарный телефон",
        value: "+7 (863) 431-17-07",
        link: "tel:+78634311707",
      },
      {
        label: "Стационарный телефон",
        value: "+7 (863) 431-47-07",
        link: "tel:+78634314707",
      },
      {
        label: "VK",
        value: "ludikuhni",
        link: "https://vk.com/ludikuhni?from=groups",
      },
      {
        label: "WhatsApp",
        value: "+7 (928) 165-38-52",
        link: "https://api.whatsapp.com/send/?phone=79281653852&text&type=phone_number&app_absent=0",
      },
      {
        label: "Telegram",
        value: "@ludikuhnitgn",
        link: "https://t.me/ludikuhnitgn",
      },
      {
        label: "Email",
        value: "ludikuhni@yandex.ru",
        link: "mailto:ludikuhni@yandex.ru",
      },
    ],
    description:
      "Мы всегда рады ответить на ваши вопросы и помочь с выбором идеальной мебели!",
    note: "Все данные кликабельные",
  },
  location: {
    icon: MapPin,
    title: "Информация о салоне",
    color: "#79bf3a",
    items: [
      {
        label: "Адрес салона",
        value: "г. Таганрог, ул. Петровская, д. 15",
        link: "https://yandex.ru/maps/-/CLCQr6Ip",
      },
      {
        label: "Режим работы",
        value: "Пн-Сб, 10:00 - 19:00",
      },
    ],
    description:
      "Приглашаем вас посетить наш мебельный салон, где вы сможете увидеть образцы и материалы, пообщаться с нашими дизайнерами и заказать мебель вашей мечты!",
    note: "Все данные кликабельные",
  },
};

export function MobileDrawer({ isOpen, onClose, type }: MobileInfoDrawerProps) {
  if (!type) return null;

  const content = infoContent[type];
  const Icon = content.icon;

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="bg-[#f6f0e9] border-t-4 border-[#79bf3a] max-h-[85vh]">
        {/* Drag indicator */}
        <div className="flex justify-center py-3">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>

        <DrawerHeader className="relative pb-2">
          {/* <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-white/50 transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5 text-[#615756]" />
          </button> */}

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="flex justify-center mb-4"
          >
            <div
              className="p-4 rounded-full"
              style={{ backgroundColor: `${content.color}20` }}
            >
              <Icon
                className="w-8 h-8"
                style={{ color: content.color }}
                strokeWidth={2}
              />
            </div>
          </motion.div>

          <DrawerTitle className="text-[#0f0449] text-center text-xl">
            {content.title}
          </DrawerTitle>
        </DrawerHeader>

        <div className="px-6 pb-8 pt-2">
          {/* Описание */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ paddingBottom: "20px" }}
            className="text-[#615756] text-sm text-center mb-6 leading-relaxed "
          >
            {content.description}
          </motion.p>

          {/* Список информации */}
          <div
            style={{ maxHeight: "40vh" }}
            className="space-y-3  overflow-y-auto"
          >
            {content.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-[#6c6c6c] text-xs uppercase tracking-wider mb-1.5 font-medium">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-[#0f0449] hover:text-[#79bf3a] transition-colors block"
                        target={
                          item.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        <span className="break-words">{item.value}</span>
                      </a>
                    ) : (
                      <p className="text-[#0f0449] break-words">{item.value}</p>
                    )}
                  </div>
                  {/* {item.link && (
                    <motion.a
                      href={item.link}
                      whileTap={{ scale: 0.92 }}
                      whileHover={{ scale: 1.03 }}
                      className="shrink-0 bg-[#79bf3a] text-white px-2 py-1.5 rounded-lg text-xs hover:bg-[#6aa332] transition-all shadow-sm hover:shadow-md"
                      target={
                        item.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      Открыть
                    </motion.a>
                  )} */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Дополнительная заметка */}
          {content.note && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ fontSize: "12px", paddingTop: "10px" }}
              className="text-[#6c6c6c] text-center mt-4 italic"
            >
              {content.note}
            </motion.p>
          )}

          {/* Кнопка закрытия */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={onClose}
            className="font-['Montserrat'] w-full mt-5 bg-[#0f0449] text-white py-3 rounded-lg hover:bg-[#0f0449]/90 transition-colors"
          >
            Закрыть
          </motion.button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
