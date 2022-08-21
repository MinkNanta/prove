import Title from "./Title";
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import Item from "./Item";
import items from "../faqData.json";

export default function Faq() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <div className='py-28 text-center mainContainer'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className=' space-y-12'
      >
        <Title
          title='Frequently asked questions'
          subtitle=''
          className='text-left'
        />
        <AnimateSharedLayout>
          <motion.ul layout>
            {items.map((el) => (
              <Item el={el} />
            ))}
          </motion.ul>
        </AnimateSharedLayout>
      </motion.div>
    </div>
  );
}
