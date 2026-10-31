// Fonts are bundled (not fetched from Google) so the PWA and the Median APK
// render identically offline. Variable files; the browser only downloads the
// unicode-range subsets it needs (Latin + Latin-ext covers French accents).
import '@fontsource-variable/inter';
import '@fontsource-variable/fraunces/opsz.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </LanguageProvider>
);
