import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Counter = ({ end }) => {
    return (
        <CountUp end={end} duration={3} redraw={true}>
            {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                </VisibilitySensor>
            )}
        </CountUp>
    );
};

export default Counter;