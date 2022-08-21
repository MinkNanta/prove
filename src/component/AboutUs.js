import React from "react";
import { motion, useScroll, Variants } from "framer-motion";
import Content from "./Content";
import content from "../content.json";
import LastSection from "./LastSection";
import Title from "./Title";

export default function AboutUs() {
  return (
    <div className='py-32 text-center bg-main-800 '>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className=' space-y-32'
      >
        <Title
          title='What is Prove?'
          subtitle='Whether we eat it, cook it, or share it - there is a degree of joy
            that is derived from food.'
        />
        <div className='mainContainer space-y-48'>
          {content.map((el, idx) => (
            <Content el={el} idx={idx} />
          ))}
          <LastSection />
        </div>
      </motion.div>
    </div>
  );
}
