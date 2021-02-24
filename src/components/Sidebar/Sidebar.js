import React from "react";
import styled from "styled-components";

import { sidebarItemsData } from "../../data/SidebarData";
import db from "../../firebase";

// Icons
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";

function Sidebar(props) {
  const addChannel = () => {
    const newChannelName = prompt("Enter channel name:");
    if (newChannelName) {
      db.collection("rooms").add({ name: newChannelName });
    } else {
      alert("Channel name is invalid.");
    }
  };

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
          <AddIcon onClick={addChannel} />
        </NewChannelsContainer>
        <ChannelsList>
          {props.rooms.map((room) => (
            <Channel># {room.name}</Channel>
          ))}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

// Styles
const Container = styled.div`
  background: #28272d;
`;

const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid rgb(255 255 255 / 10%);
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background-color: white;
  color: #28272d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div``;

const MainChannelItem = styled.div`
  color: #9fa3a5;
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding: 5px 0 5px 19px;
  cursor: pointer;
  :hover {
    background: #ee254f;
  }
`;

const ChannelsContainer = styled.div`
  color: #9fa3a5;
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
    background: #ee254f;
  }
`;
