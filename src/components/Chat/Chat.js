import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import firebase from "firebase";

import ChatInput from "./ChatInput/ChatInput";
import ChatMessage from "./ChatMessage/ChatMessage";
import db from "../../firebase";

// Icons
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function Chat(props) {
  const { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  const getChannel = () => {
    db.collection("rooms")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
      });
  };

  const getMessages = () => {
    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        const messages = snapshot.docs.map((doc) => doc.data());
        setMessages(messages);
      });
  };

  const sendMessage = (text) => {
    if (channelId) {
      const message = {
        text: text,
        user: props.user.name,
        userImage: props.user.imageUrl,
        timestamp: firebase.firestore.Timestamp.now(),
      };
      db.collection("rooms").doc(channelId).collection("messages").add(message);
    }
  };

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId]);

  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName># {channel && channel.name}</ChannelName>
          <ChannelInfo>{channel.description}</ChannelInfo>
        </Channel>
        <ChannelDetails>
          <p>Details</p>
          <DetailIcon />
        </ChannelDetails>
      </Header>
      <MessageContainer>
        {messages.length > 0 &&
          messages.map((data, index) => (
            <ChatMessage
              key={index}
              text={data.text}
              name={data.user}
              image={data.userImage}
              timestamp={data.timestamp}
            />
          ))}
      </MessageContainer>
      <ChatInput sendMessage={sendMessage} />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  background: #1f1e24;
  display: grid;
  grid-template-rows: 65px auto min-content;
  min-height: 0;
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

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
