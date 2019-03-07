import React from 'react'
import styled, { keyframes } from 'styled-components'

import Layout from '../components/layout'

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    margin-bottom: -20px;
  }
`

const blink = keyframes`
  0%{background-color: #FFF;}
  49%{background-color: #000;}
  50%{background-color: #000;}
  90%{background-color: #FFF;}
  99%{background-color: #000;}
  100%{background-color: #FFF;}
`

const Dot = styled.div`
  animation: ${blink} 1.7s infinite ease;
  align-self: center;
  width: 20px;
  height: 20px;
  margin-top: 100px;
`

const IndexPage = () => (
  <Layout>
    <Wrap>
      <Dot />
      <h1>Hi</h1>
      <h1>I'm</h1>
      <h1>Nick</h1>
      <Dot />
    </Wrap>
  </Layout>
)

export default IndexPage
