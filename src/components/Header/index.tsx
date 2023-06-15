import logo from '../../assets/logo.svg'
import { Container, LogoContainer, Nav } from './styles'
import { Link } from 'react-scroll'

export function Header() {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="" /> <strong>Dante Vicenzo</strong>
      </LogoContainer>
      <Nav>
        <ul>
          <li>
            <Link href="#about-me" to="about-me" smooth duration={450}>
              Sobre mim
            </Link>
          </li>
          <li>
            <Link href="#skills" to="skills" smooth duration={450}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="#hobbies" to="hobbies" smooth duration={450}>
              Hobbies
            </Link>
          </li>
          <li>
            <Link href="#education" to="education" smooth duration={450}>
              Formação
            </Link>
          </li>
          <li>
            <Link href="#experience" to="experience" smooth duration={450}>
              Projetos
            </Link>
          </li>
          <li>
            <Link href="#contact" to="contact" smooth duration={450}>
              contato@dantevicenzo.com
            </Link>
          </li>
        </ul>
      </Nav>
    </Container>
  )
}
