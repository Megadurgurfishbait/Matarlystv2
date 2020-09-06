import { useState, useEffect } from 'react';

interface WindowDimensionsProps {
  width: number;
  height: number;
}

function getWindowDimensions(): WindowDimensionsProps {
  const { innerHeight: height, innerWidth: width } = global.window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions(): WindowDimensionsProps {
  const [windowDimensions, setWindowDimensions] = useState({
    width: global.window.innerWidth,
    height: global.window.innerHeight,
  });

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener(`resize`, handleResize);
    return () => window.removeEventListener(`resize`, handleResize);
  });

  return windowDimensions;
}
