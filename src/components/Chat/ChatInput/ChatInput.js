import React, { useState } from "react";
import styled from "styled-components";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

// Icons
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";

function ChatInput(props) {
  const [input, setInput] = useState("");
  const [emojiPickerState, SetEmojiPickerState] = useState(false);

  const send = (e) => {
    e.preventDefault();
    props.sendMessage(input);
    setInput("");
  };

  const toggleEmojis = (e) => {
    e.preventDefault();
    SetEmojiPickerState(!emojiPickerState);
  };

  let emojiPicker;
  if (emojiPickerState) {
    emojiPicker = (
      <Picker
        style={pickerStyles}
        title="Pick your emoji…"
        emoji="point_up"
        onSelect={(emoji) => setInput(input + emoji.native)}
      />
    );
  }

  return (
    <Container>
      <InputContainer>
        <form>
          <input
            type="text"
            placeholder="Message here..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <SendButton>
            <Send type="submit" onClick={send} />
          </SendButton>
        </form>
        <InputOptions>
          {emojiPicker}
          <OptionIcon>
            <InsertEmoticonIcon onClick={toggleEmojis} />
          </OptionIcon>
          <OptionIcon>
            <AttachFileIcon />
          </OptionIcon>
        </InputOptions>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding: 0 24px 20px;
`;

const InputContainer = styled.div`
  border: 1px solid #ee254f;
  border-radius: 4px;
  form {
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;
    input {
      flex: 1;
      border: none;
      color: #fff;
      font-size: 13px;
      background: transparent;
      :focus {
        outline: none;
      }
    }
  }
`;

const SendButton = styled.div`
  background: #ee254f;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;
  .MuiSvgIcon-root {
    width: 18px;
  }
  :hover {
    background: #fff;
    border: 1px solid #ee254f;
  }
`;

const Send = styled(SendRoundedIcon)`
  color: #fff;
  :hover {
    color: #ee254f;
  }
`;

const InputOptions = styled.div`
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid #ee254f;
`;

const OptionIcon = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  :hover {
    background: #ee254f;
    cursor: pointer;
  }
`;

const pickerStyles = {
  position: "absolute",
  bottom: 60,
  right: 0,
  cssFloat: "right",
  marginLeft: "200px",
};
