'use client'

import Image from 'next/image';
import { useState } from 'react';

export default function LoginButton() {
  const [imageSrc, setImageSrc] = useState("/images/login-inactive.png");

  return (
    <button className="rounded-lg"
      onMouseEnter={() => {
        setImageSrc("/images/login-active.png");
      }}
      onMouseOut={() => {
        setImageSrc("/images/login-inactive.png");
      }}>
      <Image
        src={imageSrc}
        width={100}
        height={56}
        alt="Log-in button image"/>
    </button>
  );
}