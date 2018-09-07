import React from "react";
import { ThemeProvider } from "styled-components";

import { Container } from "./right-panel.style";

import { CoolImages } from "../CoolImages";
import { NewsletterSignUp } from "../NewsletterSignUp";
import { ThemeToggle } from "../ThemeToggle";

import { THEMES, THEME_NAME_TO_THEME_MAP } from "../../constants/themes";

export class RightPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEMES.LIGHT
    };
  }

  setTheme = theme => {
    this.setState(state => ({ ...state, theme }));
  };

  render = () => (
    <ThemeProvider theme={THEME_NAME_TO_THEME_MAP[this.state.theme]}>
      <Container>
        <ThemeToggle setTheme={this.setTheme} />
        <CoolImages />
        <NewsletterSignUp />
      </Container>
    </ThemeProvider>
  );
}
