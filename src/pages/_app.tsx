import React, { createContext, useState } from 'react';
import '../styles/global.css';
import Head from 'next/head';
import config from '../../config.json';

// Theme context
export const ThemeContext = createContext({
  theme: 'dracula',
  setTheme: (theme: string) => {},
  themeColors: config.colors['dark'],
});

const themeMap = {
  dracula: config.colors['dark'],
  nord: {
    background: '#2E3440',
    foreground: '#E5E9F0',
    yellow: '#5E81AC',
    green: '#A3BE8C',
    gray: '#88C0D0',
    blue: '#EBCB8B',
    red: '#BF616A',
  },
  monokai: {
    background: '#272822',
    foreground: '#F8F8F2',
    yellow: '#F4BF75',
    green: '#A6E22E',
    gray: '#AE81FF',
    blue: '#66D9EF',
    red: '#F92672',
  },
};

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef(null);
  const [theme, setTheme] = useState('dracula');
  const themeColors = themeMap[theme] || config.colors['dark'];

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeColors }}>
      <>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
            maximum-scale="1"
          />
        </Head>

        <div
          className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base"
          onClick={onClickAnywhere}
        >
          <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
            <Component {...pageProps} inputRef={inputRef} />
          </main>
        </div>
      </>
    </ThemeContext.Provider>
  );
};

export default App;
