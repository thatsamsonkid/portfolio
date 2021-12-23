export const theme = {
  name: "default",
  backgroundColor: "#FFF",
  palette: {
    primary: {
      main: "#212121",
      light: "#484848",
      dark: "#000000",
      contrastText: "#000000",
    },
    secondary: {
      main: "#7000ad",
      light: "#a443e0",
      dark: "#3c007c",
    },
    tertiary: {
      main: "#212121",
      light: "#484848",
      dark: "#000000",
    },
    error: {
      main: "#ff6b6b",
    },
    background: {
      default: "#121212",
    },
  },
  buttons: {
    corners: "rounded",
    primary: {
      bg: "#7bd9a7",
      fg: "#003365",
      hfg: "#003365",
      hbg: "#fff",
      accent: "",
    },
    secondary: {
      bg: "#484848",
      fg: "#fff",
      hfg: "#212121",
      hbg: "#fff",
      accent: "",
    },
    tertiary: {
      bg: "#003365",
      fg: "#fff",
      hfg: "#fff",
      hbg: "#7bd9a7",
      accent: "",
      haccent: "",
    },
  },
  card: {
    border: "",
  },
  formField: {
    style: "outlineFloat",
    labelbg: "",
    inputbg: "",
    outline: "#003365",
    focusOutline: "#7bd9a7",
    labelfg: "#003365",
    errorfg: "",
  },
  breakpoints: {
    mobile: `(min-width: 575.98px) and (max-width: 768px)`,
    mobileAndAbove: `(min-width: 575.98px)`,
    tablet: `(min-width: 768px) and (max-width: 992px)`,
    tabletAndAbove: `(min-width: 768px)`,
    desktopAndAbove: `(min-width: 993px)`,
    lgDesktopAndAbove: `(min-width: 1300px)`,
  },
};
