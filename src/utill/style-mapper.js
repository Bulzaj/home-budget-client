export const styleMapper = (parentEl, styles) => {
  if (!styles) return parentEl;
  return [parentEl, ...styles.map((style) => `${parentEl}--${style}`)].join(
    " "
  );
};
