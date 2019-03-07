import React from 'react'
import Helmet from 'react-helmet'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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

`

const Layout = ({ children }) => (
  <>
    <Helmet
      title="Nick :)"
      meta={[
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no',
        },
        {
          name: 'description',
          content: 'Nick Van Royen portfolio',
        },
        {
          name: 'keywords',
          content: 'Nick Van Royen, portfolio',
        },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Rajdhani:300,400,700"
        rel="stylesheet"
      />
      <html lang="en" />
    </Helmet>

    {children}
    <GlobalStyle />
  </>
)

export default Layout
