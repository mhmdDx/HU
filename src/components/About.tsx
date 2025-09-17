"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
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
            <motion.div className="text-center" variants={statsVariants}>
              <motion.div
                className="text-3xl font-bold text-primary mb-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.4 }}
              >
                5+
              </motion.div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </motion.div>
            <motion.div className="text-center" variants={statsVariants}>
              <motion.div
                className="text-3xl font-bold text-primary mb-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.8, delay: 0.7, type: "spring", bounce: 0.4 }}
              >
                15+
              </motion.div>
              <div className="text-sm text-gray-600">Coffee Origins</div>
            </motion.div>
            <motion.div className="text-center" variants={statsVariants}>
              <motion.div
                className="text-3xl font-bold text-primary mb-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.8, delay: 0.9, type: "spring", bounce: 0.4 }}
              >
                1000+
              </motion.div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="aspect-square bg-primary/10 rounded-3xl flex items-center justify-center"
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/text-mask-image.jpg"
              alt="Descriptive alt text"
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
