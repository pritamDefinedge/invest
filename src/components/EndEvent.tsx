import React from "react";
import { motion } from "framer-motion";

const EndEvent: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center p-20 min-full bg-gradient-to-br from-[#0c0032] to-[#190061] text-white text-center px-6 overflow-hidden">
      {/* Floating Neon Orbs */}
      <div className="absolute inset-0 pointer-events-none ">
        <motion.div
          className="absolute top-1/4 left-1/3 w-72 h-72  bg-[#00eaff]/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#ff007f]/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, 60, 0],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 max-w-4xl px-8 py-16 backdrop-blur-lg bg-gradient-to-br from-[#08001a]/60 to-[#1a005e]/60 rounded-3xl border border-[#ffffff1a] shadow-2xl relative overflow-hidden"
      >
        {/* Title with Neon Glow */}
        <motion.h2
          className="text-5xl md:text-6xl font-bold tracking-tight mb-8"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: "linear-gradient(90deg, #00eaff, #ff007f, #00eaff)",
            backgroundSize: "300% 100%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Thank You!
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Your presence made this event extraordinary. We're grateful for your participation and can't wait to see you at our next gathering!
        </motion.p>

        {/* Stats Cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <motion.div 
            className="px-6 py-4 bg-gradient-to-br from-[#00274a]/40 to-[#004e7a]/20 rounded-xl border border-[#00eaff]/40 backdrop-blur-sm"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-sm text-[#00eaff]">Next Event</div>
            <div className="text-lg font-semibold">June 15, 2023</div>
          </motion.div>

          <motion.div 
            className="px-6 py-4 bg-gradient-to-br from-[#48003e]/40 to-[#7a0050]/20 rounded-xl border border-[#ff007f]/40 backdrop-blur-sm"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-sm text-[#ff007f]">Total Attendees</div>
            <div className="text-lg font-semibold">1,200+</div>
          </motion.div>

          <motion.div 
            className="px-6 py-4 bg-gradient-to-br from-[#5c0073]/40 to-[#87008a]/20 rounded-xl border border-[#ff00ff]/40 backdrop-blur-sm"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-sm text-[#ff00ff]">Testimonials</div>
            <div className="text-lg font-semibold">150+</div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="/upcoming-events"
            className="relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#00eaff] to-[#ff007f] rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#00eaff] to-[#ff007f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center gap-3">
              View Upcoming Events
            </span>
          </motion.a>

          <motion.button
            className="relative px-6 py-4 text-lg font-medium text-white bg-transparent border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300 group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Share Event
            </span>
            <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/20 transition-all duration-300"></span>
          </motion.button>
        </div>

        {/* Footer Note */}
        <motion.p 
          className="mt-12 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Stay connected for updates on our next adventure!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default EndEvent;
