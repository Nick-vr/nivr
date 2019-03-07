import React from 'react'
import styled, { keyframes } from 'styled-components'

import Layout from '../components/layout'

const blink = keyframes`
  0%{background-color: #FFF;}
  49%{background-color: #000;}
  50%{background-color: #000;}
  99%{background-color: #000;}
  100%{background-color: #FFF;}
`

const Dot = styled.div`
  width: 30px;
  height: 30px;
  animation: ${blink} 1.7s infinite ease;
  margin: 0 0 130px 30px;
`

const InLine = styled.div`
  display: flex;
  align-items: flex-end;

  h1 {
  }
`

const IndexPage = () => (
  <Layout>
    <h1>Hi</h1>
    <h1>I'm</h1>
    <InLine>
      <h1>Nick</h1>
      <Dot />
    </InLine>
  </Layout>
)

export default IndexPage
