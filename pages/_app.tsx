import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoWhite from "../public/logoWhiteMin.png";
import logoBlack from "../public/logoBlackMin.png";
import Image from "next/image.js";
import Link from "next/link";
import { DarkMode, LightMode } from "styled-icons/material-twotone";
import { Menu, X } from "styled-icons/feather";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const [windowSize, setWindowSize] = useState(1000);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    if (window.innerWidth < 600) {
      setWindowSize(50);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize >= 600) {
      setOpen(false);
    }
  }, [windowSize]);

  const NavMenu = () => {
    return (
      <motion.div
        className="dark:bg-white bg-black flex flex-col z-20 rounded-sm text-white dark:text-black font-major px-5 py-3 border-1 border border-white dark:border-black space-y-5"
        initial={{ x: 200 }}
        animate={{ x: 0 }}
      >
        <div className="flex flex-row justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-md my-auto text-white hover:animate-pulse cursor-pointer w-7"
          >
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <LightMode className="text-black" /> : <DarkMode />}
            </button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-md my-auto text-white hover:animate-pulse cursor-pointer w-7"
          >
            <button onClick={() => setOpen(false)}>
              {darkMode ? <X className="text-black" /> : <X />}
            </button>
          </motion.div>
        </div>
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
          whileHover={{
            scale: 1.05,
            textDecoration: "underline",
          }}
          className="my-auto hover:animate-pulse cursor-pointer"
        >
          <Link href="/contact">
            <h1 className="font-major underline-offset-4 ">Contact</h1>
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
      </motion.div>
    );
  };

  return (
    <>
      <div className="bg-[#809DBB] dark:bg-black">
        <div className="fixed top-0 right-0 z-20 w-full  ">
          <div className="p-5 max-w-[1300px] flex flex-row mx-auto rounded-sm relative">
            <div className="flex my-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="hover:animate-pulse lg:w-10 w-8 cursor-pointer align-middle flex mr-4 md:mr-10"
              >
                <Link href="/" className="my-auto align-middle flex">
                  <Image
                    src={darkMode ? logoWhite : logoBlack}
                    className="my-auto flex"
                  />
                </Link>
              </motion.div>
            </div>
            <div className="flex my-auto dark:text-white text-black dark:decoration-white decoration-black md:text-lg text-sm space-x-4 md:space-x-10">
              <>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="my-auto hover:animate-pulse cursor-pointer"
                >
                  <Link href="/about">
                    <h1 className="font-major-black underline-offset-4 ">
                      About
                    </h1>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="my-auto hover:animate-pulse cursor-pointer"
                >
                  <Link href="/contact">
                    <h1 className="font-major-black underline-offset-4 ">
                      Contact
                    </h1>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="my-auto hover:animate-pulse cursor-pointer"
                >
                  <Link href="/showroom">
                    <h1 className="font-major-black underline-offset-4 ">
                      Showroom
                    </h1>
                  </Link>
                </motion.div>
                {/* <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-md py-1 px-2 my-auto border border-1 border-black dark:border-white text-black dark:text-white bg-white dark:bg-black hover:animate-pulse cursor-pointer mx-10"
                >
                  <Link href="/preorder">
                    <h1 className="font-major">Preorder</h1>
                  </Link>
                </motion.div> */}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="my-auto text-white hover:animate-pulse cursor-pointer w-8 right-5 top-5 self-end place-self-end absolute"
                >
                  <div onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? (
                      <LightMode />
                    ) : (
                      <DarkMode className="text-black" />
                    )}
                  </div>
                </motion.div>
              </>
            </div>
          </div>
        </div>
        <Component {...pageProps} darkMode={darkMode} size={windowSize} />
      </div>
    </>
  );
}

export default MyApp;
