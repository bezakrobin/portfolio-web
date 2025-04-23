import { createTheme, Theme } from '@mui/material/styles';
import { useDarkMode } from './contexts/DarkModeContext';
import { COLORS } from './constants/colors';

declare module '@mui/material/styles' {
  interface TypeText {
    tertiary: string;
    quaternary: string;
    quinary: string;
  }
  interface Palette {
    accent: {
      hover: string;
    };
  }
  interface PaletteOptions {
    accent: {
      hover: string;
    };
  }
}

export const useTheme = (): Theme => {
  const { currentTheme } = useDarkMode();

  return createTheme({
    palette: {
      mode: currentTheme,
      background: {
        default: currentTheme === 'dark' ? COLORS.DARK_BG : COLORS.LIGHT_BG,
        paper: currentTheme === 'dark' ? COLORS.DARK_BG : COLORS.LIGHT_BG,
      },
      text: {
        primary: currentTheme === 'dark' ? COLORS.DARK_TEXT_PRIMARY : COLORS.LIGHT_TEXT_PRIMARY,
        secondary: currentTheme === 'dark' ? COLORS.DARK_TEXT_SECONDARY : COLORS.LIGHT_TEXT_SECONDARY,
      },
      accent: {
        hover: COLORS.ACCENT_HOVER,
      },
    },
  });
}; 