import { motion } from "framer-motion";
import Image from "next/image";

const Home = ({ darkMode }) => {
  return (
    <div>
      <div
        style={{ scrollSnapType: "y mandatory", overflowY: "scroll" }}
        className="w-screen h-screen"
      >
        <section
          className="h-screen dark:text-white text-black font-major place-content-center align-middle place-items-center flex px-8"
          style={
            !darkMode
              ? {
                  scrollSnapAlign: "start",
                  backgroundColor: "#e5e5f7",
                  opacity: "0.8",
                  backgroundImage:
                    "radial-gradient(#5f5f5f 0.35000000000000003px, #e5e5f7 0.35000000000000003px)",
                  backgroundSize: "27px 27px",
                }
              : {
                  scrollSnapAlign: "start",
                  backgroundColor: "#080830",
                  opacity: "1",
                  backgroundImage:
                    "radial-gradient(#6d6d8f 0.35000000000000003px, #080830 0.35000000000000003px)",
                  backgroundSize: "27px 27px",
                }
          }
        >
          <div className="place-content-center md:space-x-20 flex md:flex-row flex-col place-items-center max-w-[1300px] w-full relative">
            <div className="md:w-1/2 my-auto bg-white dark:bg-black outline-1 p-5 rounded-md bg-opacity-50 shadow-xl backdrop-blur-sm mt-5">
              <h1 className="font-major-black mx-auto text-center text-xl">
                Contact
              </h1>
              <div className="h-[2px] bg-black mx-auto w-[50px] lg:mb-12 mb-3 dark:bg-white mt-4" />
              <p className=" md:mb-12 mb-3">
                Thank you for checking out our website. If you have any interest
                in learning more or testing out some of these boards please feel
                free to email us directly at{" "}
                <a
                  className="text-blue-600 cursor-pointer"
                  href="mailto:prestonmartin@ucsb.edu"
                >
                  prestonmartin@ucsb.edu
                </a>
                .
                <br />
                <br /> Thank you for your support,
                <br />
                C6
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
