const lightTheme = {
  colors: {
    coolImages: {
      text: {
        default: "black",
        alternate: "white"
      },
      backgroundColor: {
        default: "white",
        alternate: "black"
      }
    },
    newsletterSignUp: {
      input: {
        background: "white"
      },
      button: {
        background: "#c4c4c4"
      }
    }
  }
};

const darkTheme = {
  colors: {
    coolImages: {
      text: {
        default: "white",
        alternate: "black"
      },
      backgroundColor: {
        default: "black",
        alternate: "white"
      }
    },
    newsletterSignUp: {
      input: {
        background: "black"
      },
      button: {
        background: "white"
      }
    }
  }
};

export const THEMES = {
  LIGHT: "light",
  DARK: "dark"
};

export const THEME_NAME_TO_THEME_MAP = {
  [THEMES.LIGHT]: lightTheme,
  [THEMES.DARK]: darkTheme
};
