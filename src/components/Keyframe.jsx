import { motion } from "framer-motion";
import React from "react";

const Keyframe = () => {
  return (
    <motion.div
      className="bg-blue-500 border w-32 h-32 m-4"
      animate={{
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
    ></motion.div>
  );
};

export default Keyframe;
