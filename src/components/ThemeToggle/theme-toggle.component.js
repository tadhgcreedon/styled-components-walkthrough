import React from "react";

import { ThemeToggleContainer, ThemeToggleInput } from "./theme-toggle.style";

import { THEMES } from "../../constants/themes";

export const ThemeToggle = ({ setTheme }) => (
  <ThemeToggleContainer>
    {`Theme: `}
    <ThemeToggleInput onChange={e => setTheme(e.target.value)}>
      <option>{THEMES.LIGHT}</option>
      <option>{THEMES.DARK}</option>
    </ThemeToggleInput>
  </ThemeToggleContainer>
);
