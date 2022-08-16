import { motion } from "framer-motion";
import logoWhite from "../public/logoWhiteMin.png";
import Image from "next/image.js";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 right-0 z-10 w-full">
      <div className="p-8 max-w-[1300px] flex flex-row mx-auto">
        <div className="my-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="hover:animate-pulse lg:w-10 w-8"
          >
            <Link href="/">
              <Image src={logoWhite} className="cursor-pointer" />
            </Link>
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
            <Link href="/discover">
              <h1 className="font-major underline-offset-4">Discover</h1>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              color: "#aed1ff",
              textDecoration: "underline",
            }}
            className="my-auto hover:animate-pulse"
          >
            <Link href="/about">
              <h1 className="font-major underline-offset-4">About</h1>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, background: "#aed1ff" }}
            className="rounded-md py-1 px-2 my-auto border border-1 border-black text-black hover:animate-pulse"
            style={{ background: "white" }}
          >
            <Link href="/preorder">
              <h1 className="font-major">Preorder</h1>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
