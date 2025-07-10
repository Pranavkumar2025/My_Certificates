import React from "react";
import { motion } from "framer-motion";
import Card_Sample from "./Card_Sample";
import { Otherdata } from "./Adata";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Other_Certificates = () => {
  return (
    <section
      id="Other"
      className="py-16 px-4 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 rounded-[2rem] mx-4 md:mx-20 shadow-2xl border border-gray-300 dark:border-gray-700"
    >
      {/* Light blur glow */}
      <div className="absolute -inset-1 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 dark:from-purple-700 dark:via-purple-900 dark:to-black blur-2xl opacity-10 rounded-[2rem] z-0" />

      <div className="relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400 mb-4"
        >
          📜 Other Certificates 📜
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-10"
        >
          Certifications from various tech-related domains and achievements.
        </motion.p>
      </div>

      {/* Animated Cards */}
      <motion.div
        className="relative z-10 flex flex-wrap justify-center gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {Otherdata.map((val) => (
          <Card_Sample
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

export default Other_Certificates;
