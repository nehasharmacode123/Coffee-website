import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {motion} from "framer-motion";

const Navbar = ({sidebar, setSidebar}) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-[9999]">
      <div className="container">
        <div className="flex justify-between items-center -right-0">
          {/* logo section */}
          <motion.h1 
            initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
            className="text-2xl font-semibold uppercase">
            <span className="text-amber-400">Coffee</span> Webite.
          </motion.h1>

          {/* Hamburger Menu section */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              onClick={()=> setSidebar(!sidebar)}
            >
          <GiHamburgerMenu className="text-3xl cursor-pointer mr-10"/>
        </motion.div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
