"use client";
import React, { useRef } from 'react';
import Button from './Button';
import { TiInfoLargeOutline } from 'react-icons/ti';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const News = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  useGSAP(() => {
    gsap.from(".news-item", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });
  }, { scope: containerRef });

  const newsItems = [
    {
      title: "Zentry Launches Metagame Layer Beta",
      date: "June 15, 2024",
      excerpt: "Experience the first look at our revolutionary gaming overlay that connects all platforms.",
      category: "Product Update"
    },
    {
      title: "Partnership with Major Game Studios Announced",
      date: "May 28, 2024",
      excerpt: "We're teaming up with leading game developers to expand the Play Economy.",
      category: "Partnership"
    },
    {
      title: "Zentry Token Listed on Major Exchanges",
      date: "April 5, 2024",
      excerpt: "Our native token is now available for trading on multiple global platforms.",
      category: "Announcement"
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative py-20 px-6 sm:px-12 bg-gradient-to-b from-black to-[#1a0a3a] text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-white/10 rounded-full"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 30 + 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="news-item"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <h1 className="text-[36px] md:text-[60px] leading-[0.9] font-black uppercase mb-6">
            The Universe
            <br />
            Powered By Zentry
          </h1>
          <p className="text-lg md:text-xl max-w-2xl opacity-80 mb-12">
            Stay updated with the latest news, events, and updates in our ecosystem. 
            Be part of our universe's growth and evolution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              className="news-item bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-[#624bff] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 h-full flex flex-col">
                <span className="text-[#624bff] text-sm font-medium mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/70 mb-4 flex-grow">{item.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/50">{item.date}</span>
                  <button className="text-[#624bff] hover:text-white transition">
                    Read more →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="news-item"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Button
            id="read-all-news"
            title="Read all news"
            leftIcon={<TiInfoLargeOutline className="text-xl" />}
            containerClass="bg-[#624bff] hover:bg-[#7a65ff] flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all duration-300"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default News;