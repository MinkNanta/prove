import React from "react";
import img1 from "../asset/img1.png";
import img2 from "../asset/img2.png";
import img3 from "../asset/img3.png";
import { motion } from "framer-motion";

export default function CreatorCard({ el, idx }) {
  const photo = [img1, img2, img3];

  return (
    <div className='w-full space-y-6'>
      <img src={photo[idx]} alt='' className='w-full' />
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className=' w-full'
      >
        <h1 className='text-heading-2xl whitespace-pre-line'>{el.title}</h1>
        <p className='text-body-xl whitespace-pre-line'>{el.subtitle}</p>
      </motion.div>
    </div>
  );
}
