import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Star, 
  Shield, 
  Zap 
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Cutting-edge solutions that drive technological advancement.',
      color: 'bg-blue-500'
    },
    {
      icon: Star,
      title: 'Quality',
      description: 'Exceptional craftsmanship in every digital product we create.',
      color: 'bg-purple-500'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Consistent delivery and unwavering commitment to client success.',
      color: 'bg-green-500'
    },
    {
      icon: Zap,
      title: 'Speed',
      description: 'Rapid development without compromising on quality.',
      color: 'bg-red-500'
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#1A1A1A] py-20"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforming challenges into opportunities through expert digital solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2 
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="bg-white/5 p-6 rounded-xl text-center hover:bg-white/10 transition-all"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`${feature.color} p-4 rounded-full inline-block mb-4`}
              >
                <feature.icon className="text-white w-10 h-10" />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;