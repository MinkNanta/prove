import React from "react";
import line from "../asset/line.svg";
import safariToolbar from "../asset/SafariToolbar.png";

import { motion } from "framer-motion";
import content1 from "../asset/content1.png";
import content2 from "../asset/content2.jpg";
import illu1 from "../asset/illu1.png";

export default function Content({ el, idx }) {
  const photo = [content1, content2];
  return (
    <div
      className={
        idx % 2 === 0
          ? "flexJust  gap-8  "
          : "flexJust  flex-row-reverse gap-8 "
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=' w-4/12 space-y-5 relative'
      >
        <img src={line} alt='' />
        <h1 className='text-heading-3xl'>{el.title}</h1>
        <p className='text-body-lg'>{el.subtitle}</p>
        {idx < 1 && (
          <img
            src={illu1}
            alt=''
            className='absolute -bottom-[280px] -right-24'
          />
        )}
      </motion.div>

      <div className='w-8/12 rounded-[12px] overflow-hidden  shadow-card '>
        <img src={safariToolbar} alt='' className='w-full' />
        <div className='overflow-auto h-[520px] '>
          <img src={photo[idx]} alt='' className='w-full' />
        </div>
      </div>
    </div>
  );
}
