"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-[url('/Header-background.jpg')] bg-cover bg-center"
        style={{ marginTop: "70px" }}
      ></div>
      {/* Gradient overlay acting as a filter */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00515266] via-[#00515266] to-[#FFf]"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          className="section-title text- text-white -900 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to{" "}
          <span className="text-primary font-bold" style={{ color: "#d59d18" }}>
            Hush
          </span>
        </motion.h1>

        <motion.p
          className="section-subtitle  text-white -600 mb-8 mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Where every cup tells a story. Experience the perfect blend of artisanal coffee, cozy atmosphere, and
          exceptional service in the heart of the city.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="button-primary px-8 py-4 text-lg"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Menu
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="button-secondary px-8 py-4 text-lg bg-transparent"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Story
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-1/4 right-10 opacity-20 hidden lg:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="w-32 h-32 bg-primary/30 rounded-full flex items-center justify-center">☕</div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-10 opacity-20 hidden lg:block"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">🫘</div>
      </motion.div>
    </section>
  )
}

export default Hero
