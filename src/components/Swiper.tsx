"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

const Swiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const slides = [
    {
      id: 1,
      title: "Premium Coffee Experience",
      description: "Discover the finest coffee beans from around the world, expertly roasted to perfection",
      videoUrl: "/coffee.mp4",
      bgColor: "from-amber-100 to-orange-100",
    },
    {
      id: 2,
      title: "français Pastries",
      description: "Handcrafted pastries and desserts made fresh daily by our skilled bakers",
      videoUrl: "/bakers.mp4",
      bgColor: "from-rose-100 to-pink-100",
    },
    {
      id: 3,
      title: "Cozy Atmosphere",
      description: "Relax in our warm and inviting space, perfect for work, meetings, or catching up with friends",
      videoUrl: "/place.mp4",
      bgColor: "from-emerald-100 to-teal-100",
    },
    {
      id: 4,
      title: "Fresh Ingredients",
      description: "We source only the finest, freshest ingredients to create exceptional flavors in every cup",
      videoUrl: "/cups.mp4",
      bgColor: "from-blue-100 to-indigo-100",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(nextSlide, 12000)
    return () => clearInterval(interval)
  }, [isPlaying])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-teal-200">
            Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover what makes our coffee shop special through our commitment to quality and service
          </p>
        </motion.div>

        {/* Swiper Container */}
        <div className="relative h-[600px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence initial={false} custom={currentSlide}>
            <motion.div
              key={currentSlide}
              custom={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  nextSlide()
                } else if (swipe > swipeConfidenceThreshold) {
                  prevSlide()
                }
              }}
              className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgColor} flex items-center justify-center cursor-grab active:cursor-grabbing`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full px-8 md:px-16">
                {/* Content */}
                <motion.div
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-0">{slides[currentSlide].description}</p>
                  <motion.button
                    className="hidden sm:block bg-teal-700 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-800 transition-colors duration-300 shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>

                {/* Video */}
                <motion.div
                  className="flex justify-center lg:justify-end"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="relative">
                    <video
                      src={slides[currentSlide].videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-64 h-[456px] object-cover rounded-2xl shadow-xl"
                      style={{ aspectRatio: "9/16" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                    {/* Video play/pause control overlay */}
                    <motion.button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-teal-700 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <motion.div
              className="bg-teal-700 h-1 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 bg-teal-200 rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-amber-200 rounded-full opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  )
}


export default Swiper
