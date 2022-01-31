import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "./../../assets/logo.svg";
import { Link } from "react-router-dom";

const NavbarRoot = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 3.5em;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  border-bottom: 1px solid #efefef;
  padding: 0 1em;
  .nav-link {
    text-decoration: none;
  }
  .nav-link:active,
  .nav-link:visited {
    background: unset;
    color: unset;
    text-decoration: unset;
  }
`;

const Location = styled.div`
  margin-left: 1em;
  h3 {
    font-weight: bold;
  }
`;

const NavBar: React.FC<any> = () => {
  return (
    <NavbarRoot>
      <Logo width={24} height={24} />
      <Location>
        <Link className="nav-link" to="/app/home">
          <h3>Meemer</h3>
        </Link>
      </Location>
    </NavbarRoot>
  );
};

export default NavBar;
