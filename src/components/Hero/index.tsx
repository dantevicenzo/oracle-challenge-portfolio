import ArrowUpRight from '../../assets/icon-arrow-up-right.svg'
import { Container, LinksList, Paragraph, RoundImage, Title } from './styles'
import curriculumVitae from '../../assets/CV - Dante Vicenzo Pereira Vale dos Passos.pdf'

export function Hero() {
  return (
    <Container>
      <div>
        <Title>Olá, meu nome é Dante Vicenzo e construo sistemas web</Title>
        <Paragraph>
          Eu sou um desenvolvedor de software apaixonado por tecnologia e estou
          em uma jornada com o objetivo de me tornar um engenheiro de software.
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
            <a href={curriculumVitae} target="_blank" rel="noreferrer">
              Currículo <img src={ArrowUpRight} alt="" />
            </a>
          </li>
        </LinksList>
      </div>
      <RoundImage />
    </Container>
  )
}
