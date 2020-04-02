import React from "react"
import Banner from "./Banner"
import Space from "./Space"
import Button from "@material-ui/core/Button"

const Footer = () => (
  <div
    style={{
      position: "absolute",
      bottom: 0,
      width: "100%",
      maxHeight: "80px",
      overflow: "hidden"
    }}
  >
    <Banner />
  </div>
)

const Definition = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <Space direction="y" value="three" />
        <div
          style={{
            border: "1px solid rgba(0,0,0,.2)",
            padding: 24,
            borderRadius: 8
          }}
        >
          <h1 style={{ marginBottom: 0 }}>bored</h1>
          <h2 style={{ marginTop: 0 }}>/bôrd/</h2>
          <em>adjective</em>
          <p>
            feeling weary because one is unoccupied or lacks interest in one's
            current activity.
          </p>
        </div>
      </div>
    </div>
  )
}

const Description = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: 12
      }}
    >
      <div
        style={{
          width: 580
        }}
      >
        <p style={{ textAlign: "center" }}>
          <em>
            Sound familiar? Don't know what to do? Well, you've reached the
            right place! Welcome to the Idea Generator. The place where the
            simple click of a button will provide relief for your case of
            constant boredom. Go ahead, try it!
          </em>
        </p>
      </div>
    </div>
  )
}

const TryMe = () => (
  <div
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <Button
      variant="outlined"
      style={{ color: "#5D484C", backgroundColor: "#FFC5CF" }}
    >
      Click Here
    </Button>
  </div>
)

const LandingPage = () => {
  return (
    <div style={{ flex: 1, height: "100%", position: "relative" }}>
      <Definition />
      <Description />
      <TryMe />
      <Footer />
    </div>
  )
}

export default LandingPage
