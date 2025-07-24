import React from "react";
import { FaFacebook, FaGoodreads, FaGoogle, FaInstagram, FaPhone, FaTelegram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaMapLocation } from "react-icons/fa6";
import CreditCards from "../../assets/website/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-amber-500 to-amber-600 pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.6
                  }}
            className="space-y-6">
            <h1 className="text-3xl font-bold uppercase ml-16">
              Coffee Website
            </h1>
            <p className="text-sm max-w-[300px] ml-16">
              Discover the rich aroma and bold taste of freshly brewed coffee.
              From beans to cup, we bring you the perfect blend of flavor and
              warmth. Start your day the right way — with a cup of joy.
            </p>
            <div>
                <p className="flex items-center gap-2 ml-16">
                    <FaPhone /> 
                    +1 (123) 456-7890
                </p>
                <p className="flex items-center gap-2 mt-2 ml-16">
                    <FaMapLocation /> Noida, Uttar Pradesh 
                </p>
               
            </div>
          </motion.div>

          {/* Footer Links section */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.6
                  }}
            className="space-y-6">
            <h1 className="text-3xl font-bold ml-24">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3 ml-10">
                {/* first column section */}
                <div>
                    <ul className="space-y-2 ml-16">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                {/* second column section */}

                 <div>
                    <ul className="space-y-2">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
          </motion.div>
          {/* Social Links section */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.6
                  }}
            className="space-y-6">
            <h1 className="text-3xl font-bold ml-16">Follow Us</h1>
            <div className="flex items-center gap-3 ml-16">
                <FaFacebook className="text-3xl hover:scale-105 duration-300"/>
                <FaInstagram className="text-3xl hover:scale-105 duration-300"/>
                <FaTelegram className="text-3xl hover:scale-105 duration-300"/>
                <FaGoogle className="text-3xl hover:scale-105 duration-300"/>
            </div>
            <div>
                <h1 className="text-xl font-semibold mb-2 ml-16">Payment Methods</h1>
                <img src={CreditCards} alt="credit cards" className="w-[80%] ml-16"/>
            </div>
          </motion.div>
        </div>

        {/* copyright section */}
        <p className="text-white text-center mt-8 pt-8 border-t-2 ml-20">
            Copyright &copy; 2024 Company Name. All rights reserved. 
        </p>
      </div>
    </div>
  );
};

export default Footer;
