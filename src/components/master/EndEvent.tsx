import React from "react";
import { motion } from "framer-motion";

const EndEvent: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0c0032] to-[#190061] text-white text-center px-6 overflow-hidden">
      {/* Floating Neon Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large Blue Orb */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#00eaff]/20 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Pink Orb */}
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#ff007f]/20 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.4, 1],
            y: [0, 80, 0],
            x: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Small Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 200],
              x: [0, (Math.random() - 0.5) * 200],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 max-w-4xl px-8 py-16 backdrop-blur-lg bg-gradient-to-br from-[#08001a]/60 to-[#1a005e]/60 rounded-3xl border border-[#ffffff1a] shadow-2xl relative overflow-hidden"
      >
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00eaff]/30 transition-all duration-1000 rounded-3xl">
            <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#00eaff_0%,#ff007f_50%,#00eaff_100%)] opacity-0 group-hover:opacity-20 animate-spin-slow duration-3000" />
          </div>
        </div>

        {/* Title with Neon Glow */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold tracking-tight mb-8"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            textShadow: [
              "0 0 10px rgba(0,234,255,0.3)",
              "0 0 20px rgba(0,234,255,0.5), 0 0 30px rgba(255,0,127,0.5)",
              "0 0 10px rgba(0,234,255,0.3)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "linear-gradient(90deg, #00eaff, #ff007f, #00eaff)",
            backgroundSize: "300% 100%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Registrations Are Now Closed
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Thank you for your interest in{" "}
          <span className="font-bold "> Master Momentum Trading. <br /></span> <br />
          <span className="font-bold ">
            {" "}
            Want to attend the next session? <br />
          </span>
          Stay connected for updates on upcoming events.
        </motion.p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <motion.a
            href="https://www.definedge.com/event-calendar"
            target="_blank"
            className="relative px-8 py-4 text-lg font-semibold text-white border-2 border-[#00eaff] rounded-full shadow-xl hover:shadow-[0_0_20px_rgba(0,234,255,0.3)] transition-all duration-300 group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#00eaff] to-[#ff007f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center justify-center gap-3">
              View Upcoming Events
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default EndEvent;
