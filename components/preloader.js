import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      x: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Preloader = () => {
  return (
    <div className="flex py-48 items-center justify-center">
      <motion.div
        className="inline-block align-middle w-80 h-8"
        role="status"
        animate="animationOne"
        variants={loaderVariants}
      >
        <span className="visually-hidden">
          <img src="brand/choys.svg" alt="choys logo" width={250} />
        </span>
      </motion.div>
    </div>
  );
};

export default Preloader;
