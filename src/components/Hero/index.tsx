import ArrowUpRight from '../../assets/icon-arrow-up-right.svg'
import { Container, LinksList, Paragraph, RoundImage, Title } from './styles'

export function Hero() {
  return (
    <Container>
      <div>
        <Title>Olá, meu nome é Dante Vicenzo e construo páginas web</Title>
        <Paragraph>
          Eu sou um desenvolvedor front-end apaixonado por tecnologia e estou em
          uma jornada com o objetivo de me tornar um engenheiro de software.
        </Paragraph>
        <LinksList>
          <li>
            <a
              href="https://github.com/dantevicenzo/"
              target="_blank"
              rel="noreferrer"
            >
              Github <img src={ArrowUpRight} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dantevicenzo/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <img src={ArrowUpRight} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/dantevicenzo"
              target="_blank"
              rel="noreferrer"
            >
              Instagram <img src={ArrowUpRight} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              Currículo <img src={ArrowUpRight} alt="" />
            </a>
          </li>
        </LinksList>
      </div>
      <RoundImage />
    </Container>
  )
}
