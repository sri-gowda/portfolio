import styled from "styled-components";

export const StyledPage = styled.div`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.black};
  height: 100vh;
  overflow: auto;
`;

export const Inner = styled.div`
  margin: 0 auto;
  padding: 2rem;
`;

export const Container = styled.div`
  @media (min-width: 400px) {
    padding: 0 100px;
  }
`;

export const Container2 = styled.div`
  height: calc(100vh - 170px);
  background: #fff;
  z-index: 1;
  border-radius: 5px;
`;

export const Bubbles = styled.div`
  position: fixed;
  height: ${props => props.bubble.height}px;
  width: ${props => props.bubble.width}px;
  top: ${props => props.bubble.top}px;
  right: ${props => props.bubble.right}px;
  bottom: ${props => props.bubble.bottom}px;
  left: ${props => props.bubble.left}px;
  background-color: ${props => props.theme.secondary};
  border-radius: 50%;
  opacity: 0.2;
`;
