import logo from '../../assets/logo.svg'
import { Container, LogoContainer, Nav } from './styles'

export function Header() {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="" /> <strong>Dante Vicenzo</strong>
      </LogoContainer>
      <Nav>
        <ul>
          <li>
            <a href="#">Sobre mim</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Hobbies</a>
          </li>
          <li>
            <a href="#">Formação</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="mailto:contato@dantevicenzo.com">
              <strong>contato@dantevicenzo.com</strong>
            </a>
          </li>
        </ul>
      </Nav>
    </Container>
  )
}
