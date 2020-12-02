import React, {useState} from "react";
import styled from "styled-components";

function App(){
  const [color, setColor] = useState("black");
  // state를 선언하기 위하여 useState를 사용한다.
  // 리액트에선 사용자와 상호작용 하거나 값에 따라 화면에 변화를 주는 데이터를 state라고 부른다.
  // useState는 길이가 2인 배열을 반환한다.
  // == const color = useState("black")[0];
  // == const setColor = useState("black")[1];
  // black는 state의 초기값
  // state의 이름은 자유롭게 짓지만 apple 이라는 이름으로 지었으면 modifier 이름은 setApple과 같이 set으로 시작

  return (
  <Container>
    <Pallete color={color} />
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
  background: ${props => props.color};
`;  
// state를 pallet에 전달 -> pallet에 color 값 전달
// 이렇게 컴포넌트간 전달해주는 값 = props.
// == App컴포넌트가 Pallete 에게 color prop을 전달했다. 라고 표현.
// ${props => props.color} 는 styled-components의 규칙

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
