// Standardized typography system for consistent heading sizes

export const typography = {
  // Main section headings (large)
  sectionHeading: 'text-4xl sm:text-5xl md:text-6xl lg:text-display-medium font-bold',
  
  // Secondary headings (medium)
  subHeading: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold',
  
  // Card/feature headings (small)
  cardHeading: 'text-lg sm:text-xl md:text-2xl lg:text-title-large font-semibold',
  
  // Body text
  bodyText: 'text-base sm:text-lg md:text-xl text-gray-400',
  
  // Small text
  smallText: 'text-sm sm:text-base text-gray-500',
  
  // Gradient text styling
  gradientText: 'bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent',
  
  // Common margins
  margins: {
    sectionBottom: 'mb-8 md:mb-12 lg:mb-16',
    headingBottom: 'mb-4 md:mb-6 lg:mb-8',
    cardBottom: 'mb-3 md:mb-4',
    textBottom: 'mb-4 md:mb-6',
  }
};

// Helper function to combine typography classes
export const getTypographyClass = (type: keyof typeof typography, includeGradient = false, margin?: keyof typeof typography.margins) => {
  let classes = typography[type];
  
  if (includeGradient) {
    classes += ` ${typography.gradientText}`;
  }
  
  if (margin) {
    classes += ` ${typography.margins[margin]}`;
  }
  
  return classes;
};
