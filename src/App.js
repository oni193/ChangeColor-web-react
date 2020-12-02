import React, {useState} from "react";
import styled from "styled-components";

function App(){
  return (
  <Container>
    <Pallete />
    <ButtonContainer>
      <CyanButton />
      <BrownButton />
      <PinkButton />
    </ButtonContainer>
  </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Pallete = styled.div`
  width: 700px;
  height: 700px;
  border: 1px solid black;
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  width: 700px;
  display: flex;
  justify-content: center;  
`;

const Button = styled.button`
  margin: 0 5px;
  width: 100px;
  height: 100px; 
  border-radius: 50px;
  outline: none;
  border: none;
  cursor: pointer;
`;

//위에 const Button = styled.button 을 받아온거임!! styled.button이 아니라..g
const CyanButton = styled(Button)`
  background: cyan;
`;

const BrownButton = styled(Button)`
  background: brown;
`;

const PinkButton = styled(Button)`
  background: pink;
`;

export default App;
