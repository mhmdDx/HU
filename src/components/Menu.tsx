"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("coffee")

  const menuCategories = [
    {
      id: "coffee",
      name: "Turkish Coffee",
      items: [
        { name: "FRENCH Coffee", price: "69", description: "قهوه فرنساوي", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop&crop=center" },
        { name: "NUTELLA Coffee", price: "86", description: "قهوه نوتيلا", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
        { name: "TURKISH Coffee S", price: "52", description: "قهوه تركي سنجل", image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=300&h=200&fit=crop&crop=center" },
        { name: "TURKISH Coffee D", price: "63", description: "قهوه تركي دابل", image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=300&h=200&fit=crop&crop=center" },
      ],
    },
    {
      id: "espresso",
      name: "Espresso",
      items: [
        { name: "Espresso", price: "S: 52 / D: 63", description: "إسبريسو", image: "/text-mask-image.jpg" },
        { name: "Macchiato", price: "57 / 69", description: "ماكياتو", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop&crop=center" },
        { name: "Cappuccino", price: "92", description: "كابتشينو", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&h=200&fit=crop&crop=center" },
        { name: "Café Latte", price: "97", description: "كافيه لاتيه", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=300&h=200&fit=crop&crop=center" },
        { name: "Café Latte Flavour", price: "109", description: "كافيه لاتيه بنكهة", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
        { name: "Salted Caramel Latte", price: "109", description: "سولتد كراميل لاتيه", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&h=200&fit=crop&crop=center" },
        { name: "Flat White", price: "103", description: "فلات وايت", image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=300&h=200&fit=crop&crop=center" },
        { name: "Cookies Latte", price: "109", description: "لاتيه بالكوكيز", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
        { name: "Pistachio Latte", price: "137", description: "لاتيه بالفستق", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=300&h=200&fit=crop&crop=center" },
        { name: "Cinnamon Roll Latte", price: "109", description: "قرفة لاتيه رول", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&h=200&fit=crop&crop=center" },
        { name: "Corto Classic", price: "86", description: "كورتو كلاسيك", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop&crop=center" },
        { name: "Corto Flavour", price: "97", description: "كورتو بنكهة", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop&crop=center" },
        { name: "Spanish Latte", price: "109", description: "سبانش لاتيه", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=300&h=200&fit=crop&crop=center" },
        { name: "Caramel Spanish Latte", price: "120", description: "كراميل سبانش لاتيه", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&h=200&fit=crop&crop=center" },
        { name: "Spanish Latte Pistachio", price: "143", description: "سبانش لاتيه بالفستق", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=300&h=200&fit=crop&crop=center" },
        { name: "Hazelnut Spanish Latte", price: "120", description: "سبانش لاتيه بالبندق", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=300&h=200&fit=crop&crop=center" },
        { name: "Dark Mocha", price: "103", description: "دارك موكا", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
        { name: "White Mocha", price: "109", description: "وايت موكا", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
        { name: "Caramel Macchiato", price: "109", description: "كراميل ماكياتو", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&h=200&fit=crop&crop=center" },
        { name: "Americano", price: "86", description: "أمريكانو", image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=300&h=200&fit=crop&crop=center" },
      ],
    },
    {
      id: "iced",
      name: "Iced Coffee",
      items: [
        { name: "Ice Latte", price: "97", description: "آيس لاتيه", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Flat White", price: "103", description: "آيس فلات وايت", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Mocha", price: "103", description: "آيس موكا", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Vanilla Latte", price: "109", description: "آيس فانيلا لاتيه", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Caramel Latte", price: "109", description: "آيس كراميل لاتيه", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Latte Cookies", price: "109", description: "آيس لاتيه بالكوكيز", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Latte Pistachio", price: "137", description: "آيس لاتيه بالفستق", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Cinnamon Roll Latte", price: "109", description: "آيس لاتيه قرفة رول", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Salted Caramel", price: "109", description: "آيس سولتد كراميل", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Caramel Macchiato", price: "109", description: "آيس كراميل ماكياتو", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice White Mocha", price: "109", description: "آيس وايت موكا", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Spanish Latte", price: "109", description: "آيس سبانش لاتيه", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Spanish Pistachio", price: "143", description: "آيس سبانش فستق", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Spanish Caramel", price: "126", description: "آيس سبانش كراميل", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Spanish Hazelnut", price: "126", description: "آيس سبانش بندق", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&crop=center" },
      ],
    },
    {
      id: "frappe",
      name: "Frappé",
      items: [
        { name: "COFFEE Frappé", price: "109", description: "قهوه فرابيه", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop&crop=center" },
        { name: "Caramel Frappé", price: "109", description: "كراميل فرابيه", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop&crop=center" },
        { name: "Mocha Frappé", price: "109", description: "موكا فرابيه", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop&crop=center" },
        { name: "Cookies Frappé", price: "126", description: "كوكيز فرابيه", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop&crop=center" },
        { name: "White Mocha Frappé", price: "120", description: "وايت موكا فرابيه", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop&crop=center" },
        { name: "Salted Caramel Frappé", price: "126", description: "سولتد كراميل فرابيه", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop&crop=center" },
        { name: "Pistachio Frappé", price: "150", description: "فرابيه فستق", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop&crop=center" },
      ],
    },
    {
      id: "matcha",
      name: "Matcha",
      items: [
        { name: "Hot Matcha", price: "109", description: "هوت ماتشا", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Matcha", price: "109", description: "ايس ماتشا", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Matcha Mango", price: "137", description: "ايس ماتشا مانجو", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Matcha Strawberry", price: "137", description: "ايس ماتشا فراوله", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=200&fit=crop&crop=center" },
        { name: "Matcha Spanish Latte", price: "137", description: "ماتشا سبانش لاتيه", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=200&fit=crop&crop=center" },
        { name: "Matcha White Chocolate", price: "137", description: "ماتشا وايت شوكولاتة", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=200&fit=crop&crop=center" },
      ],
    },
    {
      id: "noncoffee",
      name: "Non-Coffee",
      items: [
        { name: "Tea", price: "46", description: "شاي", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center" },
        { name: "Tea Flavor", price: "57", description: "شاي بنكهة", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center" },
        { name: "Hot Chocolate Classic", price: "103", description: "هوت شوكلت", image: "https://images.unsplash.com/photo-1542990253-0b8be20ca69?w=300&h=200&fit=crop&crop=center" },
        { name: "Hot Chocolate Cookies", price: "120", description: "هوت شوكلت بكوكيز", image: "https://images.unsplash.com/photo-1542990253-0b8be20ca69?w=300&h=200&fit=crop&crop=center" },
        { name: "Hot Chocolate Marshmallow", price: "120", description: "هوت شوكلت بمارشميلو", image: "https://images.unsplash.com/photo-1542990253-0b8be20ca69?w=300&h=200&fit=crop&crop=center" },
        { name: "Salted Caramel Hot Chocolate", price: "120", description: "هوت شوكلت كراميل سولتد", image: "https://images.unsplash.com/photo-1542990253-0b8be20ca69?w=300&h=200&fit=crop&crop=center" },
        { name: "Hot Chocolate Nuts", price: "120", description: "هوت شوكلت بمكسرات", image: "https://images.unsplash.com/photo-1542990253-0b8be20ca69?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Tea", price: "92", description: "شاي ايس", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop&crop=center" },
        { name: "Ice Chocolate", price: "103", description: "ايس شوكلت", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop&crop=center" },
      ],
    },
    {
      id: "shakes",
      name: "Milkshakes",
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
      id: "smoothies",
      name: "Smoothies",
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
        { name: "Trifle Cake", price: "109", description: "ترافل كيك" },
        { name: "Matilda Cake", price: "114", description: "ماتيلدا كيك" },
        { name: "Eclair Nutella-Kinder", price: "80", description: "إكلير نوتيلا كيندر" },
        { name: "Eclair Pistachio", price: "86", description: "إكلير بيستاشيو" },
        { name: "Chocolate Chunk Cookies", price: "69", description: "كوكيز شوكليت شانك" },
        { name: "English Cake", price: "54", description: "انجليش كيك" },
        { name: "Brownies", price: "103", description: "براونيز" },
        { name: "San Sebastian Topping", price: "143", description: "سان سباستيان توبيج" },
        { name: "San Sebastian Pistachio", price: "160", description: "سان سباستيان بيستاشيو" },
      ],
    },
    {
      id: "croissants",
      name: "Croissants",
      items: [
        { name: "Plain", price: "75", description: "سادة" },
        { name: "Smoked Turkey", price: "149", description: "تركي مدخن" },
        { name: "Salami", price: "149", description: "سلامي" },
        { name: "Feta Cheese", price: "137", description: "فيتا وزعتر" },
        { name: "Mix Cheese", price: "149", description: "ميكس جبن" },
      ],
    },
    {
      id: "croffles",
      name: "Croffles",
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

  const activeItems = menuCategories.find(cat => cat.id === activeCategory)?.items || []

  return (
    <section id="menu" className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block bg-green-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-green-200">
            Our Menu
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4 font-serif">
            Crafted with Love, Served with Care
          </h1>
          <p className="text-lg text-teal-700 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium beverages and artisanal treats
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-teal-700 text-white shadow-lg transform scale-105'
                    : 'bg-white text-teal-800 hover:bg-green-100 border border-green-200 hover:border-emerald-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeItems.map((item, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-emerald-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Price Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-teal-900 group-hover:text-teal-700 transition-colors duration-300 leading-tight">
                      {item.name}
                    </h3>
                  </div>
                  <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md ml-3 flex-shrink-0">
                    {item.price} EGP
                  </div>
                </div>

                {/* Description */}
                <p className="text-teal-600 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>

                {/* Hover Effect Accent */}
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-300 mt-4"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-4 w-16 h-16 bg-emerald-300 rounded-full opacity-10 animate-bounce"></div>
      </div>
    </section>
  )
}

export default Menu
