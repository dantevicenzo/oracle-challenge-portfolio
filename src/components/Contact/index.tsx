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
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import emailjs from '@emailjs/browser'

const contactFormValidationSchema = z.object({
  name: z.string(),
  email: z.string(),
  subject: z.string(),
  message: z.string(),
})

type TContactFormData = z.infer<typeof contactFormValidationSchema>

export function Contact() {
  const { register, handleSubmit, reset } = useForm<TContactFormData>({
    resolver: zodResolver(contactFormValidationSchema),
  })

  function sendEmail(
    senderName: string,
    subject: string,
    senderEmail: string,
    message: string,
  ) {
    const templateParams = {
      senderName,
      senderEmail,
      message,
      subject,
    }

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        alert('Mensagem Enviada!')
        reset()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  function onSubmit(formData: TContactFormData) {
    sendEmail(formData.name, formData.subject, formData.email, formData.message)
  }

  return (
    <Container id="contact">
      <Content>
        <img src={contactImg} alt="" />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>Contato</Title>
          <Paragraph>
            Quer entrar em contato comigo? <br />
            Preencha o formulário ao lado e entrarei em contato o mais rápido
            possível.
          </Paragraph>
          <InputWrapper>
            <Input type="text" {...register('name')} placeholder="Nome" />
            <Input type="email" {...register('email')} placeholder="Email" />
            <Input type="text" {...register('subject')} placeholder="Assunto" />
            <Textarea {...register('message')} placeholder="Mensagem" />
            <SendMessageButton type="submit">Enviar Mensagem</SendMessageButton>
          </InputWrapper>
        </Form>
      </Content>
    </Container>
  )
}
