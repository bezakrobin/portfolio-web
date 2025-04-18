import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { GlobalStyles } from '@mui/material';
import { DividerDirectionProvider} from "./contexts/DividerDirectionContext.tsx";

const globalFontSmoothing = <GlobalStyles styles={{ body: { WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' } }} />;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {globalFontSmoothing}
        <DividerDirectionProvider>
            <App />
        </DividerDirectionProvider>
    </StrictMode>,
);
