// src/components/ui/Button.jsx

import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-zentry rounded-full transition-all duration-300 inline-flex items-center';
  
  const variants = {
    primary: 'bg-primary hover:bg-primary/80 text-white',
    secondary: 'border-2 border-primary/50 hover:border-primary',
    ghost: 'hover:bg-gray-800/50 text-gray-300 hover:text-white'
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  className: '',
};

// src/components/ui/Card.jsx
// src/components/ui/Card.jsx
const Card = ({ 
  children, 
  hover = true,
  className = '' 
}) => {
  return (
    <div className={`
      bg-gray-800/50 
      backdrop-blur-sm 
      rounded-xl 
      overflow-hidden 
      ${hover ? 'card-hover' : ''} 
      ${className}
    `}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  hover: PropTypes.bool,
  className: PropTypes.string,
};

Card.defaultProps = {
  hover: true,
  className: '',
};

Badge.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent']),
};

Badge.defaultProps = {
  variant: 'primary',
};


const Badge = ({ 
  children, 
  variant = 'primary' 
}) => {
  const variants = {
    primary: 'bg-primary/20 text-primary',
    secondary: 'bg-secondary/20 text-secondary',
    accent: 'bg-accent/20 text-accent'
  };

  return (
    <span className={`
      px-3 
      py-1 
      rounded-full 
      text-xs 
      font-semibold 
      ${variants[variant]}
    `}>
      {children}
    </span>
  );
};

export { Button, Card, Badge };