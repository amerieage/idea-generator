import React from "react"
import LandingPage from "./LandingPage.js"
import MainPage from "./MainPage"
import Footer from "./Footer"
import styled, { createGlobalStyle } from "styled-components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const GlobalStyle = createGlobalStyle`
  :root {
    --space-eighth: 2px;
    --space-quarter: 4px;
    --space-half: 8px;
    --space-one: 16px;
    --space-one-and-half: 24px;
    --space-two: 32px;
    --space-three: 48px;
    --space-four: 64px;
  }
  
  body {
    box-sizing: border-box;
  }
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

function App() {
  return (
    <Root>
      <GlobalStyle />

      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route path="/main">
            <MainPage />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </Root>
  )
}

export default App
