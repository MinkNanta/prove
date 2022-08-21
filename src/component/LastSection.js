import React from "react";
import content3 from "../asset/content3.png";
import ill2 from "../asset/ill2.png";
import { motion } from "framer-motion";

export default function LastSection() {
  return (
    <div className='flexJust gap-8 '>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=' w-6/12 space-y-5 relative'
      >
        <h1 className='text-display-5xl'>Become a key stakeholder</h1>
        <p className='text-body-lg'>
          Level up as an avid Prover! Become a key stakeholder in our many
          projects, through continual interaction with Prover.
        </p>
        <button className='CTA-small bg-blue-400 text-base-900'>
          Read more
        </button>
        <img src={ill2} alt='' className='absolute -bottom-32 -right-32' />
      </motion.div>

      <div className='w-6/12 rounded-[12px] overflow-hidden  shadow-card '>
        <img src={content3} alt='' className='w-full' />
      </div>
    </div>
  );
}
