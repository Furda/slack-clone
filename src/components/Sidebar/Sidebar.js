import React from "react";
import styled from "styled-components";

import { sidebarItemsData } from "../../data/SidebarData";

// Icons
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";

function Sidebar() {
  return (
    <Container>
      <WorkspaceContainer>
        <Name>CleverProgrammer</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {sidebarItemsData.map((item) => (
          <MainChannelItem>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelsContainer>
          <div>Channels</div>
          <AddIcon />
        </NewChannelsContainer>
        <ChannelsList>
          <Channel>#Channel 1</Channel>
          <Channel>#Channel 2</Channel>
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

// Styles
const Container = styled.div`
  background: #350d38;
`;

const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background-color: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div``;

const MainChannelItem = styled.div`
  color: rgb(188, 171, 199);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  &:hover {
    background: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 199);
  margin-top: 10px;
`;

const NewChannelsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;
