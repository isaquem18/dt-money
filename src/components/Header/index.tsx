import Logo from '../../assets/logo.svg';
import { Container, InnerContainer } from './styles';

interface HeaderPprops {
  handleOpenModalButtonClick: () => void;
}

export function Header({ handleOpenModalButtonClick }: HeaderPprops) {
  return (
    <Container>
      <InnerContainer>
        <img src={Logo} alt="dtmoney" />
        <button onClick={handleOpenModalButtonClick}>Nova transação</button>
      </InnerContainer>
    </Container>
  )
}