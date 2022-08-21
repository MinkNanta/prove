import React from "react";
import hand from "../asset/hand.png";

export default function ContactUs() {
  return (
    <div className='bigContainer flexJust bg-red-500'>
      <div className='flexJust gap-9 text-white overflow-y-auto'>
        <h6 className='text-heading-2xl'>JOIN OUR COMMUNITY OF FOOD LOVERS</h6>
        <img src={hand} alt='' />
        <h6 className='text-heading-2xl'>JOIN OUR COMMUNITY OF FOOD LOVERS</h6>
        <img src={hand} alt='' />
        <h6 className='text-heading-2xl'>JOIN OUR COMMUNITY OF FOOD LOVERS</h6>
        <img src={hand} alt='' />
      </div>
    </div>
  );
}
