import React from "react";
import styled from "styled-components";

// Icons
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function Chat() {
  return (
    <Container>
      <Header>
        <ChannelInfo>
          <ChannelName>#slack-clone</ChannelName>
          <StarOutlineRoundedIcon></StarOutlineRoundedIcon>
          <ChannelTopic>Hello slack!</ChannelTopic>
        </ChannelInfo>
        <Details>
          <p>Details</p>
          <InfoOutlinedIcon />
        </Details>
      </Header>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  background: #1f1e24;
  display: grid;
  grid-template-rows: 65px auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ee254f;
  align-items: center;
  padding: 0 20px;
  color: #fff;
`;

const ChannelInfo = styled.div`
  display: grid;
  grid-template-columns: 100px 10px;
  grid-template-rows: 20px 20px;
`;

const ChannelName = styled.div`
  font-weight: bold;
`;

const ChannelTopic = styled.div`
  color: #9fa3a5;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  p {
    padding-right: 10px;
  }
`;
