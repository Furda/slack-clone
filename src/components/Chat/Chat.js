import React from "react";
import styled from "styled-components";

import ChatInput from "./ChatInput/ChatInput";
import ChatMessage from "./ChatMessage/ChatMessage";

// Icons
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function Chat() {
  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName># slack-clone</ChannelName>
          <ChannelInfo>
            Company-wide announcements and work-based matters
          </ChannelInfo>
        </Channel>
        <ChannelDetails>
          <p>Details</p>
          <DetailIcon />
        </ChannelDetails>
      </Header>
      <MessageContainer>
        <ChatMessage />
      </MessageContainer>
      <ChatInput />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  background: #1f1e24;
  display: grid;
  grid-template-rows: 65px auto min-content;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(255 255 255 / 10%);
  align-items: center;
  padding: 0 20px;
  color: #fff;
`;

const Channel = styled.div``;

const ChannelName = styled.div`
  font-weight: 700;
`;

const ChannelInfo = styled.div`
  color: #9fa3a5;
  font-weight: 400;
  font-size: 13px;
`;

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  color: #9fa3a5;
`;

const DetailIcon = styled(InfoOutlinedIcon)`
  padding-left: 10px;
`;

const MessageContainer = styled.div``;
