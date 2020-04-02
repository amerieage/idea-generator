import React from "react";
import styled from "styled-components";

/**
 * Space uses design token values to create space between components. Instead of scoping margins to each component
 * to acommodate a specific layout, use Space to allow components to be more modular.
 */
const Space = props => {
  return <SpaceRoot {...props} />;
};

Space.defaultProps = {
  direction: "y"
};

// prettier-ignore
const SpaceRoot = styled.div.withConfig({ displayName: 'Space' })`
  display: ${props => props.display ? props.display : 'block'};
  height: ${props => (props.direction === 'y') ? `var(--space-${props.value})` : '1px'};
  width: ${props => props.direction === 'x' ? `var(--space-${props.value})` : '1px'};
`

export default Space;
