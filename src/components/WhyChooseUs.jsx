import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Monitor, Heart } from 'lucide-react';

const Card = ({ children, className = '' }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={`bg-[#2C2C2C] p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all ${className}`}
  >
    {children}
  </motion.div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const CardIcon = ({ icon: Icon, color = 'bg-purple-600' }) => (
  <motion.div 
    whileHover={{ scale: 1.1, rotate: 5 }}
    className={`${color} p-3 rounded-full mr-4 inline-block`}
  >
    <Icon className="w-6 h-6 text-white" />
  </motion.div>
);
CardIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.string,
};

const WhyChooseUsItem = ({ icon, title, description, iconColor }) => (

  <Card>
    <div className="flex items-center mb-4">
      <CardIcon icon={icon} color={iconColor} />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-400">{description}</p>
  </Card>
);

WhyChooseUsItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
};

const WhyChooseUs = () => {
  const chooseUsItems = [
    {
      icon: MessageSquare,
      title: "Communicative",
      description: "We keep you informed at every stage, ensuring clarity and transparency."
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Our team collaborates seamlessly to achieve exceptional results."
    },
    {
      icon: Monitor,
      title: "Management",
      description: "Effective project management that drives timely, successful outcomes."
    },
    {
      icon: Heart,
      title: "Client-Favorite",
      description: "Trusted by clients for consistently delivering outstanding work."
    }
  ];

  return (
    <section className="bg-[#1A1A1A] text-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Delivering excellence through our commitment to communication, collaboration, and client success.
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {chooseUsItems.map(({ icon, title, description }) => (
            <WhyChooseUsItem
              key={title}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;