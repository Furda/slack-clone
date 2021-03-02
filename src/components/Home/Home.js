import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import Chatbot from "../../lotties/chatbot";

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Chatbot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Lottie options={defaultOptions} height={400} width={400} />
      <Info>Select or create channel</Info>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  font-size: 20px;
`;
