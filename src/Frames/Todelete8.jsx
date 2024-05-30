import React, { useState, useEffect } from "react";

const Sound = ({ url }) => {
  const [audio] = useState(new Audio(url));

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

  const playSound = () => {
    audio.play();
  };

  return <button onClick={playSound}>Play Sound</button>;
};

export default Sound;
