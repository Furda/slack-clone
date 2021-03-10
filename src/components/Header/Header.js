import React from "react";
import styled from "styled-components";

// Icons
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header(props) {
  return (
    <Container>
      <Main>
        <AccessIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search..." />
          </Search>
        </SearchContainer>
        <HelpIcon />
      </Main>
      <UserContainer>
        <Name>{props.user.name}</Name>
        <UserImage onClick={props.signOut}>
          <img
            src={
              props.user.imageUrl
                ? props.user.imageUrl
                : "https://i.imgur.com/6VBx3io.png"
            }
            alt="User"
          />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: #11141d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 1px 00 rgb(255 255 255 / 10%);
`;

const Main = styled.div`
  display: flex;
  margin: 0 16px;
  align-items: center;
`;

const AccessIcon = styled(AccessTimeIcon)`
  cursor: pointer;
  :hover {
    color: #ee254f;
  }
`;

const SearchContainer = styled.div`
  min-width: 400px;
  margin: 0 16px;
`;

const Search = styled.div`
  box-shadow: inset 0 0 0 1px #ee254f;
  width: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  input {
    background-color: transparent;
    border: none;
    padding: 4px 8px;
    color: white;
    width: 100%;
  }
  input:focus {
    outline: none;
  }
`;

const HelpIcon = styled(HelpOutlineIcon)`
  cursor: pointer;
  :hover {
    color: #ee254f;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position absolute;
  right: 0;
`;

const Name = styled.div`
  padding-right: 16px;
`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 3px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;
