import { motion } from "framer-motion";
import logoWhite from "../public/logoWhiteMin.png";
import Image from "next/image.js";
import Link from "next/link";
import { DarkMode, LightMode } from "styled-icons/material-twotone";

export default function Navbar({ darkMode }) {
  return (
    <div className="fixed top-0 right-0 z-10 w-full">
      <div className="p-8 max-w-[1300px] flex flex-row mx-auto">
        <div className="my-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="hover:animate-pulse lg:w-10 w-8 cursor-pointer"
          >
            <Link href="/">
              <Image src={darkMode ? logoBlack : logoWhite} />
            </Link>
          </motion.div>
        </div>
        <div className="place-self-end ml-auto lg:space-x-20 space-x-5 text-sm flex my-auto dark:text-white text-black">
          <motion.div
            whileHover={{
              scale: 1.05,
              textDecoration: "underline",
            }}
            className="my-auto hover:animate-pulse cursor-pointer"
          >
            <Link href="/discover">
              <h1 className="font-major underline-offset-4 ">Discover</h1>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              textDecoration: "underline",
            }}
            className="my-auto hover:animate-pulse cursor-pointer"
          >
            <Link href="/about">
              <h1 className="font-major underline-offset-4 ">About</h1>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-md py-1 px-2 my-auto border border-1 border-black dark:border-white text-black dark:text-white bg-white dark:bg-black hover:animate-pulse cursor-pointer"
          >
            <Link href="/preorder">
              <h1 className="font-major">Preorder</h1>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-md py-1 px-2 my-auto text-white hover:animate-pulse cursor-pointer w-12"
          >
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <LightMode /> : <DarkMode className="text-black" />}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
