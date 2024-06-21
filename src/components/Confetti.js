import React from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

const Confetti = ({ trigger }) => {
    return trigger ? <ConfettiExplosion /> : null;
};

export default Confetti;
