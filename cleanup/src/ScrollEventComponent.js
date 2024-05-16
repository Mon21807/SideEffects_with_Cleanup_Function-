import React, { useEffect } from 'react';

const ScrollEventComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll event occurred');
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div>Scroll Event Component</div>;
};

export default ScrollEventComponent;
