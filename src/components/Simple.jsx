import { motion } from "framer-motion";
import React from "react";

const Simple = () => {
  return (
    <motion.div
      className="bg-red-500 border w-32 h-32 rounded-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    ></motion.div>
  );
};

export default Simple;
