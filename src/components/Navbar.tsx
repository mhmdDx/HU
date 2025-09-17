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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? "hidden" : ""
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    if (isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = ""
    }
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

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled ? "bg-[#005152]" : "bg-[#005152]",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.a
          href="#"
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault()
            scrollToTop()
          }}
          aria-label="Hush Coffee"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-2xl font-bold" style={{ color: "#d59d18" }}>
            HUSH
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            { href: "#", label: "Home", onClick: scrollToTop },
            { href: "#about", label: "About" },
            { href: "#menu", label: "Menu" },
            { href: "#contact", label: "Contact" },
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="nav-link text-white hover:text-[#d59d18] transition-colors duration-200"
              onClick={
                item.onClick
                  ? (e) => {
                      e.preventDefault()
                      item.onClick()
                    }
                  : undefined
              }
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
          className="md:hidden text-white p-3 focus:outline-none hover:bg-[#005152]/80 rounded-lg"
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
              className="fixed top-0 left-0 h-full w-72 z-40 bg-gradient-to-br from-[#005152] to-[#FFF] flex flex-col pt-16 px-6 shadow-lg md:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.nav
                className="flex flex-col space-y-6 mt-8"
                variants={containerVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {[
                  {
                    href: "#",
                    label: "Home",
                    onClick: () => {
                      scrollToTop()
                      setIsMenuOpen(false)
                      document.body.style.overflow = ""
                    },
                  },
                  {
                    href: "#about",
                    label: "About",
                    onClick: () => {
                      setIsMenuOpen(false)
                      document.body.style.overflow = ""
                    },
                  },
                  {
                    href: "#menu",
                    label: "Menu",
                    onClick: () => {
                      setIsMenuOpen(false)
                      document.body.style.overflow = ""
                    },
                  },
                  {
                    href: "#contact",
                    label: "Contact",
                    onClick: () => {
                      setIsMenuOpen(false)
                      document.body.style.overflow = ""
                    },
                  },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="text-xl font-medium text-white py-3 px-6 rounded-lg hover:bg-[#005152]/50 transition-colors duration-200"
                    onClick={
                      item.onClick
                        ? (e) => {
                            e.preventDefault()
                            item.onClick()
                          }
                        : item.onClick
                    }
                    variants={menuItemVariants}
                    whileHover={{ x: 10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.nav>
            </motion.div>

            {/* Overlay for Mobile */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
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
