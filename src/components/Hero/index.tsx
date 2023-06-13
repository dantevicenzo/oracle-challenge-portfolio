import ArrowUpRight from '../../assets/icon-arrow-up-right.svg'
import { Container, LinksList, Paragraph, RoundImage, Title } from './styles'

export function Hero() {
  return (
    <Container>
      <div>
        <Title>Olá, meu nome é Dante Vicenzo e construo páginas web</Title>
        <Paragraph>
          Eu sou formado em Filosofia e atualmente estou participando no projeto
          Oracle ONE na Alura.
        </Paragraph>
        <LinksList>
          <li>
            <a href="#">
              Github <img src={ArrowUpRight} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              Linkedin <img src={ArrowUpRight} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
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
