import React from "react";
import styled from "styled-components";

export const NavItemWrapper = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  a {
    font-size: 2.5rem;
    color: var(--black);

    &:hover {
      color: var(--blue-jaunts);
    }
  }
`;

const NavItem = ({ type, link }) => {
  return (
    <NavItemWrapper>
      <a href={link}>
        <i className={`icon icon-${type}`}></i>
      </a>
    </NavItemWrapper>
  );
};

export default NavItem;
