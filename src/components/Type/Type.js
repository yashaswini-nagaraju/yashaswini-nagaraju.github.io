import React from "react";
import Typewriter from 'typewriter-effect';
import './Type.css';

const strings = [
  "Software Engineer",
  "Full Stack Developer",
];

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;