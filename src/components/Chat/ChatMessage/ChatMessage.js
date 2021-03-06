import React from "react";
import styled from "styled-components";

function ChatMessage({ text, name, image, timestamp }) {
  image = image ? image : "https://i.imgur.com/6VBx3io.png";

  return (
    <Container>
      <UserAvatar>
        <img src={image} alt="User" />
      </UserAvatar>
      <MessageContent>
        <Name>
          {name}
          <span>{new Date(timestamp.toDate()).toUTCString()}</span>
        </Name>
        <Text>{text}</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  color: #fff;
  :hover {
    background: #393a3a;
  }
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 8px;
  img {
    width: 100%;
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;

  span {
    margin-left: 8px;
    font-weight: 400;
    color: #9fa3a5;
    font-size: 13px;
  }
`;

const Text = styled.span``;
