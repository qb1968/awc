import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const features = [
    {
      title: "01.",
      text: "At Allison Web Consultants, we prioritize mobile-first design to ensure your website delivers an exceptional experience across all devices, enhancing engagement and accessibility.",
    },
    {
      title: "02.",
      text: "We offer personalized, one-on-one consultations to fully understand your business objectives, crafting tailored digital solutions that align perfectly with your goals.",
    },
    {
      title: "03.",
      text: "Our comprehensive website maintenance services keep your site secure, up-to-date, and performing optimally—allowing you to focus on growing your business with peace of mind.",
    },
    {
      title: "04.",
      text: "Committed to fair and transparent pricing, we empower local businesses with affordable, high-quality web solutions that establish a strong and lasting online presence.",
    },
  ];

  // Controls & ref for hero card
  const heroControls = useAnimation();
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Controls & ref for features container
  const featuresControls = useAnimation();
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (heroInView) {
      heroControls.start("visible");
    }
  }, [heroControls, heroInView]);

  useEffect(() => {
    if (featuresInView) {
      featuresControls.start("visible");
    }
  }, [featuresControls, featuresInView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
    }),
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-900 via-cyan-700 to-indigo-800"
          style={{
            backgroundSize: "600% 600%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Content Card */}
        <div className="relative p-8 rounded-lg max-w-3xl text-center text-white shadow-lg bg-black bg-opacity-60 backdrop-blur-sm z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-md">
            Why Choose Us?
          </h1>
          <p className="text-lg sm:text-xl font-semibold max-w-xl mx-auto leading-relaxed drop-shadow-sm">
            At Allison Web Consultants, we specialize in creating stunning,
            user-friendly websites that drive results.<br/>
            We help businesses thrive with expert web solutions tailored to your
            goals.
          </p>
        </div>
      </section>

      <section
        className="bg-gray-900 py-20 px-6 md:px-12 text-gray-300"
        ref={featuresRef}
      >
        <motion.div
          className="max-w-4xl mx-auto space-y-12"
          initial="hidden"
          animate={featuresControls}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg border border-cyan-600 cursor-pointer"
            >
              <h3 className="text-cyan-400 text-3xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
