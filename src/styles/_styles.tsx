import { createGlobalStyle } from "styled-components";
import device from "../shared/utils/breakpoints";
export const GlobalStyle = createGlobalStyle`

:root {
	--black: #303841;
  --white: #ffffff;
  --gray: #777777;

  --blue-jaunts: #467dcd;
  --light-purple-fax: #f1f1ff;
  --hip-black: #303842;
  --geeking-orange: #f9674e;

  --red-mans: #e23d3d;
  --yee-purple: #52489c;
  --ardy-green: #1b998b;
  --wilding-yellow: #eec643;
  --ocean-blue: #81d3ca;

  --shadow-black: #22282f;
}

body {
  color: var(--white);
	background-color: var(--black);
}

p,a {
  color: var(--white);
}

`;
