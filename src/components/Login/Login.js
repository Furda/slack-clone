import React from "react";
import styled from "styled-components";

import { auth, provider } from "../../firebase";

function Login(props) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = {
          name: result.user.displayName,
          imageUrl: result.user.photoURL,
        };
        props.setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((err) => {
        throw err.message;
      });
  };

  return (
    <Container>
      <Content>
        <SlackImg src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png" />
        <h1>Sign in Slack</h1>
        <SigninButton onClick={signIn}>Sign In With Google</SigninButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  background: #1f1e24;
  color: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: #28272d;
  padding: 100px;
  border-radius: 5px;
  box-shadow: 0 1px 3px #000, 0 1px 2px #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SlackImg = styled.img`
  height: 100px;
`;

const SigninButton = styled.button`
  margin-top: 50px;
  background-color: #ee254f;
  color: #fff;
  border: none;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`;
