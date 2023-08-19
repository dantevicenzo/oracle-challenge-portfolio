import signature from '../../assets/signature.png'
import { Container, Content, Paragraph, SignatureImg, Title } from './styles'

export function AboutMe() {
  return (
    <Container id="about-me">
      <Content>
        <Title>Sobre Mim</Title>
        <Paragraph>
          Olá! Meu nome é Dante Vicenzo e sou um desenvolvedor de software
          apaixonado por tecnologia. Ao longo dos anos, tive o privilégio de
          trabalhar como cineasta, cinematógrafo e até mesmo como piloto de
          drone, contando histórias e capturando imagens deslumbrantes de
          diferentes perspectivas. Atualmente, estou embarcando em uma nova
          jornada com o objetivo de me tornar um engenheiro de software.
        </Paragraph>
        <Paragraph>
          Desenvolvi habilidades valiosas como cineasta, incluindo a capacidade
          de trabalhar em equipe, gerenciar projetos complexos e comunicar
          histórias de maneira envolvente. Meu fundo cinematográfico me ensinou
          a ser criativo, adaptável e a abordar desafios com uma mentalidade
          aberta. Agora, estou aplicando essas habilidades para explorar o mundo
          da tecnologia e da programação, onde a narrativa é moldada através de
          códigos e resolução de problemas.
        </Paragraph>
        <Paragraph>
          Minha formação acadêmica inclui um diploma em Filosofia, o que me
          permitiu desenvolver habilidades analíticas e uma mente questionadora.
          Através da filosofia, aprendi a abordar problemas de forma crítica e a
          buscar soluções inovadoras.
        </Paragraph>
        <Paragraph>
          Combinando essa mentalidade com meu desejo de aprender e crescer na
          área da tecnologia, estou comprometido em aprimorar minhas habilidades
          de desenvolvimento de software, adquirindo conhecimento em linguagens
          de programação, além de frameworks populares como React e Node.js.
          Atualmente, estou buscando oportunidades que me permitam expandir meu
          conjunto de habilidades e ganhar experiência prática. Se você está
          procurando um profissional apaixonado, com uma perspectiva
          multidisciplinar e disposto a enfrentar novos desafios, estou ansioso
          para colaborar e contribuir em projetos.
        </Paragraph>
        <SignatureImg src={signature} alt="" />
      </Content>
    </Container>
  )
}
