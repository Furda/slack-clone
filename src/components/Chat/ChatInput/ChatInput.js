import React from "react";
import styled from "styled-components";

// Icons
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";

function ChatInput() {
  return (
    <Container>
      <InputContainer>
        <form>
          <input type="text" placeholder="Message here..." />
          <SendButton>
            <Send />
          </SendButton>
        </form>
        <InputOptions>
          <OptionIcon>
            <InsertEmoticonIcon />
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
