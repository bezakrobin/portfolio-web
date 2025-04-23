import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './utils/styles/animations.css'
import { DataProvider } from './contexts/DataContext'
import { GlobalStyles, ThemeProvider } from '@mui/material';
import { DividerDirectionProvider } from "./contexts/DividerDirectionContext.tsx";
import { DarkModeProvider } from './contexts/DarkModeContext'
import { useTheme } from './theme'

const globalFontSmoothing = <GlobalStyles styles={{ body: { WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' } }} />;

const AppWithTheme = () => {
  const theme = useTheme();
  const globalBackground = <GlobalStyles styles={{ body: { backgroundColor: theme.palette.background.default } }} />;
  return (
    <ThemeProvider theme={theme}>
      {globalBackground}
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {globalFontSmoothing}
    <DarkModeProvider>
      <DataProvider>
        <DividerDirectionProvider>
          <AppWithTheme />
        </DividerDirectionProvider>
      </DataProvider>
    </DarkModeProvider>
  </React.StrictMode>,
)
