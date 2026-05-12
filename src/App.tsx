/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  User, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight, 
  Cpu, 
  Zap, 
  Maximize, 
  Layers 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants & Data ---

const PRINTERS = [
  {
    id: 'x1-carbon',
    name: 'X1-Carbon',
    tagline: 'The Desktop Industry Standard',
    price: '$1,199.00',
    image: 'https://images.unsplash.com/photo-1631541496303-68d904797171?q=80&w=1470&auto=format&fit=crop',
    color: 'bg-zinc-900',
    action: 'Learn More'
  },
  {
    id: 'p1s',
    name: 'P1S',
    tagline: 'High Speed Enclosed Printer',
    price: '$699.00',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1287&auto=format&fit=crop',
    color: 'bg-zinc-800',
    action: 'Learn More'
  },
  {
    id: 'a1',
    name: 'A1',
    tagline: 'Multi-Color 3D Printing for Everyone',
    price: '$399.00',
    image: 'https://images.unsplash.com/photo-1631005230953-e5f8f94f923d?q=80&w=1374&auto=format&fit=crop',
    color: 'bg-zinc-100 text-zinc-900',
    action: 'Learn More'
  }
];

const FEATURES = [
  {
    title: 'Up to 500 mm/s',
    description: 'Blazing fast printing speed with 20000 mm/s² acceleration.',
    icon: Zap,
  },
  {
    title: 'Multi-Color Capability',
    description: 'Print up to 16 colors with the Automatic Material System (AMS).',
    icon: Layers,
  },
  {
    title: 'AI Inspection',
    description: 'Automatic bed leveling and first-layer inspection with Micro LiDAR.',
    icon: Cpu,
  },
  {
    title: 'Out of the Box',
    description: 'Pre-assembled and tuned for printing within 15 minutes.',
    icon: Maximize,
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center font-bold text-black text-xl">B</div>
          <span className="text-white font-bold text-lg tracking-tighter hidden sm:block">BAMBU LAB</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Printers', 'AMS', 'Software', 'Store', 'MakerWorld', 'Support'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5 text-white">
          <button id="search-btn" className="hover:text-zinc-400 transition-colors cursor-pointer"><Search size={20} /></button>
          <button id="cart-btn" className="relative hover:text-zinc-400 transition-colors cursor-pointer">
            <ShoppingCart size={20} />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-emerald-500 rounded-full text-[10px] flex items-center justify-center font-bold">0</span>
          </button>
          <button id="user-btn" className="hidden sm:block hover:text-zinc-400 transition-colors cursor-pointer"><User size={20} /></button>
          <button 
            id="mobile-menu-btn"
            className="md:hidden" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-zinc-900 border-t border-zinc-800 p-6 flex flex-col gap-4 md:hidden"
          >
            {['Printers', 'AMS', 'Software', 'Store', 'MakerWorld', 'Support'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white text-lg font-medium py-2 border-b border-zinc-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Media Placeholder */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-emerald-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">NEW RELEASE</span>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-6 tracking-tight">
            X1-CARBON <br /> 
            <span className="text-zinc-400">PRECISION REDEFINED</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            The 3D printer that sets the new standard for accessibility and professional-grade performance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button id="hero-buy-btn" className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-emerald-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer">
              Buy Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button id="hero-learn-btn" className="w-full sm:w-auto px-10 py-4 bg-zinc-900 text-white font-bold rounded-full border border-zinc-800 hover:bg-zinc-800 transition-all duration-300 cursor-pointer">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>

      {/* Down Arrow */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-40"
      >
        <div className="w-px h-12 bg-white mx-auto mb-2" />
        <span className="text-[10px] tracking-widest uppercase">SCROLL</span>
      </motion.div>
    </section>
  );
};

const ProductSection = () => {
  return (
    <section id="printers" className="py-24 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Future is Here</h2>
            <p className="text-zinc-400 text-lg max-w-xl">Choose the printer that fits your workflow. From professional desktop labs to compact home studios.</p>
          </div>
          <a href="#" className="text-emerald-400 flex items-center gap-2 font-medium hover:gap-4 transition-all">
            See All Printers <ChevronRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRINTERS.map((printer, index) => (
            <motion.div
              key={printer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              id={`printer-card-${printer.id}`}
              className={`group relative overflow-hidden rounded-3xl ${printer.color === 'bg-zinc-100 text-zinc-900' ? 'bg-zinc-100' : 'bg-zinc-900'} min-h-[500px] flex flex-col`}
            >
              <div className="p-8 relative z-10">
                <h3 className={`text-3xl font-black mb-2 ${printer.color.includes('text-zinc-900') ? 'text-black' : 'text-white'}`}>{printer.name}</h3>
                <p className={`text-sm mb-4 font-medium ${printer.color.includes('text-zinc-900') ? 'text-zinc-600' : 'text-zinc-400'}`}>{printer.tagline}</p>
                <div className={`text-xl font-bold ${printer.color.includes('text-zinc-900') ? 'text-black' : 'text-white'}`}>{printer.price}</div>
              </div>
              
              <div className="flex-1 relative overflow-hidden flex items-center justify-center p-4">
                <img 
                  src={printer.image} 
                  alt={printer.name} 
                  className="max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-8 relative z-10 flex gap-3">
                <button className={`flex-1 py-3 rounded-full font-bold text-sm transition-all ${
                  printer.color.includes('text-zinc-900') 
                    ? 'bg-black text-white hover:bg-zinc-800' 
                    : 'bg-white text-black hover:bg-emerald-400 hover:text-white'
                }`}>
                  Buy Now
                </button>
                <button className={`flex-1 py-3 border rounded-full font-bold text-sm transition-all ${
                  printer.color.includes('text-zinc-900') 
                    ? 'border-zinc-300 text-zinc-700 hover:bg-zinc-200' 
                    : 'border-zinc-700 text-zinc-300 hover:bg-zinc-800'
                }`}>
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  return (
    <section id="features" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight">INNOVATION <br /> IN EVERY LAYER</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FEATURES.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 hover:bg-zinc-900 transition-colors"
                >
                  <feature.icon className="text-emerald-400 mb-4" size={32} />
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-900 flex items-center justify-center p-8">
              <img 
                src="https://images.unsplash.com/photo-1631541496303-68d904797171?q=80&w=1470&auto=format&fit=crop" 
                alt="Printer Tech"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white text-black p-4 rounded-full font-bold flex items-center gap-2">
                   View Tech Specs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AMSSection = () => {
  return (
    <section id="ams" className="py-24 bg-gradient-to-b from-black to-zinc-900 text-white flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <span className="text-emerald-400 font-bold text-sm tracking-widest uppercase mb-4 block">AMS SYSTEM</span>
          <h2 className="text-4xl md:text-7xl font-black mb-8">COLOR YOUR CREATIONS</h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Experience the freedom of multi-material printing. Mix and match up to 16 colors seamlessly with our plug-and-play Automatic Material System.
          </p>
          <div className="relative max-w-4xl mx-auto mb-12">
             <div className="flex justify-center gap-2 mb-8">
               {['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#6B7280', '#000000'].map((color, i) => (
                 <div key={i} className="w-12 h-12 rounded-full border-2 border-white/20 shadow-xl" style={{ backgroundColor: color }} />
               ))}
             </div>
             <img 
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd750?q=80&w=1470&auto=format&fit=crop" 
              alt="AMS" 
              className="w-full h-auto rounded-3xl shadow-2xl"
             />
          </div>
          <button className="px-12 py-5 bg-emerald-500 hover:bg-emerald-400 text-white font-black rounded-full transition-all flex items-center gap-2 mx-auto">
             Explore AMS <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white pt-24 pb-12 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center font-bold text-black text-xl">B</div>
              <span className="text-white font-bold text-xl tracking-tighter">BAMBU LAB</span>
            </div>
            <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
              Bambu Lab is a consumer tech company focusing on desktop 3D printers. Since its inception, Bambu Lab has been building state-of-the-art 3D printers that break the barriers between the digital and physical worlds.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholder */}
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-emerald-500 transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-white/20 rounded-sm" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-400">Products</h5>
            <ul className="flex flex-col gap-3 text-zinc-500 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">X1 Series</li>
              <li className="hover:text-white transition-colors cursor-pointer">P1 Series</li>
              <li className="hover:text-white transition-colors cursor-pointer">A1 Series</li>
              <li className="hover:text-white transition-colors cursor-pointer">AMS System</li>
              <li className="hover:text-white transition-colors cursor-pointer">Bambu Studio</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-400">Support</h5>
            <ul className="flex flex-col gap-3 text-zinc-500 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Download</li>
              <li className="hover:text-white transition-colors cursor-pointer">Wiki & Guides</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Order Status</li>
              <li className="hover:text-white transition-colors cursor-pointer">Commercial Sales</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-400">Company</h5>
            <ul className="flex flex-col gap-3 text-zinc-500 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Brand Policy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Newsroom</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-400">Newsletter</h5>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-1 flex">
              <input type="text" placeholder="Email" className="bg-transparent px-3 py-2 flex-1 outline-none text-sm" />
              <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded-md hover:bg-emerald-400 transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-600">
          <div className="flex gap-8">
            <span>© 2024 Bambu Lab Inc. All rights reserved.</span>
            <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-black min-h-screen selection:bg-emerald-500 selection:text-white overflow-x-hidden pt-16">
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <FeatureSection />
        <AMSSection />
      </main>
      <Footer />
    </div>
  );
}
