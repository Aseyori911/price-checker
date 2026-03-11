import React, { useState } from 'react';

function HapticButton({ onClick, style, children, disabled }) {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    if (disabled) return;
    setPressed(true);
    setTimeout(() => setPressed(false), 150);
    if (onClick) onClick();
  };

  return (
    <div
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={handlePress}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => !disabled && setPressed(true)}
      onTouchEnd={handlePress}
      style={{
        ...style,
        transform: pressed ? 'scale(0.94)' : 'scale(1)',
        transition: 'transform 0.12s cubic-bezier(0.34, 1.56, 0.64, 1)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        userSelect: 'none',
        display: style?.display || 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
}

export default HapticButton;