"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Contact = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  }

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const formCardVariants = {
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
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2,
      },
    },
  }

  return (
    <section id="contact" className="section-container bg-white overflow-hidden" ref={sectionRef}>
      <motion.div
        className="text-center mb-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="hush-chip mx-auto mb-6" variants={itemVariants}>
          Get in Touch
        </motion.div>
        <motion.h2 className="section-title text-gray-900 mb-4" variants={itemVariants}>
          Visit Us or Get in Touch
        </motion.h2>
        <motion.p className="section-subtitle mx-auto" variants={itemVariants}>
          We'd love to hear from you. Come visit our cozy café or reach out with any questions.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: MapPin,
                title: "Location",
                content: (
                  <p className="text-gray-600" dir="rtl">
                    ٦٦ شارع فؤاد بجوار السفاره اللبنانيه
                    <br />
                    12شارع فرح طريق الجيش كامب شيزار
                    <br />
                  </p>
                ),
              },
              {
                icon: Phone,
                title: "Phone",
                content: (
                  <p className="text-gray-600">
                    (555) 123-4567
                    <br />
                    Call for reservations
                  </p>
                ),
              },
              {
                icon: Clock,
                title: "Hours",
                content: (
                  <p className="text-gray-600">
                    Mon-Fri: 6:00 AM - 9:00 PM
                    <br />
                    Sat-Sun: 7:00 AM - 10:00 PM
                  </p>
                ),
              },
              {
                icon: Mail,
                title: "Email",
                content: (
                  <p className="text-gray-600">
                    hello@hushcoffee.com
                    <br />
                    We'll get back to you soon
                  </p>
                ),
              },
            ].map((item, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover">
                <Card className="border-0 shadow-sm bg-gray-50 h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <motion.div className="p-2 bg-primary/10 rounded-lg" variants={iconVariants} whileHover="hover">
                        <item.icon className="h-5 w-5 text-primary" />
                      </motion.div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>{item.content}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={formCardVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-center">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div variants={itemVariants}>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">First Name</label>
                  <Input placeholder="Your first name" />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Last Name</label>
                  <Input placeholder="Your last name" />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Subject</label>
                <Input placeholder="What's this about?" />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Message</label>
                <Textarea placeholder="Tell us what's on your mind..." className="min-h-[120px]" />
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="button-primary w-full">Send Message</Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
