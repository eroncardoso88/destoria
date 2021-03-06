/*eslint-disable */
import * as React from "react";
import { motion } from "framer-motion";
import s from './styles'
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ children, link }) => {
  const style = { border: `2px solid #F83600` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        if (link == "none") return false;
        window.location.href = '/' + link
    }}
      {...s.menuListItem}
    >
      <div className="text-placeholder" {...s.menuItem}>{children}</div>
    </motion.li>
  );
};
