import React from "react";
import HeaderSection from "./HeaderSection";
import SpecializationCertificates from "./Certificates/Specilizations_Certificates";
import MLCertificates from "./Certificates/ML_Certificates";
import WebDevelopmentCertificates from "./Certificates/Web_Development_Certificates";
import OtherCertificates from "./Certificates/Other_Certificates";
import Footer from "./Footer";

const Certificates = () => {
  return (
    <>
      {/* 🔥 Animated Gradient Background Layer */}
      <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-purple-500 via-pink-300 to-blue-400 opacity-20 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10">
        <HeaderSection />

        {/* Page Title + About Me */}
        <div className="pt-32 pb-10 px-4 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            📑 List of All My Certificates 📑
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm md:text-base">
            A categorized collection of my achievements in Specializations, ML, Web Dev, and more!
          </p>

          {/* About Me Block */}
          <div className="mt-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg border dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
              👨‍💻 About Me
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
              Hello! I'm <strong>Pranav Kumar</strong>, an enthusiastic developer skilled in{" "}
              <strong>Machine Learning</strong> and <strong>Full Stack Web Development</strong>. With
              a passion for solving real-world problems, I love building interactive apps and diving
              deep into intelligent systems. This page showcases my professional certifications earned
              through dedication and consistent learning. 💡🚀
            </p>
          </div>
        </div>

        {/* Certificate Sections */}
        <section id="Specialization" className="py-10 px-4 md:px-12">
          <SpecializationCertificates />
        </section>

        <section id="ML_Certificate" className="py-10 px-4 md:px-12">
          <MLCertificates />
        </section>

        <section id="Web_Development" className="py-10 px-4 md:px-12">
          <WebDevelopmentCertificates />
        </section>

        <section id="Other" className="py-10 px-4 md:px-12 mb-10">
          <OtherCertificates />
        </section>

        <Footer />
      </div>

      {/* 🔥 Gradient Keyframes */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
        }
      `}</style>
    </>
  );
};

export default Certificates;
