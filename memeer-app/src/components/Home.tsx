import React, { useEffect, useState } from "react";
import { DB } from "./../db";
import { MemeInterface } from "src/types";
import styled from "styled-components";
import MemeList from "./MemeList";

const HomeRoot = styled.main`
  background-color: #fff;
  height: 100vh;
`;

const Home: React.FC<any> = () => {
  const [memeList, setmemeList] = useState<MemeInterface[]>([]);
  useEffect(() => {
    setmemeList(DB);
  }, []);
  return (
    <HomeRoot>
      <MemeList memeList={memeList} />
    </HomeRoot>
  );
};

export default Home;
