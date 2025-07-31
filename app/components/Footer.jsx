"use client";
import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".footer-item", {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        toggleActions: "play none none none"
      }
    });
  }, { scope: footerRef });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const socialLinks = [
    { href: "https://discord.com", icon: <FaDiscord />, name: "Discord" },
    { href: "https://twitter.com", icon: <FaTwitter />, name: "Twitter" },
    { href: "https://youtube.com", icon: <FaYoutube />, name: "YouTube" },
    { href: "https://medium.com", icon: <FaMedium />, name: "Medium" },
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative w-screen bg-gradient-to-b from-[#5542ff] to-[#3a2bb5] py-12 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div 
            className="footer-item"
            initial={{ opacity: 0 }}
          >
            <h3 className="text-xl font-bold mb-4">Zentry</h3>
            <p className="text-sm opacity-80">
              The world's largest shared adventure where gaming meets the new economy.
            </p>
          </motion.div>

          <motion.div 
            className="footer-item"
            initial={{ opacity: 0 }}
          >
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {['Radiant', 'Zigma', 'Nexus', 'Azul'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm opacity-80 hover:opacity-100 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-item"
            initial={{ opacity: 0 }}
          >
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'Whitepaper', 'Blog', 'FAQ'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm opacity-80 hover:opacity-100 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-item"
            initial={{ opacity: 0 }}
          >
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-[#ffcc00] transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-sm opacity-80">
              Subscribe to our newsletter for updates
            </p>
            <div className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/20 text-white placeholder-white/50 px-4 py-2 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ffcc00] w-full"
              />
              <button className="bg-[#ffcc00] text-black px-4 py-2 rounded-r-lg text-sm font-medium hover:bg-[#ffdd33] transition">
                Join
              </button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="footer-item text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
          >
            © {new Date().getFullYear()} Zentry. All rights reserved
          </motion.p>

          <div className="flex space-x-6">
            <motion.a 
              href="#privacy-policy" 
              className="footer-item text-sm hover:underline"
              initial={{ opacity: 0 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#terms" 
              className="footer-item text-sm hover:underline"
              initial={{ opacity: 0 }}
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#cookies" 
              className="footer-item text-sm hover:underline"
              initial={{ opacity: 0 }}
            >
              Cookie Policy
            </motion.a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showScroll && (
          <motion.button
            onClick={scrollToTop}
            className="fixed right-6 bottom-6 bg-[#ffcc00] text-black p-3 rounded-full shadow-lg z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;