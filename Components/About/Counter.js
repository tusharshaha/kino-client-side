import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Counter = ({ end }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible) => {
    if (visible) {
      setIsVisible(true);
    }
  };

  return (
    <VisibilitySensor onChange={onVisibilityChange} delayedCall>
      <CountUp
        end={isVisible ? end : 0}
        duration={2}
        redraw={true}
      />
    </VisibilitySensor>
  );
};

export default Counter;
