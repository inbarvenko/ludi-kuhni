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
import type React from "react";

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

export const GlobalLoading: React.FC = () => {
  return (
    <div className="min-h-screen absolute z-50 hidden width-full">
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
        {/* Плавающие иконки мебели */}
        {furnitureIcons.map((item, index) => {
          const angle = (index / furnitureIcons.length) * 360;
          const radius = 200;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
              }}
              initial={{
                x: x / 2,
                y: y / 2,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: [x / 2, x, x / 2],
                y: [y / 2, y, y / 2],
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
              <item.Icon
                size={32}
                className="text-emerald-400 drop-shadow-lg"
              />
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
            className="w-40 h-40 object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Анимированные точки */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-emerald-400 rounded-full"
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
    </div>
  );
};
