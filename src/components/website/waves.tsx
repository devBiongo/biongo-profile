import React from 'react';
import { motion } from 'framer-motion';

const Waves = () => {
  return (
    <div className="relative">
      <motion.div
        className="absolute w-[25px] h-[25px] rounded-full bg-white/30"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeOut' }}
      ></motion.div>
      <motion.span
        className="absolute w-[50px] h-[50px] rounded-full bg-white"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeOut' }}
      />
    </div>
  );
};

export default Waves;
