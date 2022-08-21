import React from "react";
import { motion } from "framer-motion";
import discordIcon from "../asset/img/icon/discord.png";
import ill3 from "../asset/ill3.png";

export default function Share() {
  return (
    <div className='bg-main-800'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='mainContainer py-16 flexJust'
      >
        <div>
          <h1 className='text-display-5xl'>Share your recipes!</h1>
          <p>Or have an idea to share that will help us get better?</p>
        </div>
        <div className='flex gap-3 justify-center lg:justify-start  items-center'>
          <button className='CTA-small bg-[#5866F2] flex gap-3'>
            <img src={discordIcon} alt='' />
            Join the Discord
          </button>
          <button className='CTA-small relative'>
            Join the waitlist
            <img src={ill3} alt='' className='absolute bottom-6' />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
