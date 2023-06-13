import signature from '../../assets/signature.png'
import { Container, Content, Paragraph, SignatureImg, Title } from './styles'

export function AboutMe() {
  return (
    <Container>
      <Content>
        <Title>Sobre Mim</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          velit velit, volutpat semper dignissim dictum, imperdiet ut lacus.
          Quisque gravida ex a mattis pretium. Suspendisse potenti. Ut semper
          sagittis ligula et lacinia.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          velit velit, volutpat semper dignissim dictum, imperdiet ut lacus.
          Quisque gravida ex a mattis pretium. Suspendisse potenti. Ut semper
          sagittis ligula et lacinia. Aenean sit amet felis venenatis, egestas
          metus vitae, aliquet metus.
        </Paragraph>
        <SignatureImg src={signature} alt="" />
      </Content>
    </Container>
  )
}
