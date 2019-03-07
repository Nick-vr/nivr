import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html,
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rajdhani', sans-serif;
    min-height: 100vh;
    display: block;
    position: relative;
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
    {children}
    <GlobalStyle />
  </>
)

export default Layout
