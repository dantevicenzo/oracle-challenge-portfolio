import contactImg from '../../assets/contact.png'
import {
  Container,
  Content,
  Form,
  Input,
  InputWrapper,
  Paragraph,
  SendMessageButton,
  Textarea,
  Title,
} from './styles'

export function Contact() {
  return (
    <Container id="contact">
      <Content>
        <img src={contactImg} alt="" />
        <Form>
          <Title>Contato</Title>
          <Paragraph>
            Quer entrar em contato comigo? <br />
            Preencha o formulário ao lado e entrarei em contato o mais rápido
            possível.
          </Paragraph>
          <InputWrapper>
            <Input type="text" placeholder="Nome" />
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Assunto" />
            <Textarea placeholder="Mensagem" />
            <SendMessageButton>Enviar Mensagem</SendMessageButton>
          </InputWrapper>
        </Form>
      </Content>
    </Container>
  )
}
