import Button, { TomatoButton } from './components/Button.styled';
import Container from './components/Container.styled.';
import HeaderText from './components/Header.styled';
import StyledLink from './components/Link.styled';

const App = () => {
  return (
    <>
    <Container bg="green">
      <HeaderText color='black'>Styled Components</HeaderText>
      <Button primary>Click</Button>
      <Button>Click</Button>
      <TomatoButton>Click</TomatoButton>
      <TomatoButton primary>Click</TomatoButton>
      <HeaderText>Styled Components</HeaderText>
      <StyledLink href="https://clarusway.com/" target="_blank">
          Clarusway
        </StyledLink>
    </Container>
      
    </>
  );
};

export default App;