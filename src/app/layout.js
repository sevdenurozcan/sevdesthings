import Link from "next/link";
import "./globals.css";

/* icons */
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";


import {Quicksand} from 'next/font/google';
export const quicksand = Quicksand({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: "SevdesThings - Handmade Clothing",
  description: "Crochet and Knitting Patterns",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.className}>
      
      <body className="bg-bg-color ">


        <div className="flex flex-row justify-between bg-hd-bg-color">
          <nav className="bg-hd-bg-color ">
            <ul className="flex flex-row flex-start gap-2 text-white">
              <li>
                <Link href="https://www.instagram.com/sevdesthings/"> <FaInstagram className="text-2xl m-1 ml-3" /> </Link>
              </li>
              <li>
                <Link href="mailto:sevdenurozcan0@gmail.com"> <IoMdMail className="text-2xl m-1"/> </Link>
              </li>
              <li>
                <Link href="tel:+905438953047"> <FaPhone className="text-[18px] m-1.5"/> </Link>
              </li>
            </ul>
            
        
          </nav>
           <div>
            <ul className="flex flex-row justify-between gap-4  text-lg h-[50px] bg-hd-bg-color text-white relative mr-18">
              <li className=' hover:text-hd-color underline'>
                <Link href="/"> Home </Link>
              </li>
              <li className=' hover:text-hd-color underline'>
                <Link href="/patterns"> Patterns </Link>
              </li>
              <li className=' hover:text-hd-color underline'>
                <Link href="/stores"> Stores </Link>
              </li>
              <li className=' hover:text-hd-color underline'>
                <Link href="/blog"> Blog </Link>
              </li>
            </ul>
          </div>
        </div>
  

        {children}
        <nav>
        <ul className="flex flex-row justify-center gap-8 mb-4 mt-4">
            <li className=' text-hd-color hover:text-hd-bg-color'>
              <Link href="/"> Home </Link>
            </li>
            <li className=' text-hd-color  hover:text-hd-bg-color'>
              <Link href="/patterns"> Patterns </Link>
            </li>
            <li className=' text-hd-color  hover:text-hd-bg-color'>
              <Link href="/stores"> Stores </Link>
            </li>
            <li className=' text-hd-color  hover:text-hd-bg-color'>
              <Link href="/blog"> Blog </Link>
            </li>
          </ul>
        </nav>

        

        <footer className='text-center text-hd-color font-extralight text-sm mb-1'>
        © 2025 Sevde Nur Özcan. All rights reserved.
      </footer>


      </body>
    </html>
  );
}
