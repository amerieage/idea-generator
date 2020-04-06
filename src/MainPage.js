import React, { useState } from "react"
import styled from "styled-components"
import Space from "./Space"
import Button from "@material-ui/core/Button"
import ideas from "./ideas"
import { Link } from "react-router-dom"

const Root = styled.div`
  flex: 1;
  text-align: center;
`

const Idea = ({ idea }) => {
  const { message, image, link } = idea

  return (
    <>
      {link ? (
        <a
          style={{ margin: "16px 0px", display: "block" }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {message}
        </a>
      ) : (
        <p>{message}</p>
      )}
      {image && image}
    </>
  )
}

const MainPage = () => {
  const [currentIdea, setIdea] = useState(
    ideas[Math.floor(Math.random() * ideas.length)]
  )

  const getNewIdea = () => {
    let newIndex = Math.floor(Math.random() * ideas.length)

    if (ideas[newIndex] === currentIdea) {
      newIndex === ideas.length - 1
        ? (newIndex = 0)
        : (newIndex = ideas.length - 1)
    }

    setIdea(ideas[newIndex])
  }

  return (
    <Root>
      <Space direction="y" value="two" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/" style={{ width: 72 }}>
          back
        </Link>
        <em> Idea Generator </em>
        <div style={{ width: 72, height: 1 }} />
      </div>

      <h1 style={{ marginTop: 0, fontSize: 50, marginBottom: 0 }}>
        You Should....
      </h1>

      <Space direction="y" value="one" />

      <Button
        onClick={getNewIdea}
        variant="outlined"
        style={{ color: "#5D484C", backgroundColor: "#FFC5CF" }}
      >
        Generate another idea
      </Button>

      <Idea idea={currentIdea} />

      <Space direction="y" value="four" />
    </Root>
  )
}

export default MainPage
