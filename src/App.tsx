import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Github, 
  Globe, 
  Mail, 
  Menu, 
  MessageSquare, 
  Twitter, 
  Zap,
  X
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      title: "Fast Performance",
      description: "Optimized for speed and efficiency to ensure your users have the best experience.",
      icon: <Zap className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Modern Design",
      description: "Crafted with attention to detail, following the latest design trends and best practices.",
      icon: <Globe className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Responsive Layout",
      description: "Looks great on any device, from mobile phones to large desktop monitors.",
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Zap className="text-white w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold italic">Lumina</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Features</a>
              <a href="#about" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">About</a>
              <a href="#contact" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Contact</a>
              <button className="bg-stone-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-sm">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-stone-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-stone-200 px-4 py-6 flex flex-col gap-4"
          >
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-stone-600">Features</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-stone-600">About</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-stone-600">Contact</a>
            <button className="bg-stone-900 text-white px-5 py-3 rounded-xl text-center font-medium">
              Get Started
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-emerald-100 text-emerald-800 rounded-full">
            Introducing Lumina 2.0
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-stone-900 mb-6 leading-[1.1]">
            Build something <span className="italic text-emerald-600 underline decoration-emerald-200 underline-offset-8">extraordinary</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            A minimalist approach to building modern web experiences. 
            Focus on what matters most: your content and your users.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 group">
              Start Building
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white border border-stone-200 text-stone-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-stone-50 transition-all">
              View Demo
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 relative"
        >
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-stone-200 bg-stone-100">
            <img 
              src="https://picsum.photos/seed/minimal/1200/675" 
              alt="Platform Preview" 
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-100 rounded-full -z-10 blur-2xl opacity-60" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-stone-200 rounded-full -z-10 blur-3xl opacity-40" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Everything you need</h2>
            <p className="text-stone-600 max-w-xl mx-auto">
              Our platform provides all the tools necessary to launch your next big project with confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-stone-50 border border-stone-100 transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-stone-100 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-stone-900 rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to transform your workflow?</h2>
            <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of creators who are already using Lumina to build the future of the web.
            </p>
            <button className="bg-white text-stone-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition-all">
              Get Started for Free
            </button>
          </div>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-400 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="mt-auto py-12 border-t border-stone-200 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Zap className="text-white w-5 h-5" />
                </div>
                <span className="font-serif text-xl font-bold italic">Lumina</span>
              </div>
              <p className="text-stone-500 max-w-xs mb-6">
                Crafting digital experiences that inspire and connect people across the globe.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-white rounded-full border border-stone-200 text-stone-600 hover:text-emerald-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white rounded-full border border-stone-200 text-stone-600 hover:text-emerald-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white rounded-full border border-stone-200 text-stone-600 hover:text-emerald-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-stone-500 text-sm">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-stone-500 text-sm">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-400 text-xs">
            <p>© 2024 Lumina Technologies Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-stone-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-stone-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-stone-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-stone-900 text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-50">
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
}
