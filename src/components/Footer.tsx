"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        bounce: 0.3,
      },
    },
  }

  const linkVariants = {
    hover: {
      x: 5,
      scale: 1.05,
      color: "#d59d18",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: { scale: 0.95 },
  }

  return (
    <motion.footer
      className="bg-primary text-primary-foreground py-12 overflow-hidden"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div className="col-span-1 md:col-span-2" variants={itemVariants}>
            <motion.div
              className="text-2xl font-bold mb-4"
              style={{ color: "#d59d18" }}
              variants={logoVariants}
              whileHover={{
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 },
              }}
            >
              HUSH
            </motion.div>
            <motion.p className="text-primary-foreground/80 mb-4 max-w-md" variants={itemVariants}>
              Where every cup tells a story. Experience the perfect blend of artisanal coffee, cozy atmosphere, and
              exceptional service.
            </motion.p>
            <motion.div className="text-sm text-primary-foreground/60" variants={itemVariants}>
              © 2025 Hush Coffee. All rights reserved
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3 className="font-semibold mb-4" variants={itemVariants}>
              Quick Links
            </motion.h3>
            <motion.ul className="space-y-2 text-primary-foreground/80" variants={containerVariants}>
              {[
                { href: "#", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#menu", label: "Menu" },
                { href: "#contact", label: "Contact" },
              ].map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a
                    href={link.href}
                    className="hover:text-white transition-colors relative inline-block"
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {link.label}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-[#d59d18]"
                      initial={{ width: 0 }}
                      whileHover={{
                        width: "100%",
                        transition: { duration: 0.3, ease: "easeOut" },
                      }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3 className="font-semibold mb-4" variants={itemVariants}>
              Follow Us
            </motion.h3>
            <motion.ul className="space-y-2 text-primary-foreground/80" variants={containerVariants}>
              {[
                { href: "https://www.instagram.com/hush__eg/", label: "Instagram" },
                { href: "https://www.tiktok.com/@hush__eg?_t=ZS-8zmdeSAFkTY&_r=1", label: "TikTok" },
              ].map((social, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a
                    href={social.href}
                    className="hover:text-white transition-colors relative inline-block"
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {social.label}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-[#d59d18]"
                      initial={{ width: 0 }}
                      whileHover={{
                        width: "100%",
                        transition: { duration: 0.3, ease: "easeOut" },
                      }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60"
          variants={itemVariants}
        >
          <motion.p variants={itemVariants}>
            Made by{" "}
            <motion.a
              href="https://mohamed-eid.vercel.app/"
              target="_blank"
              className="hover:text-[#d59d18] transition-colors relative inline-block"
              whileHover={{
                scale: 1.05,
                color: "#d59d18",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              rel="noreferrer"
            >
              Mohamed Eid
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-[#d59d18]"
                initial={{ width: 0 }}
                whileHover={{
                  width: "100%",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              />
            </motion.a>
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
