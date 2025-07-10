import React from "react";
import { motion } from "framer-motion";

const Card_Sample = ({ img_src, abc_certificate, title_name, mylink }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-3xl p-6 w-[360px] h-[450px] shadow-2xl border border-gray-200 dark:border-gray-700 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.04,
        rotateX: 4,
        rotateY: 4,
        boxShadow: "0px 25px 35px rgba(0,0,0,0.25)",
      }}
      transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
    >
      {/* Certificate Image */}
      <div className="w-full h-52 mb-4 overflow-hidden rounded-xl border-2 border-purple-400 shadow-md">
        <img
          src={img_src}
          alt="certificate"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Certificate Info */}
      <h3 className="text-sm text-gray-600 dark:text-gray-300 mb-1 font-medium px-2 line-clamp-2">
        {abc_certificate}
      </h3>

      <h2 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-4 px-2">
        {title_name}
      </h2>

      {/* View Button */}
      <a
        href={mylink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto"
      >
        <button className="px-5 py-2 text-sm rounded-full bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transition duration-300">
          View Certificate 🔗
        </button>
      </a>
    </motion.div>
  );
};

export default Card_Sample;
