import { Button } from "@unbyte-io/react-fuego";
import Header from "../features/header/Header";
import { PageContain } from "../shared/layouts/PageLayouts";
import styled from "styled-components";

const MegaHeading = styled.h1`
  font-size: 6rem;
  line-height: 8.6rem;
  letter-spacing: 1.06px;
  color: var(--white);
  text-align: center;
`;

export default function Home() {
  return (
    <>
      <MegaHeading>Sammy Mohamed</MegaHeading>
    </>
  );
}
