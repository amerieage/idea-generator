import React from "react"
import Banner from "./Banner"

const Footer = () => (
  <div
    style={{
      position: "sticky",
      bottom: 0,
      width: "100%",
      maxHeight: "80px",
      overflow: "hidden",
    }}
  >
    <Banner />
  </div>
)

export default Footer
