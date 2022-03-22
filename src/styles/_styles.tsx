import { device } from "@unbyte-io/react-fuego";
import { createGlobalStyle } from "styled-components";
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

.sm-tab{
  font-size: 1.6rem;
  font-weight: 600;
}

// TODO: Move to library
/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
}

/*Change text in autofill textbox*/
input:-webkit-autofill{
    -webkit-text-fill-color: #fff !important;
}

p {
  font-size: 1.6rem;

  @media ${device.tabletAndAbove} {
    font-size: 2rem;
  }
}
`;
