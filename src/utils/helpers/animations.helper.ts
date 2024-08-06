type AnimateVariantsType = keyof typeof animateObject;

const animateObject = {
  animateOpacity: {
    open: {
      opacity: 1,
    },
    close: {
      opacity: 0,
    },
  },

  animateHeightWithOpacity: {
    hide: {
      opacity: 0,
      height: 0,
      overflow: 'hidden',
    },
    show: {
      opacity: 1,
      height: 'auto',
      overflow: 'hidden',
    },
  },
};

export const animateHelper = (variant: AnimateVariantsType) => animateObject[variant];
