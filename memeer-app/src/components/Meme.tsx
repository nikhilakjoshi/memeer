import React, { ComponentProps } from "react";
import { MemeInterface } from "src/types";
import styled from "styled-components";

const MemeRoot = styled.article`
  border-bottom: 1px solid #ededed;
  padding: 1em;
  .memeContainer {
    display: flex;
    align-items: flex-start;
    gap: 0.75em;
  }
  .avatar {
    flex: 0 0 3.25em;
  }
  .avtrimg {
    border-radius: 999px;
    width: 3.25em;
    height: 3.25em;
  }
  .contentContainer {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .author {
    overflow: hidden;
    .name {
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .username {
      opacity: 0.5;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

interface inpProps extends ComponentProps<any> {
  meme: MemeInterface;
}

const Meme: React.FC<inpProps> = ({ meme }) => {
  return (
    <MemeRoot>
      <div className="memeContainer">
        <div className="avatar">
          <img src={meme.user.thumbnail} alt={meme.user.username} className="avtrimg" />
        </div>
        <header className="contentContainer">
          <div className="author">
            <span className="name">{meme.user.name}</span>
            <span className="username">{meme.user.username}</span>
          </div>
        </header>
      </div>
    </MemeRoot>
  );
};

export default Meme;
