import React from 'react';
import Proptypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
html,
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rajdhani', sans-serif;
    font-size: 2em;
    min-height: calc(100vh - 10px);
    display: block;
    position: relative;
    border-top: 5px solid #FFF;
    border-left: 5px solid #FFF;
    border-right: 5px solid #FFF;
    border-bottom: 5px solid #FFF;
    background: #000;
    color: #FFF;
  }
  canvas {
    min-height: calc(100vh - 35px);
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: #FFF;
    outline: none;
  }

  input, textarea, button {
    font-family: inherit;
  }

`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

Layout.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Layout;
