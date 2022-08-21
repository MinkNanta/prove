import React from "react";
import logo from "../asset/logo.svg";

export default function Footer() {
  return (
    <div className='bigContainer flexJust'>
      <img src={logo} alt='PROVE' className='h-16' />
      <div className='flexJust gap-9 CTA-text text-red-500'>
        <h6>About us</h6>
        <h6>For creators</h6>
        <h6>FAQ</h6>
        <h6>© 2022 Prove</h6>
      </div>
    </div>
  );
}
