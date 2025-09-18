"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing curve
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-[url('/Header-background.jpg')] bg-cover bg-center"
        style={{ marginTop: "55px" }}
      ></div>
      {/* Gradient overlay acting as a filter */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00515266] via-[#00515266] to-[#FFf]"></div>

      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="section-title text- text-white -900 mb-6" variants={itemVariants}>
          Welcome to{" "}
          <span className="text-primary font-bold" style={{ color: "#d59d18" }}>
            Hush
          </span>
        </motion.h1>

        <motion.p className="section-subtitle  text-white -600 mb-8 mx-auto" variants={itemVariants}>
          Where every cup tells a story. Experience the perfect blend of artisanal coffee, cozy atmosphere, and
          exceptional service in the heart of the city.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={itemVariants}>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              className="button-primary px-8 py-4 text-lg"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Menu
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              variant="outline"
              className="button-secondary px-8 py-4 text-lg bg-transparent"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Story
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-10 opacity-20 hidden lg:block"
        variants={floatingVariants}
        animate="animate"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 0.2,
          scale: 1,
          transition: { duration: 1, delay: 1 },
        }}
        viewport={{ once: true }}
      >
        <div className="w-32 h-32 bg-primary/30 rounded-full flex items-center justify-center backdrop-blur-sm">☕</div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-10 opacity-20 hidden lg:block"
        variants={{
          animate: {
            y: [-8, 12, -8],
            rotate: [-1, 1, -1],
            transition: {
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            },
          },
        }}
        animate="animate"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 0.2,
          scale: 1,
          transition: { duration: 1, delay: 1.5 },
        }}
        viewport={{ once: true }}
      >
        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">🫘</div>
      </motion.div>
    </section>
  )
}

export default Hero
