// import { motion } from "framer-motion";

// const loaderVariants = {
//   animationOne: {
//     x: [-20, 20],
//     y: [0, -30],
//     transition: {
//       x: {
//         yoyo: Infinity,
//         duration: 0.5,
//       },
//       x: {
//         yoyo: Infinity,
//         duration: 0.25,
//         ease: "easeOut",
//       },
//     },
//   },
// };

const Preloader = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
};

export default Preloader;
