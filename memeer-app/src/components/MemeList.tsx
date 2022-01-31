import React, { ComponentProps } from "react";
import { MemeInterface } from "src/types";
import styled from "styled-components";
import Meme from "./Meme";

const MemeListRoot = styled.section`
  padding-top: 3.5em;
`;

interface inpProps extends ComponentProps<any> {
  memeList: MemeInterface[];
}

const MemeList: React.FC<inpProps> = ({ memeList }) => {
  return (
    <MemeListRoot>
      {memeList.map((meme) => (
        <Meme meme={meme} />
      ))}
    </MemeListRoot>
  );
};

export default MemeList;
