import { motion } from "motion/react";
const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="absolute w-12 sm:w-15 cursor-grab" // reduced size for small devices
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absolute px-1 py-2 sm:py-4 text-base sm:text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[8rem] sm:w-[12rem] cursor-grab" // smaller text and width for small devices
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
