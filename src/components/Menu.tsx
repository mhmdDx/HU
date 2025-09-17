"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Menu = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  const menuCategories = [
    {
      id: "coffee",
      name: "Coffee & Espresso",
      items: [
        { name: "FRENCH Coffee", price: "69", description: "قهوه فرنساوي" },
        { name: "NUTELLA Coffee", price: "86", description: "قهوه نوتيلا" },
        { name: "TURKISH Coffee S", price: "52", description: "قهوه تركي سنجل" },
        { name: "TURKISH Coffee D", price: "63", description: "قهوه تركي دابل" },
      ],
    },
    {
      id: "esspreso",
      name: " Espresso",
      items: [
        { name: "Espresso", price: "52 / 63", description: "إسبريسو" },
        { name: "Macchiato", price: "57 / 69", description: "ماكياتو" },
        { name: "Cappuccino", price: "92", description: "كابتشينو" },
        { name: "Café Latte", price: "97", description: "كافيه لاتيه" },
        { name: "Café Latte Flavour", price: "109", description: "كافيه لاتيه بنكهة" },
        { name: "Salted Caramel Latte", price: "109", description: "سولتد كراميل لاتيه" },
        { name: "Flat White", price: "103", description: "فلات وايت" },
        { name: "Cookies Latte", price: "109", description: "لاتيه بالكوكيز" },
        { name: "Pistachio Latte", price: "137", description: "لاتيه بالفستق" },
        { name: "Cinnamon Roll Latte", price: "109", description: "قرفة لاتيه رول" },
        { name: "Corto Classic", price: "86", description: "كورتو كلاسيك" },
        { name: "Corto Flavour", price: "97", description: "كورتو بنكهة" },
        { name: "Spanish Latte", price: "109", description: "سبانش لاتيه" },
        { name: "Caramel Spanish Latte", price: "120", description: "كراميل سبانش لاتيه" },
        { name: "Spanish Latte Pistachio", price: "143", description: "سبانش لاتيه بالفستق" },
        { name: "Hazelnut Spanish Latte", price: "120", description: "سبانش لاتيه بالبندق" },
        { name: "Dark Mocha", price: "103", description: "دارك موكا" },
        { name: "White Mocha", price: "109", description: "وايت موكا" },
        { name: "Caramel Macchiato", price: "109", description: "كراميل ماكياتو" },
        { name: "Americano", price: "86", description: "أمريكانو" },
      ],
    },
    {
      id: "iced",
      name: "Iced Coffee",
      items: [
        { name: "Ice Latte", price: "97", description: "آيس لاتيه" },
        { name: "Ice Flat White", price: "103", description: "آيس فلات وايت" },
        { name: "Ice Mocha", price: "103", description: "آيس موكا" },
        { name: "Ice Vanilla Latte", price: "109", description: "آيس فانيلا لاتيه" },
        { name: "Ice Caramel Latte", price: "109", description: "آيس كراميل لاتيه" },
        { name: "Ice Latte Cookies", price: "109", description: "آيس لاتيه بالكوكيز" },
        { name: "Ice Latte Pistachio", price: "137", description: "آيس لاتيه بالفستق" },
        { name: "Ice Cinnamon Roll Latte", price: "109", description: "آيس لاتيه قرفة رول" },
        { name: "Ice Salted Caramel", price: "109", description: "آيس سولتد كراميل" },
        { name: "Ice Caramel Macchiato", price: "109", description: "آيس كراميل ماكياتو" },
        { name: "Ice White Mocha", price: "109", description: "آيس وايت موكا" },
        { name: "Ice Spanish Latte", price: "109", description: "آيس سبانش لاتيه" },
        { name: "Ice Spanish Pistachio", price: "143", description: "آيس سبانش فستق" },
        { name: "Ice Spanish Caramel", price: "126", description: "آيس سبانش كراميل" },
        { name: "Ice Spanish Hazelnut", price: "126", description: "آيس سبانش بندق" },
      ],
    },
    {
      id: "specialties",
      name: "Frappé & Specialties",
      items: [
        { name: "COFFEE Frappé", price: "109", description: "قهوه فرابيه" },
        { name: "Caramel Frappé", price: "109", description: "كراميل فرابيه" },
        { name: "Mocha Frappé", price: "109", description: "موكا فرابيه" },
        { name: "Cookies Frappé", price: "126", description: "كوكيز فرابيه" },
        { name: "White Mocha Frappé", price: "120", description: "وايت موكا فرابيه" },
        { name: "Salted Caramel Frappé", price: "126", description: "سولتد كراميل فرابيه" },
        { name: "Pistachio Frappé", price: "150", description: "فرابيه فستق" },
      ],
    },
    {
      id: "noncoffee",
      name: "Non-Coffee",
      items: [
        { name: "Tea", price: "46", description: "شاي" },
        { name: "Tea Flover", price: "57", description: "شاي بنكهة" },
        { name: "Hot Chocolate classic", price: "103", description: "هوت شوكلت" },
        { name: "Hot Chocolate cookies", price: "120", description: "هوت شوكلت بكوكيز" },
        { name: "Hot Chocolate marshmallow", price: "120", description: "هوت شوكلت بمارشميلو" },
        { name: "Salted caramel Hot Chocolate", price: "120", description: "هوت شوكلت كراميل سولتد" },
        { name: "Hot Chocolate Nuts", price: "120", description: "هوت شوكلت بمكسرات" },
        { name: "Ice Tea", price: "92", description: "شاي ايس" },
        { name: "Ice Chocolate", price: "103", description: "ايس شوكلت" },
      ],
    },
    {
      id: "shakes",
      name: "Milkshakes & Smoothies",
      items: [
        { name: "Vanilla", price: "103", description: "فانيليا" },
        { name: "Chocolate / Caramel", price: "109", description: "شوكولاتة / كراميل" },
        { name: "Blueberry", price: "109", description: "توت أزرق" },
        { name: "Cookies Cream", price: "120", description: "كوكيز وكريمة" },
        { name: "Strawberry", price: "120", description: "فراولة" },
        { name: "Nutella", price: "120", description: "نوتيلا" },
        { name: "Kiwi Mango", price: "120", description: "كيوي مانجو" },
      ],
    },
    {
      id: "matcha",
      name: "matcha",
      items: [
        { name: "Hot Matcha", price: "109", description: "هوت ماتشا" },
        { name: "Ice Matcha", price: "109", description: "ايس ماتشا" },
        { name: "Ice Matcha Mango", price: "137", description: "ايس ماتشا مانجو" },
        { name: "Ice Matcha Strawberry", price: "137", description: "ايس ماتشا فراوله" },
        { name: "Matcha Spanish Late", price: "137", description: "ماتشا سبانش لاتيه" },
        { name: "Matcha White Chocolate", price: "137", description: "ماتشا سبانش لاتيه" },
      ],
    },
    {
      id: "SMOOTHIES",
      name: "SMOOTHIES",
      items: [
        { name: "Mango Passion Fruit", price: "120", description: "مانجو باشون فروت" },
        { name: "Mango Kiwi", price: "120", description: "مانجو كيوي" },
        { name: "Kiwi Passion Fruit", price: "120", description: "كيوي باشون فروت" },
        { name: "Blueberry", price: "120", description: "توت أزرق" },
        { name: "Passion Fruit", price: "120", description: "باشون فروت" },
        { name: "Mango Peach", price: "120", description: "مانجو خوخ" },
        { name: "Pina Colada", price: "120", description: "بينا كولادا" },
        { name: "Lemon Mint", price: "109", description: "ليمون بالنعناع" },
      ],
    },
    {
      id: "mojito",
      name: "Mojito & Refreshers",
      items: [
        { name: "Blueberry", price: "109", description: "توت أزرق" },
        { name: "Passion Fruit", price: "109", description: "باشون فروت" },
        { name: "Kiwi", price: "109", description: "كيوي" },
        { name: "Peach", price: "109", description: "خوخ" },
        { name: "Pineapple", price: "109", description: "أناناس" },
        { name: "Passion Pineapple", price: "109", description: "باشون فروت اناناس" },
        { name: "Mojito Redbull", price: "149", description: "موهيتو ريدبول" },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      items: [
        { name: "Carrot Cake", price: "112", description: "كاروت كيك" },
        { name: "Honey Cake Classic", price: "97", description: "هوني كيك كلاسيك" },
        { name: "Tiramisu Cake", price: "109", description: "تيراميسو كيك" },
        { name: "Trafel Cake", price: "109", description: "ترافل كيك" },
        { name: "Matelda Cake", price: "114", description: "ماتيلدا كيك" },
        { name: "Eclair Nuttella-Kinder", price: "80", description: "إكلير نوتيلا كيندر" },
        { name: "Eclair Pistachio", price: "86", description: "إكلير بيستاشيو" },
        { name: "Chocolate Chunk Cookies", price: "69", description: "كوكيز شوكليت شانك" },
        { name: "English Cake", price: "54", description: "انجليش كيك" },
        { name: "Brownies", price: "103", description: "براونيز" },
        { name: "San Sebastian Topping", price: "143", description: "سان سباستيان توبيج" },
        { name: "San Sebastian Pistachio", price: "160", description: "سان سباستيان بيستاشيو" },
      ],
    },
    {
      id: "pastries",
      name: "Croissants & Croffles",
      items: [
        { name: "Plain", price: "75", description: "سادة" },
        { name: "Smoked Turkey", price: "149", description: "تركي مدخن" },
        { name: "Salami", price: "149", description: "سلامي" },
        { name: "Feta Cheese", price: "137", description: "فيتا وزعتر" },
        { name: "Mix Cheese", price: "149", description: "ميكس جبن" },
      ],
    },
    {
      id: "CROFFLE",
      name: "CROFFLE",
      items: [
        { name: "Ferrero Rocher", price: "143", description: "فيريرو روشيه" },
        { name: "Nutella", price: "149", description: "نوتيلا" },
        { name: "Pistachio", price: "160", description: "فستق" },
        { name: "White Chocolate", price: "143", description: "شوكولاتة بيضاء" },
        { name: "Kinder", price: "149", description: "كيندر" },
        { name: "Smoked Turkey", price: "149", description: "تركي مدخن" },
        { name: "Feta & Zaatar", price: "137", description: "فيتا وزعتر" },
        { name: "Mix Cheese", price: "149", description: "ميكس جبن" },
        { name: "Salami", price: "149", description: "سلامي" },
      ],
    },
  ]

  return (
    <section id="menu" className="section-container bg-gray-50" ref={sectionRef}>
      <motion.div
        className="text-center mb-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="hush-chip mx-auto mb-6" variants={itemVariants}>
          Our Menu
        </motion.div>
        <motion.h2 className="section-title text-gray-900 mb-4" variants={itemVariants}>
          Crafted with Love, Served with Care
        </motion.h2>
        <motion.p className="section-subtitle mx-auto" variants={itemVariants}>
          Discover our carefully curated selection of premium beverages and artisanal treats
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Tabs defaultValue="coffee" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-0 border-b border-gray-200 mb-20">
            <TabsTrigger value="coffee" className="text-xs sm:text-sm">
              Turkish Coffee 
            </TabsTrigger>
            <TabsTrigger value="esspreso" className="text-xs sm:text-">
              Espresso
            </TabsTrigger>
            <TabsTrigger value="iced" className="text-xs sm:text-">
              Iced Coffee
            </TabsTrigger>
            <TabsTrigger value="specialties" className="text-xs sm:text-">
              Frappé 
            </TabsTrigger>
            <TabsTrigger value="matcha" className="text-xs sm:text-">
              Matcha
            </TabsTrigger>
            <TabsTrigger value="noncoffee" className="text-xs sm:text-">
              Non-Coffee
            </TabsTrigger>
            <TabsTrigger value="shakes" className="text-xs sm:text-">
              Milkshakes
            </TabsTrigger>
            <TabsTrigger value="SMOOTHIES" className="text-xs :text-">
              Smoothies
            </TabsTrigger>
            <TabsTrigger value="mojito" className="text-xs sm:text-">
              Mojito 
            </TabsTrigger>
            <TabsTrigger value="desserts" className="text-xs sm:text-">
              Desserts
            </TabsTrigger>
            <TabsTrigger value="pastries" className="text-xs sm:text-">
              Croissants
            </TabsTrigger>
            <TabsTrigger value="CROFFLE" className="text-xs sm:text-">
              Croffles
            </TabsTrigger>
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {category.items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    custom={index}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg font-semibold text-gray-900">{item.name}</CardTitle>
                          <span className="text-lg font-bold text-primary">{item.price}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  )
}

export default Menu
