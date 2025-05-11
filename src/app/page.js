'use client';
import Image from 'next/image';
import Link from 'next/link';
import "./page1.css";

/* icons */
import { VscHeartFilled } from "react-icons/vsc";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { GiSewingNeedle } from "react-icons/gi";



export default function Home() {

  return (

    <div className='overflow-x-hidden m-0'>
      <div className='w-full flex justify-center'>
        <div className="bg-border-color absolute w-[500px] h-0.5 hdbr
       max-sm:w-[300px] 
        "></div>
      </div>
      <div className="font-hd-font text-6xl font-light pt-2 pb-8 text-center text-hd-color bg-gradient-to-b from-hd-bg-color from-75% to-transparent top-8 z-100 header" id="header">

       
        <h1 className='mb-1 
        max-sm:text-4xl'> SEVDESTHINGS </h1>
         <div className='w-full flex justify-center'>
            <div className="bg-border-color absolute w-[500px] h-0.5 hdbr
            max-sm: max-sm:w-[300px]"></div>
         </div>
        
        <h2 className="text-2xl pt-2 font-extralight
        max-sm:text-xl"> Handmade Clothing </h2>



      </div>
      <div className='bg-base-color w-[150px] h-1.5 absolute z-150 rounded-l-xl right-0 top-[120px]
      max-sm:hidden'></div>
      <div className='bg-base-color w-[150px] h-1.5 absolute z-150 rounded-r-xl left-0 top-[70px]
      max-sm:hidden'></div>

      <div className='flex flex-row justify-between
      max-sm:flex-col '>
        <div id="image" className='image'>
          <Image src="/guzellik.jpg" alt='Hi. This is me.' width={1000} height={500} className='border-8 border-border-color p-4 rounded-full relative right-68
          max-sm:border-4 max-sm:p-2 max-sm:right-28'></Image>
        </div>
        <div className='text-hd-color flex flex-col justify-center items-center paragraphs w-[500px] max-sm:w-full' id="paragraphs">
          <h2 className="text-4xl text-end xl:pt-8 font-extralight
          max-sm:text-justify max-sm:text-2xl max-sm:pt-3
          xl:w-[500px] xl:pr-24"> Welcome to my store! </h2>
          <p className="text-end pt-4 text-2xl font-extralight xl:mr-24 wrap-normal
          max-sm:text-justify max-sm:text-xl max-sm:p-3.5"> I am a self-taught designer and maker, creating unique pieces that reflect my love for fashion and creativity.</p>
          <p className="text-end pt-4 text-2xl font-extralight xl:mr-24 wrap-normal
          max-sm:text-justify max-sm:text-xl max-sm:p-3.5"> Each item is handmade with care and attention to detail, ensuring that you receive a one-of-a-kind piece that you will cherish for years to come.</p>
          <p className="text-end pt-4 text-2xl font-extralight xl:mr-24 
          max-sm:text-justify max-sm:text-xl max-sm:p-3.5"> I hope you find something you love! </p>

          <div className='flex flex-row flex-start text-2xl mt-12 pt-6 pb-6 gap-2 mr-16 w-[375px] bg-gradient-to-l from-base-color to-bg-color
          max-sm:m-0 max-sm:left-0 max-sm:w-[150px]'>
            <VscHeartFilled />
            <VscHeartFilled />
            <VscHeartFilled />
            <VscHeartFilled />
            <VscHeartFilled />
          </div>
        </div>

      </div>

      <div className='flex flex-row justify-between items-end
      max-sm:flex-wrap max-sm:flex-col-reverse'>
        <div className=' xl:h-[400px] bg-hd-bg-color w-full absolute  xl:mt-10
       max-sm:hidden'></div>
        <div className='xl:h-[450px] bg-hd-color xl:w-[550px] absolute xl:right-0
       max-sm:hidden'></div>
        <div className='text-base-color text-4xl font-extralight flex flex-col justify-end items-end xl:w-[500px] relative xl:bottom-10 m-7
        max-sm:text-hd-color max-sm:bottom-[-500px] max-sm:text-xl max-sm:m-0 max-sm:justify-center max-sm:'>
          <p className='m-2.5'> This is my favourite hat.</p>
          <p className='m-2.5
          max-sm:mb-10'> I made it from scrap yarns.</p>
          <div className='relative xl:right-32 xl:m-2.5
          max-sm:right-[300px] max-sm:top-[-150px]'>
            <Image src='/sheep-knitting.gif' alt='Sheep knitting' width={100} height={100}></Image>
          </div>
        </div>
        <Image src="/sapka1.png" alt='This is my favourite hat.' width={500} height={500} className='relative z-10 image2
        max-sm:absolute max-sm:w-[100vw] max-sm:bottom-[-350px]'></Image>

      </div>

      <div className='flex flex-row justify-center gap-7 items-center text-6xl font-extralight text-hd-color m-20
      max-sm:text-4xl max-sm:m-5 max-sm:mt-96'>

        <div className='relative bottom-4'> <FaQuoteLeft /> </div>
        <div> <p> Artistry in Every Stitch </p> </div>
        <div className='relative top-4'> <FaQuoteRight /> </div>

      </div>

      <div className='bg-hd-bg-color w-[350px] h-1.5 absolute z-150 rounded-l-xl right-0 
      max-sm:bottom-[-675px]'></div>
      <div className='text-hd-color mr-20 ml-4 text-2xl flex flex-row justify-end items-end gap-4 relative bottom-10
      max-sm:bottom-0'>
        <GiSewingNeedle />
        <GiSewingNeedle />
        <GiSewingNeedle />
        <GiSewingNeedle />
        <GiSewingNeedle />
        <GiSewingNeedle />
        <GiSewingNeedle />
      </div>

      <div className='flex flex-row justify-around gap-7 items-center text-xl font-extralight text-white m-10
      max-sm:gap-1 max-sm:m-2 max-sm:mt-20 max-sm:flex-wrap'>
        <div className='bg-hd-color w-[400px] h-[450px] p-10 rounded-md'>

          <p>
            I create patterns for crochet and knitting for all levels, from beginner to advanced.
          </p>
          <p>
            You can find bunch of patterns with details and instructions on this website.
          </p>
          <Link href="/patterns" className='bg-base-color w-[120px] h-[40px] relative left-[100px] top-[150px] rounded-md flex justify-center items-center text-hd-color font-light visit'>
            VISIT
          </Link>
        </div>

        <div className='bg-hd-color w-[400px] h-[450px] p-10 rounded-md relative top-[60px]'>
          <p>
            I sell handmade clothing and accessories, including hats, scarves, and sweaters.
          </p>
          <p>
            You can find my products on my Dolap, Gardrops and Shopier accounts.
          </p>
          <Link href="/stores" className='bg-base-color w-[120px] h-[40px] relative left-[100px] top-[150px] rounded-md flex justify-center items-center text-hd-color font-light visit'>
            VISIT
          </Link>
        </div>

        <div className='bg-hd-color w-[400px] h-[450px] p-10 rounded-md  relative top-[120px]'>
          <p>
            I share my thoughts and experiences on my blog, where I discuss everything from fashion trends to personal stories.
          </p>
          <p>
            I also share my favourite tips for crocheting and knitting.
          </p>
          <Link href="/blog" className='bg-base-color w-[120px] h-[40px] relative left-[100px] top-[150px] rounded-md flex justify-center items-center text-hd-color font-light visit'>
            VISIT
          </Link>
        </div>
      </div>


      <div className='max-sm:flex max-sm:flex-col-reverse'>
        <div className='bg-hd-bg-color w-full h-[400px] absolute z-0 xl:mt-72 max-sm:h-[200px] max-sm:relative'></div>
        <Image src="/dress2.jpg" alt='Knitted and crochetted green and purple dress' width={600} height={100} className='z-10 relative xl:top-[82px] border-8 rounded-full dress2
        max-sm:w-[450px] max-sm:mb-[50px] max-sm:mt-18'></Image>

        <div className='relative xl:left-[800px] font-extralight text-4xl xl:w-[700px] text-bg-color xl:top-[-250px]
        max-sm:text-xl max-sm:top-[730px] max-sm:m-3.5 max-sm:text-justify'>
          <p>
            I made this dress by both knitting and crocheting.
          </p>
          <p>
            I used this beautiful green yarn by Madame Cotton.
          </p>
          <p>
            This is definitely one of my favourite pieces.
          </p>
        </div>
      </div>


      <div className="mb-8 w-full h-[500px] overflow-hidden relative
       max-sm:h-[300px] max-sm:mt-18">
        <Image
          src="/yarns.jpg"
          alt="Bunch of yarns"
          fill
          style={{ objectFit: 'cover', objectPosition: 'bottom' }}
          priority
          className='max-sm:w-full'
        />
        <div className='flex justify-center items-center w-full h-full max-sm:h-[300px] '>
          <p className='relative w-[800px] h-[100px] bg-base-color text-hd-color text-4xl font-extralight flex justify-center items-center rounded-md 
        max-sm:text-xl max-sm:w-4/5 max-sm:h-1/3 max-sm:opacity-70'>
          Thank you for visiting my website!
          </p>
        </div>
      </div>

    </div>
  );
}
