import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoWhite from "../public/logoWhiteMin.png";
import logoBlack from "../public/logoBlackMin.png";
import Image from "next/image.js";
import Link from "next/link";
import { CookiesProvider, useCookies } from "react-cookie";
import { DarkMode, LightMode } from "styled-icons/material-twotone";
import { Menu, X } from "styled-icons/feather";
import { Exit } from "styled-icons/boxicons-regular";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const NavMenu = () => {
    return (
      <motion.div
        className="dark:bg-white bg-black flex flex-col rounded-sm text-white dark:text-black font-major p-3 border-1 border border-white dark:border-black space-y-5"
        initial={{ x: 200 }}
        animate={{ x: 0 }}
      >
        <div className="flex flex-row justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-md my-auto text-white hover:animate-pulse cursor-pointer w-8"
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
          className="my-auto hover:animate-pulse cursor-pointer "
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
          className="rounded-md my-auto text-white hover:animate-pulse cursor-pointer"
        >
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <h1 className="text-black">Go Light</h1>
            ) : (
              <h1>Go Dark</h1>
            )}
          </button>
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
      <div className="fixed top-0 right-0 z-10 w-full font-bold">
        <div className="p-8 max-w-[1300px] flex flex-row mx-auto">
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="hover:animate-pulse lg:w-10 w-8 cursor-pointer"
            >
              <Link href="/">
                <Image src={darkMode ? logoWhite : logoBlack} />
              </Link>
            </motion.div>
          </div>
          <div className="place-self-end ml-auto lg:space-x-20 space-x-5 text-sm flex my-auto dark:text-white text-black dark:decoration-white decoration-black">
            {windowSize < 600 ? (
              <div className="flex flex-col">
                <Menu
                  className="w-8 cursor-pointer self-end"
                  onClick={() => setOpen(!open)}
                />
                {open && <NavMenu />}
              </div>
            ) : (
              <>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    textDecoration: "underline",
                  }}
                  className="my-auto hover:animate-pulse cursor-pointer "
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
                    {darkMode ? (
                      <LightMode />
                    ) : (
                      <DarkMode className="text-black" />
                    )}
                  </button>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
      <Component {...pageProps} darkMode={darkMode} />
    </>
  );
}

export default MyApp;
