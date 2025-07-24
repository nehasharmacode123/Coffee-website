import { useState } from "react";
import BgImage from "../../assets/bg-slate.png";
import BlackCoffee from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion, scale } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          {/* Navbar section here */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Hero section */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 
          lg:grid-cols-3 place-items-center min-h-[850px]"
          >
            {/* text content section */}
            <div className="text-orange-100 mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Blvck Tumbler
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative "
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl ml-14">Black Lifestyle Lovers,</h1>
                  <h1 className="text-sm opacity-55 leading-loose ml-14">
                    The Blvck Tumbler blends elegance and attitude. Crafted for
                    bold minimalists, it keeps your drink hot or cold while
                    complementing your all-black vibe. Pure style. Zero
                    compromise. Stay iconic.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>

            {/* Hero Image section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={BlackCoffee}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* orange circle ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-amber-500 border-[20px] rounded-full z-10"
              ></motion.div>

              {/* big text section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute -top-20 left-[200px] z-[1]"
              >
                <h1 className="text-[140px] scale-150 font-bold text-gray-900/40 leading-none">
                  Blvck Tumbler
                </h1>
              </motion.div>
            </div>

            {/* {third div section} */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="text-orange-100 mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Blvck Tumbler
              </h1>
              <div className="relative ">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl ml-14">Blvck Tumbler</h1>
                  <h1 className="text-sm opacity-55 leading-loose ml-14">
                    A premium matte black tumbler built with double-wall
                    insulation. Whether it's coffee, tea, or protein, this sleek
                    companion keeps it fresh all day. Built to match your
                    everyday aesthetic.
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </div>
            </motion.div>
            <div></div>
          </div>
        </div>

        {/* sidebar Menu Section */}
        {sidebar && (
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            className="absolute top-0 right-0 w-[90px] h-full bg-gradient-to-b from-amber-500/85 to-amber-500/85 backdrop-blur-sm z-10"
          >
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white"></div>

                {/* Social Icons */}
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>

                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaTwitter className="text-2xl" />
                </div>

                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>

                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
