import logo from './logo.svg';
import './App.css';

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

//Container 생성
const Container = style.div``;

export default App;
