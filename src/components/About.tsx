"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const statsVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.3,
      },
    },
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section id="about" className="section-container bg-white" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="hush-chip" variants={itemVariants}>
            Our Story
          </motion.div>
          <motion.h2 className="section-title text-gray-900" variants={itemVariants}>
            Crafting Coffee Culture Since Day One
          </motion.h2>
          <motion.div className="space-y-4 text-gray-600" variants={itemVariants}>
            <p>
              At Hush, we believe that great coffee is more than just a beverage—it's a moment of connection, a pause in
              your busy day, and a gateway to conversation and community.
            </p>
            <p>
              Founded with a passion for exceptional coffee and warm hospitality, we source the finest beans from
              sustainable farms around the world. Every cup is carefully crafted by our skilled baristas who understand
              that perfection lies in the details.
            </p>
            <p>
              Whether you're looking for your morning fuel, an afternoon pick-me-up, or a cozy spot to catch up with
              friends, Hush provides the perfect atmosphere to enjoy life's simple pleasures.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-6 pt-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              { value: "5+", label: "Years Experience", delay: 0.5 },
              { value: "15+", label: "Coffee Origins", delay: 0.7 },
              { value: "1000+", label: "Happy Customers", delay: 0.9 },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center" variants={statsVariants}>
                <motion.div
                  className="text-3xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, scale: 0, rotateY: 90 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          scale: 1,
                          rotateY: 0,
                          transition: {
                            duration: 0.8,
                            delay: stat.delay,
                            type: "spring",
                            bounce: 0.4,
                            ease: "easeOut",
                          },
                        }
                      : { opacity: 0, scale: 0, rotateY: 90 }
                  }
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="aspect-square bg-primary/10 rounded-3xl flex items-center justify-center overflow-hidden"
            whileHover={{
              scale: 1.02,
              rotate: 0.5,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="/text-mask-image.jpg"
              alt="Descriptive alt text"
              className="w-full h-full object-cover rounded-3xl transition-transform duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
