import React from "react";
import { delay, motion } from "framer-motion";
import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee3 from "../../assets/coffee/coffee3.png";

const servicesData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    subtitle: "Bold and intense, our black coffee is brewed without milk or sugar to deliver pure, unfiltered richness—perfect for true coffee lovers seeking a strong, energizing kick in every sip.",
  },

  {
    id: 2,
    image: Coffee3,
    title: "Hot Coffee",
    subtitle: "Rich, aromatic, and brewed to warm your soul—our hot coffee is crafted from freshly roasted beans, perfect for kick-starting your day or enjoying a relaxing moment.",
  },

  {
    id: 3,
    image: Coffee1,
    title: "Cold Coffee",
    subtitle: "Cool, creamy, and irresistibly smooth—our cold coffee is a refreshing blend of rich espresso and chilled milk, ideal for beating the heat with bold flavor.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    }
  }
};

const containerVariants = {
  hidden: {opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    }
  }
}



const Services = () => {
  return (
    <div className="container my-16 space-y-4 ml-10">
      {/* header section  */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-amber-600">Tasty Coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Brewed to perfection, our signature coffee delivers bold flavor with a
          smooth finish. Sourced from premium beans, roasted in small batches,
          and crafted for those who crave richness in every sip—pure
          satisfaction in every cup!
        </motion.p>
      </div>

      {/* card section  */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{amount: 0.8}}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ml-10">
        {servicesData.map((service) => (
          <motion.div 
            variants={cardVariants}
            className="text-center p-4 space-y-6">
            <img
              src={service.image}
              alt=""
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-amber-500">
                {service.title}
              </h1>
              <p className="text-gray-900">{service.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
