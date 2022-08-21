import React from "react";

export default function Title({ title, subtitle, className }) {
  return (
    <div>
      <h1 className={`${className} text-display-5xl`}>{title}</h1>
      <p className='text-body-lg'>{subtitle}</p>
    </div>
  );
}
