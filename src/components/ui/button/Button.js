import React from 'react';
import cl from './Button.module.scss'

const Button = ({children, className, onClick, ...props}) => {
  return (
    <button
      className={`${cl.Button} ${className ?? ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;