import { useEffect, useState } from "react";

const getWindowDimmensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const useWindowDimmensions = () => {
  const [windowDimmensions, setWindowDimmensions] = useState(
    getWindowDimmensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimmensions(getWindowDimmensions());
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return windowDimmensions;
};

export default useWindowDimmensions;
