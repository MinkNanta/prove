import React from "react";
import photo from "../asset/img/hero.png";
import tomato from "../asset/img/hero1.png";
import discordIcon from "../asset/img/icon/discord.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className='mainContainer flexJust pt-4 pb-16 gap-16 '>
      <div className='space-y-6 w-full'>
        <h1 className='text-display-5xl '>
          Passionate about cooking, eating or just appreciating food?
        </h1>
        <p>
          We’re a community of food-lovers dedicated to <br />
          bringing delicious ideas to life. <br />
          <br />
          Join us in a mission to empower creativity through food!
        </p>
        <div className='flex gap-3 justify-center lg:justify-start  items-center'>
          <button className='CTA-small bg-[#5866F2] flex gap-3'>
            <img src={discordIcon} alt='' />
            Join the Discord
          </button>
          <button className='CTA-small'>Join the waitlist</button>
        </div>
      </div>
      <div className='w-full relative grid'>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={photo} alt='prove' className='w-full ' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <img
            src={tomato}
            alt='prove'
            className='lg:block lg:w-[212px]  hidden absolute bottom-0 -left-44'
          />
        </motion.div>
      </div>
    </div>
  );
}
