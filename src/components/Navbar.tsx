"use client"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled ? "bg-[#005152]/95 backdrop-blur-sm shadow-lg" : "bg-[#005152]",
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault()
            scrollToTop()
          }}
          aria-label="Hush Coffee"
        >
          <div className="text-2xl font-bold" style={{ color: "#d59d18" }}>
            HUSH
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            { href: "#", label: "Home", onClick: scrollToTop },
            { href: "#about", label: "About" },
            { href: "#menu", label: "Menu" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link text-white hover:text-[#d59d18] transition-colors duration-200 relative"
              onClick={
                item.onClick
                  ? (e) => {
                      e.preventDefault()
                      item.onClick()
                    }
                  : undefined
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-3 focus:outline-none hover:bg-[#005152]/80 rounded-lg"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <>
          <div className="fixed top-0 left-0 h-full w-72 z-40 bg-gradient-to-br from-[#005152] to-[#FFF] flex flex-col pt-16 px-6 shadow-2xl md:hidden backdrop-blur-sm">
            <nav className="flex flex-col space-y-6 mt-8">
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
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xl font-medium text-white py-3 px-6 rounded-lg hover:bg-[#005152]/50 transition-colors duration-200 relative overflow-hidden"
                  onClick={
                    item.onClick
                      ? (e) => {
                          e.preventDefault()
                          item.onClick()
                        }
                      : item.onClick
                  }
                >
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Overlay for Mobile */}
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
            onClick={toggleMenu}
            aria-hidden="true"
          />
        </>
      )}
    </header>
  )
}

export default Navbar
