"use client"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
    document.body.style.overflow = ""
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      document.body.style.overflow = prev ? "" : "hidden"
      return !prev
    })
  }

  const menuVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  }

  const containerVariants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled ? "bg-[#005152] shadow-lg" : "bg-[#005152]"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.a
          href="#home"
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("#home")
          }}
          aria-label="Hush Coffee Home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-2xl font-bold" style={{ color: "#d59d18" }}>
            HUSH
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-white hover:text-[#d59d18] text-base font-medium transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.href)
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-2 focus:outline-none hover:bg-[#005152]/80 rounded-lg"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed top-0 left-0 h-full w-64 bg-[#005152] flex flex-col pt-16 px-6 shadow-lg md:hidden z-40"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Sidebar Logo */}
              <motion.a
                href="#home"
                className="mb-8"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("#home")
                }}
                aria-label="Hush Coffee Home"
                variants={menuItemVariants}
                initial="closed"
                animate="open"
              >
                <div className="text-2xl font-bold text-center" style={{ color: "#d59d18" }}>
                  HUSH
                </div>
              </motion.a>

              <motion.nav
                className="flex flex-col space-y-4"
                variants={containerVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-white py-2 px-4 rounded-lg hover:bg-[#d59d18]/20 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                    variants={menuItemVariants}
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.nav>
            </motion.div>

            {/* Overlay for Mobile */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-30 md:hidden"
              onClick={toggleMenu}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
