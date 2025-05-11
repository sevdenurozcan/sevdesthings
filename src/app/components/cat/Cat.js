'use client'
import Image from 'next/image';
import { gsap } from 'gsap/dist/gsap';
import { useEffect, useRef } from 'react';


function Cat() {

  const refContainer = useRef();
  const refCat = useRef();


  useEffect(()=> {
    const tl = gsap.timeline({repeat: -1,});
    tl.to(refCat.current, { 
      x: "95vw",
      duration: 16,
      ease: "none",
    });
    tl.to(refCat.current, {
      rotate: -90,
      duration: 0.3, 
    });
    tl.to(refCat.current, {
      y: "-90vh",
      duration: 10,
      ease: "none",
    });
    tl.to(refCat.current, {
      rotate: -180,
      duration: 0.3,
    });
    tl.to(refCat.current, { 
      x: "20px",
      duration: 16,
      ease: "none",
    });
    tl.to(refCat.current, {
      rotate: -270,
      duration: 0.3,
    });
    tl.to(refCat.current, { 
      y: "0vh",
      duration: 10,
      ease: "none",
    });
  })

  return (
    <div className='container' ref={refContainer}> 
            <Image src="/cat.gif" alt="Walking cat" width={100} height={100} className='absolute top-[92vh] left-[-20px] z-350' ref={refCat}></Image>       
    </div>
  )
}

export default Cat