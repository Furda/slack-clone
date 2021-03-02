import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import db from "../../firebase";

// Icons
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";

function Sidebar(props) {
  const history = useHistory();

  const goToChannel = (id) => {
    if (id) {
      history.push(`/room/${id}`);
    }
  };

  const addChannel = () => {
    const newChannelName = prompt("Enter channel name:");
    if (newChannelName) {
      db.collection("rooms").add({ name: newChannelName });
    } else {
      alert("Channel name is invalid.");
    }
  };

  const deleteChannel = (id) => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .delete()
        .then(() => {
          history.replace(`/`);
        });
    }
  };

  return (
    <Container>
      <WorkspaceContainer>
        <WorkspaceName>Slack Clone App</WorkspaceName>
      </WorkspaceContainer>
      <ChannelsContainer>
        <NewChannelsContainer>
          <div>Channels</div>
          <NewChannelIcon onClick={addChannel} />
        </NewChannelsContainer>
        <ChannelsList>
          {props.rooms.map((room) => {
            return (
              <Channel key={room.id} onClick={() => goToChannel(room.id)}>
                <ChannelName># {room.name}</ChannelName>
                <DeleteChannelIcon onClick={() => deleteChannel(room.id)} />
              </Channel>
            );
          })}
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
  font-size: 20px;
  justify-content: center;
  border-bottom: 1px solid rgb(255 255 255 / 10%);
`;

const WorkspaceName = styled.div``;

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

const NewChannelIcon = styled(AddCircleOutlineIcon)`
  cursor: pointer;
  :hover {
    color: #ee254f;
  }
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 12px 4px 0;
  cursor: pointer;
  :hover {
    background: #ee254f;
  }
`;

const ChannelName = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
`;

const DeleteChannelIcon = styled(DeleteIcon)`
  cursor: pointer;
  :hover {
    color: #fff;
  }
`;
