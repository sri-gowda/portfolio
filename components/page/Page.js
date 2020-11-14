import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "../../constants/GlobalStyle";
import { StyledPage, Container, Inner, Bubbles } from "./styles";
import Header from "../header/Header";
import Meta from "../meta/Meta";
import AudioPlayer from "../audioplayer";

const bubbleConfig = {
  bubbleone: {
    height: 1000,
    width: 1000,
    top: -550,
    right: -400,
  },
  bubbleTwo: {
    height: 314,
    width: 314,
    bottom: 0,
    left: 0,
  },
  bubbleThree: {
    height: 300,
    width: 300,
    bottom: -100,
    right: -150,
  },
};

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Bubbles bubble={bubbleConfig.bubbleone} />
          <Bubbles bubble={bubbleConfig.bubbleTwo} />
          <Bubbles bubble={bubbleConfig.bubbleThree} />
          <Header />
          <Container>
            <Inner>{this.props.children}</Inner>
          </Container>
        </StyledPage>
        <AudioPlayer />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}

export default Page;
