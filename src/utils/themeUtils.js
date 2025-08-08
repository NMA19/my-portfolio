// Helper function to generate theme-aware className strings
export const getThemeClasses = (theme, variants = {}) => {
  const {
    primary = theme.primary,
    secondary = theme.secondary,
    text = theme.text,
    textSecondary = theme.textSecondary,
    accent = theme.accent,
    border = theme.border,
    shadow = theme.shadowLg
  } = variants;

  return {
    primary,
    secondary,
    text,
    textSecondary,
    accent,
    border,
    shadow,
    // Common combinations
    card: `${secondary} ${border} ${shadow}`,
    button: `${accent} text-white hover:opacity-90`,
    buttonSecondary: `${secondary} ${text} ${border} hover:${accent.replace('bg-', 'hover:bg-')}`,
    input: `${secondary} ${border} ${text} focus:${accent.replace('bg-', 'focus:border-')}`,
    link: `${textSecondary} hover:${text.replace('text-', 'hover:text-')}`
  };
};

// Update theme with additional utility classes
export const extendedThemes = {
  light: {
    primary: 'bg-neutral-50',
    secondary: 'bg-white',
    text: 'text-neutral-900',
    textSecondary: 'text-neutral-600',
    accent: 'bg-blue-500',
    border: 'border-neutral-200',
    shadowLg: 'shadow-lg shadow-neutral-200/50',
    shadowSm: 'shadow-sm shadow-neutral-200/30',
    // Additional utilities
    hover: 'hover:bg-neutral-100',
    backdrop: 'bg-white/80 backdrop-blur-md',
    gradient: 'from-blue-500 to-purple-600'
  },
  dark: {
    primary: 'bg-neutral-900',
    secondary: 'bg-neutral-800',
    text: 'text-neutral-50',
    textSecondary: 'text-neutral-300',
    accent: 'bg-blue-400',
    border: 'border-neutral-700',
    shadowLg: 'shadow-lg shadow-black/30',
    shadowSm: 'shadow-sm shadow-black/20',
    // Additional utilities
    hover: 'hover:bg-neutral-700',
    backdrop: 'bg-neutral-800/80 backdrop-blur-md',
    gradient: 'from-blue-400 to-purple-500'
  }
};
