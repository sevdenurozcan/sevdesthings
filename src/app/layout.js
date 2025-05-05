import Link from "next/link";
import "./globals.css";

/* icons */
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";


export const metadata = {
  title: "SevdesThings - Handmade Clothing",
  description: "Crochet and Knitting Patterns",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="bg-bg-color ">
                 
          <nav className="bg-hd-bg-color sticky top-0 z-100">
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
            
             <div className="bg-border-color w-full h-0.5 hdbr">

            </div>
          </nav>
  

        {children}
      </body>
    </html>
  );
}
