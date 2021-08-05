import { useEffect, useState } from "react";

/**
 * Simple intersection observer api implementation
 * @param {DOM element ref} ref
 * @param {intersection observer oprions} options
 * @returns is element visible in viewport
 */
const useOnScreen = (ref, options) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const elementRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (elementRef) observer.observe(elementRef);

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  }, [ref, options]);

  return visible;
};

export default useOnScreen;
