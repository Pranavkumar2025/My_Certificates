import React from "react";
import { motion } from "framer-motion";
import CardSample from "./Card_Sample";
import Mldata from "./Adata";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const ML_Certificates = () => {
  return (
    <section
      id="ML_Certificate"
      className="relative py-16 px-4 md:px-10 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 rounded-[2rem] mx-4 md:mx-20 shadow-2xl border border-gray-300 dark:border-gray-700"
    >
      {/* Soft Glow Background */}
      <div className="absolute -inset-1 bg-gradient-to-br from-purple-300 via-pink-300 to-red-200 dark:from-purple-700 dark:via-purple-900 dark:to-black blur-2xl opacity-10 rounded-[2rem] z-0" />

      <div className="relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400 mb-4"
        >
          🧠 Machine Learning Certificates 🧠
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-10"
        >
          Courses and certifications showcasing my ML skills.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <motion.div
        className="relative z-10 flex flex-wrap justify-center gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {Mldata.map((val) => (
          <CardSample
            key={val.id}
            abc_certificate={val.abc_certificate}
            img_src={val.img_src}
            title_name={val.title_name}
            mylink={val.mylink}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default ML_Certificates;
