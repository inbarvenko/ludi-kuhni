import { motion } from "motion/react";
import {
  Sofa,
  ChefHat,
  Armchair,
  Lamp,
  Table,
  Refrigerator,
} from "lucide-react";

const furnitureIcons = [
  { Icon: Sofa, color: "#79bf3a" },
  { Icon: ChefHat, color: "#0f0449" },
  { Icon: Armchair, color: "#79bf3a" },
  { Icon: Lamp, color: "#0f0449" },
  { Icon: Table, color: "#79bf3a" },
  { Icon: Refrigerator, color: "#0f0449" },
];

interface FurnitureIconsLoaderProps {
  text?: string;
}

export function ContentLoader({
  text = "Загрузка каталога...",
}: FurnitureIconsLoaderProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center py-12 sm:py-16">
      {/* Иконки в линию */}
      <div className="flex items-end space-x-2 sm:space-x-3 mb-6">
        {furnitureIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.2,
              delay: index * 0.15,
              repeat: Infinity,
              repeatDelay: 0.3,
              ease: "easeInOut",
            }}
          >
            <item.Icon
              className="w-6 h-6 sm:w-8 sm:h-8"
              style={{ color: item.color }}
              strokeWidth={2}
            />
          </motion.div>
        ))}
      </div>

      {/* Текст загрузки */}
      {text && (
        <motion.p
          className="text-[#0f0449] text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.p>
      )}

      {/* Анимированные точки */}
      <motion.div
        className="flex space-x-1.5 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-emerald-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
