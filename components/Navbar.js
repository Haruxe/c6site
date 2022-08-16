import { motion } from "framer-motion";
import logoWhite from "../public/logoWhiteMin.png";
import Image from "next/image.js";

export default function Navbar() {
  return (
    <div className="fixed top-0 right-0 z-10 w-full">
      <div className="p-8 max-w-[1300px] flex flex-row mx-auto">
        <div className="my-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="hover:animate-pulse lg:w-10 w-8"
          >
            <a href="/">
              <Image src={logoWhite} className="cursor-pointer" />
            </a>
          </motion.div>
        </div>
        <div className="place-self-end ml-auto lg:space-x-20 space-x-5 text-sm flex my-auto text-white">
          <motion.div
            whileHover={{
              scale: 1.05,
              color: "#aed1ff",
              textDecoration: "underline",
            }}
            className="my-auto hover:animate-pulse"
          >
            <a href="/discover">
              <h1 className="font-major underline-offset-4">Discover</h1>
            </a>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              color: "#aed1ff",
              textDecoration: "underline",
            }}
            className="my-auto hover:animate-pulse"
          >
            <a href="/about">
              <h1 className="font-major underline-offset-4">About</h1>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, background: "#aed1ff" }}
            className="rounded-md py-1 px-2 my-auto border border-1 border-black text-black hover:animate-pulse"
            style={{ background: "white" }}
          >
            <a href="/preorder">
              <h1 className="font-major">Preorder</h1>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
