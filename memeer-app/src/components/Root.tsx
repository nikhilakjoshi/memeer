import styled from "styled-components";
import NavBar from "./common/NavBar";
import { Outlet } from "react-router-dom";

const RootComp = styled.div``;

const Root: React.FC<any> = () => {
  return (
    <RootComp>
      <NavBar />
      <Outlet />
    </RootComp>
  );
};

export default Root;
