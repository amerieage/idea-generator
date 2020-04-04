import React from "react"
import styled from "styled-components"
import Space from "./Space"
import Button from "@material-ui/core/Button"

const Root = styled.div`
  flex: 1;
  text-align: center;
`

const MainPage = () => (
  <Root>
    <Space direction="y" value="four" />
    <Space direction="y" value="four" />
    <Space direction="y" value="four" />
    <em> Idea Generator </em>
    <h1 style={{ marginTop: 0, fontSize: 50 }}>You Should....</h1>
    <Space direction="y" value="four" />
    <Space direction="y" value="four" />
    <Button
      variant="outlined"
      style={{ color: "#5D484C", backgroundColor: "#FFC5CF" }}
    >
      Generate
    </Button>
  </Root>
)

export default MainPage
