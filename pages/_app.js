import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { Global, css} from '@emotion/react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Sanjana and Shirish</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Global styles={css` .chq-atc {
  display: inline-block;
  position: relative;
}

.chq-atc--button {
  background: transparent;
  border: 0;
  border-radius: 5px;
  box-sizing: border-box;
  color: #6a89af;
  cursor: pointer;
  display: inline;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  outline: none;
  padding: 4px 10px;
}

.chq-atc--button:focus {
  background-color: #eaeaea;
}

.chq-atc--button:hover {
  background-color: #eaeaea;
}

.chq-atc--button svg {
  vertical-align: text-bottom;
}

.chq-atc--button path {
  fill: #6a89af;
}

.chq-atc--dropdown {
  background-color: white;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  box-shadow: .5px .5px 3px rgba(0, 0, 0, .2);
  box-sizing: border-box;
  position: absolute;
  text-align: left;
  white-space: nowrap;
  width: 100%;
  z-index: 1;
}

.chq-atc--dropdown a {
  color: #6a89af;
  display: block;
  padding: 8px 15px;
  text-decoration: none;
}

.chq-atc--dropdown a:hover {
  background-color: #eaeaea;
} `}/>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
