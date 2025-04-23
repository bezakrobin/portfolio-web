import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GlobalStyles } from '@mui/material';
import { DividerDirectionProvider} from "./contexts/DividerDirectionContext.tsx";

const globalFontSmoothing = <GlobalStyles styles={{ body: { WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' } }} />;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {globalFontSmoothing}
      <DividerDirectionProvider>
        <App />
      </DividerDirectionProvider>
  </React.StrictMode>,
)
