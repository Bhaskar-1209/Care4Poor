import React from 'react';
import { motion } from 'framer-motion';

const ChangeSection = () => {
  const impactImages = [
    'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/8613297/pexels-photo-8613297.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/8613090/pexels-photo-8613090.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/5427673/pexels-photo-5427673.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/8613091/pexels-photo-8613091.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/8613093/pexels-photo-8613093.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/8613094/pexels-photo-8613094.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/8613095/pexels-photo-8613095.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/8613095/pexels-photo-8613095.jpeg?auto=compress&cs=tinysrgb&w=300'
  ];

  const statistics = [
    { number: "1000+", description: "meals distributed" },
    { number: "1500+", description: "children taught" },
    { number: "₹200k+", description: "funds collected" },
    { number: "400+", description: "Delegates at inaugural edition" }
  ];

  return (
    <div className="bg-black text-[#F8E190] flex items-center justify-center p-8">
      <motion.div 
        className="w-full"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Golden Border Card */}
        <motion.div 
          className="border-2 border-[#F8E190] rounded-3xl p-12 bg-black backdrop-blur-sm shadow-2xl"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Statistics */}
            <motion.div 
              className="space-y-8"
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-[#F8E190] mb-4 leading-tight">
                  THE CHANGE
                </h1>
                <h1 className="text-5xl md:text-6xl font-bold text-[#F8E190] mb-6 leading-tight">
                  WE BROUGHT
                </h1>
                <div className="w-32 h-1 bg-[#F8E190] mb-8"></div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {statistics.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-left"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-[#F8E190] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg text-[#F8E190] leading-relaxed">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Image Grid */}
            <motion.div 
              className="grid grid-cols-4 gap-3"
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {impactImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={`rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                    index === 8 ? 'col-span-2 row-span-2' : 'aspect-square'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.img
                    src={image}
                    alt={`Impact ${index + 1}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ChangeSection;
