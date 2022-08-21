import React from "react";
import logo from "../asset/logo.svg";

export default function Header() {
  return (
    <div className='bigContainer flexJust'>
      <img src={logo} alt='PROVE' className='h-16' />
      <div className='flexJust gap-9 CTA-text '>
        <h6>About us</h6>
        <h6>For creators</h6>
        <h6>FAQ</h6>
        <button className='CTA-small'>Join the waitlist</button>
      </div>
    </div>
  );
}
