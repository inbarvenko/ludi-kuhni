import { motion } from "motion/react";
import {
  Sofa,
  ChefHat,
  Armchair,
  Lamp,
  Table,
  Bed,
  Refrigerator,
  Microwave,
} from "lucide-react";
import logo from "../../shared/constants/images/svg/logo_1.svg";

const furnitureIcons = [
  { Icon: Sofa, delay: 0 },
  { Icon: ChefHat, delay: 0.2 },
  { Icon: Armchair, delay: 0.4 },
  { Icon: Lamp, delay: 0.6 },
  { Icon: Table, delay: 0.8 },
  { Icon: Bed, delay: 1.0 },
  { Icon: Refrigerator, delay: 1.2 },
  { Icon: Microwave, delay: 1.4 },
];

export function LoadingCard() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Плавающие иконки мебели */}
      {furnitureIcons.map((item, index) => {
        const angle = (index / furnitureIcons.length) * 360;
        // Адаптивный радиус: меньше для мобильных
        // const desktopRadius = 200;
        const mobileRadius = 120;
        const x = Math.cos((angle * Math.PI) / 180);
        const y = Math.sin((angle * Math.PI) / 180);

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
            }}
            initial={{
              x: (x * mobileRadius) / 2,
              y: (y * mobileRadius) / 2,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: [
                (x * mobileRadius) / 2,
                x * mobileRadius,
                (x * mobileRadius) / 2,
              ],
              y: [
                (y * mobileRadius) / 2,
                y * mobileRadius,
                (y * mobileRadius) / 2,
              ],
              opacity: [0, 0.3, 0.5, 0.3, 0],
              scale: [0, 1, 1, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.Icon className="text-emerald-400 drop-shadow-lg w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
        );
      })}

      {/* Центральный логотип с пульсацией */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.08, 1],
        }}
        transition={{
          opacity: { duration: 1 },
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <img
          src={logo}
          alt="Люди! Кухни"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* Анимированные точки */}
      <motion.div
        className="absolute bottom-12 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
