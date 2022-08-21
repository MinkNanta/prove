import React from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from "react";
import plus from "../asset/plus.svg";
import dis from "../asset/dis.svg";

export default function Item({ el }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <motion.li
      layout
      onClick={toggleOpen}
      className=' text-left space-y-4 pb-6'
    >
      <motion.div layout className='flexJust border-t border-base-900 pt-6'>
        <h1
          className='text-
heading-xl'
        >
          {el.question}
        </h1>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
          >
            <img src={dis} alt='' />
          </motion.div>
        )}
        {!isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
          >
            <img src={plus} alt='' />
          </motion.div>
        )}
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className='text-body-xl whitespace-pre-line'> {el.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
