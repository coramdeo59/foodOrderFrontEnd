import React, { useState } from 'react'
import { Menu, Globe, Settings, PlusCircle, Plus, EllipsisVertical } from 'lucide-react'
import shiro from '../assets/Shiro.jpg'

const categories = [
  { id: 1, name: 'Habeshan Dishes', dishCount: 8, image: shiro },
  { id: 2, name: 'Burgers', dishCount: 12, image: shiro },
  { id: 3, name: 'Pizzas', dishCount: 6, image: shiro },
  { id: 4, name: 'Pastas', dishCount: 3, image: shiro },
]

const dishes = Array(6).fill(null).map((_, index) => ({
  id: index + 1,
  name: 'Beyaynet',
  ingredients: 'Miser, Shiro, Gomen, Local Chilli',
  price: 250.00,
  rating: 4.5,
  image: '/placeholder.svg',
  category: 'Habeshan Dishes'
}))

export default function Dashboard() {
  const [language, setLanguage] = useState('en')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'am' : 'en')
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="flex justify-between items-center p-4 bg-gray-800">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="mr-4 lg:hidden">
            <Menu />
          </button>
          <h1 className="text-2xl font-bold">FoodZone</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleLanguage} className="flex items-center cursor-pointer">
            <Globe className="mr-2" />
            {language === 'en' ? 'En' : 'አማ'}
          </button>
          <button> 
            <Settings />
          </button>
          <button className="bg-[#FDCF0E] text-black px-4 py-2 flex justify-between items-center gap-2 rounded-full">
            <Plus className='font-semibold' /> Add Dish
          </button>
          <button className="bg-[#FDCF0E] text-black px-4 py-2 rounded-full flex justify-between items-center gap-2">
            <Plus className='font-semibold' /> Add Category
          </button>
        </div>
      </header>

      <div className="flex">

        {/* Main content */}
        <main className="flex-1 p-4">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#FDCF0E]">Categories</h2>
            <p className="text-gray-400 mb-4">4 Categories</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map(category => (
                <div key={category.id} className="relative bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={shiro}
                    alt={category.name}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                    <p className="text-sm text-gray-300">{category.dishCount} Dishes</p>
                  </div>
                  <div className="absolute top-2 right-2 space-x-2">
                    <button className="text-white hover:text-red-500">
                      <EllipsisVertical />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-bold text-[#FDCF0E]">All Dishes</h2>
                <p className="text-gray-400">89 Dishes</p>
              </div>
              <button className="border border-yellow-300 text-white px-4 py-2 rounded-full">
                + Add Dish
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {dishes.map(dish => (
                <div key={dish.id} className="bg-gray-800 rounded-lg overflow-hidden flex">
                  <div className='w-full h-48 relative'>
                    <img
                      src={shiro}
                      alt={dish.name}
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 space-x-2">
                      <button className="text-white hover:text-red-500">
                        <EllipsisVertical />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{dish.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{dish.ingredients}</p>
                    <div className="flex justify-between flex-col">
                      <span className="text-white font-bold">{dish.price.toFixed(2)} ETB</span>
                      <div className="flex items-center">
                        {Array(5).fill(null).map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(dish.rating) ? 'text-[#FDCF0E]' : 'text-gray-400'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-1 text-sm text-gray-400">{dish.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
