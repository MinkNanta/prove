import React from "react";
import { motion, useScroll, Variants } from "framer-motion";
import CreatorCard from "./CreatorCard";
import content from "../creatorContent.json";
import LastSection from "./LastSection";
import Title from "./Title";

export default function Creator() {
  return (
    <div className='py-32 text-center mainContainer'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=' space-y-12'
      >
        <Title
          title='A New Creator Experience'
          subtitle='Engage your community by issuing NFT’s that grant them access to exclusive content'
        />
        <div className='mainContainer flex gap-12'>
          {content.map((el, idx) => (
            <CreatorCard el={el} idx={idx} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
