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
            <a href="#about-me">Sobre mim</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#hobbies">Hobbies</a>
          </li>
          <li>
            <a href="#education">Formação</a>
          </li>
          <li>
            <a href="#experience">Projetos</a>
          </li>
          <li>
            <a href="#contact">
              <strong>contato@dantevicenzo.com</strong>
            </a>
          </li>
        </ul>
      </Nav>
    </Container>
  )
}
