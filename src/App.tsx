import React from 'react';
import { ShoppingBag, Instagram, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
              {/* Header text removed */}
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="font-bold hover:text-[#30B8B8] transition-colors">SHOP</a>
              <a href="#" className="font-bold hover:text-[#30B8B8] transition-colors">ABOUT</a>
              <a href="#" className="font-bold hover:text-[#30B8B8] transition-colors">CONTACT</a>
            </nav>
            <button className="p-2 hover:bg-[#30B8B8]/10 rounded-full transition-colors">
              <ShoppingBag className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1573832035811-123748989ea5?auto=format&fit=crop&w=2850&q=80"
              alt="Philippine Street Scene"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tight">
              <span className="steadly-text text-[#D90429]">STEADLY</span>
              <span className="corp-text">CORP</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold mb-12 tracking-wide text-gradient">
              🔥 Fresh Tees & Stickers. Built for the streets. Stay unique. 🔥
            </p>
            <button className="bg-[#D90429] text-white px-12 py-4 rounded-none font-bold text-lg uppercase btn-hover border-2 border-[#30B8B8]">
              Shop Now
            </button>
          </div>
        </div>

        {/* Featured Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Limited Drops",
                description: "Exclusive designs, limited quantities. Don't miss out.",
                image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Custom Stickers",
                description: "Rep your style with our premium sticker collection.",
                image: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Street Essentials",
                description: "Carefully curated pieces for the urban explorer.",
                image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
              }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2">
                      <span className="text-[#D90429]">{item.title.split(' ')[0]}</span>
                      <span className="text-[#30B8B8]"> {item.title.split(' ')[1]}</span>
                    </h3>
                    <p className="text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t-4 border-[#30B8B8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-lg font-bold">
              © 2025 <span className="text-[#D90429]">Steadly</span><span className="text-[#30B8B8]">Corp</span>. Keep it real. Keep it creative.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#D90429] hover:text-[#30B8B8] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#D90429] hover:text-[#30B8B8] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;