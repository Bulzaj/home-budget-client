/**
 * Create css classess string
 * @param {Object} styleModule css module file
 * @param {String} mainStyle main css class name for element
 * @param {Array} styleModifiers addictional css classess (e.g. props.styles )
 * @returns String of styles
 */
export const styles = (styleModule, mainStyle, styleModifiers) => {
  const styles = [styleModule[mainStyle]];

  if (styleModifiers && Array.isArray(styleModifiers)) {
    styleModifiers.forEach((style) => {
      styles.push(styleModule[`${style}`]);
    });
  }

  return styles.join(" ");
};
