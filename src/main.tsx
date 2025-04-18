import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { GlobalStyles } from '@mui/material';

const globalFontSmoothing = <GlobalStyles styles={{ body: { '-webkit-font-smoothing': 'antialiased', '-moz-osx-font-smoothing': 'grayscale' } }} />;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {globalFontSmoothing}
        <App />
    </StrictMode>,
)
