import React from 'react';
import PropTypes from 'prop-types';
import { MessageSquare, Users, Monitor, Heart } from 'lucide-react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-gray-900 p-6 rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

const CardHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
);

CardHeader.propTypes = {
  children: PropTypes.node.isRequired
};

const CardTitle = ({ children }) => (
  <h3 className="text-lg font-semibold text-white">{children}</h3>
);

CardTitle.propTypes = {
  children: PropTypes.node.isRequired
};

const CardContent = ({ children }) => (
  <div>{children}</div>
);

CardContent.propTypes = {
  children: PropTypes.node.isRequired
};

const CardIcon = ({ icon: Icon, color = 'bg-purple-500' }) => (
  <div className={`${color} p-3 rounded-full mr-4`}>
    <Icon className="w-6 h-6 text-white" />
  </div>
);

CardIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.string
};

const WhyChooseUsItem = ({ 
  icon, 
  title, 
  description,
  iconColor 
}) => (
  <Card>
    <CardHeader>
      <div className="flex items-center mb-4">
        <CardIcon icon={icon} color={iconColor} />
        <CardTitle>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-400">{description}</p>
    </CardContent>
  </Card>
);

WhyChooseUsItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.string
};

WhyChooseUsItem.defaultProps = {
  iconColor: 'bg-purple-500'
};

const WhyChooseUs = () => (
  <section className="bg-[#282828] text-white py-20 flex items-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Delivering excellence through our commitment to communication, collaboration, and client success.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <WhyChooseUsItem
          icon={MessageSquare}
          title="Communicative"
          description="We keep you informed at every stage, ensuring clarity and transparency."
        />
        <WhyChooseUsItem
          icon={Users}
          title="Collaborative"
          description="Our team collaborates seamlessly to achieve exceptional results."
        />
        <WhyChooseUsItem
          icon={Monitor}
          title="Management"
          description="Effective project management that drives timely, successful outcomes."
        />
        <WhyChooseUsItem
          icon={Heart}
          title="Client-Favorite"
          description="Trusted by clients for consistently delivering outstanding work."
        />
      </div>
    </div>
  </section>
);

export default WhyChooseUs;