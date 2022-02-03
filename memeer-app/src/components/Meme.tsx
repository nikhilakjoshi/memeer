import React, { ComponentProps } from "react";
import { MemeInterface } from "src/types";
import styled from "styled-components";
import { ReactComponent as Chat } from "./../assets/chat.svg";
import { ReactComponent as Like } from "./../assets/like.svg";
import { ReactComponent as Share } from "./../assets/share.svg";
import { ReactComponent as Reshare } from "./../assets/reshare.svg";

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
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0.5em;
    .name {
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .username {
      opacity: 0.5;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-left: 0.5em;
    }
  }
  .memecontent {
    .memetitle {
      font-size: 0.95em;
      color: #1d1d1d;
      margin-bottom: 0.25em;
    }
    .imgcont {
      overflow: hidden;
      img {
        border: 1px solid #ededed;
        border-radius: 0.75em;
        width: 100%;
        height: 100%;
      }
    }
    .actions {
      margin-top: 1em;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
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
        <main className="contentContainer">
          <header className="author">
            <span className="name">{meme.user.name}</span>
            <span className="username">{meme.user.username}</span>
          </header>
          <article className="memecontent">
            <div className="memetitle">{meme.title}</div>
            <div className="imgcont">
              <img src={meme.contentUrl} />
            </div>
            <div className="actions">
              <div className="action-item">
                <Chat width={24} height={24} />
              </div>
              <div className="action-item">
                <Like width={24} height={24} />
              </div>
              <div className="action-item">
                <Share width={24} height={24} />
              </div>
              <div className="action-item">
                <Reshare width={24} height={24} />
              </div>
            </div>
          </article>
        </main>
      </div>
    </MemeRoot>
  );
};

export default Meme;
