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
  name: z
    .string()
    .nonempty({
      message: 'O campo nome é obrigatório.',
    })
    .max(50, {
      message: 'O campo não pode exceder o limite máximo de 50 caracteres',
    }),
  email: z
    .string()
    .nonempty({
      message: 'O campo email é obrigatório.',
    })
    .email({ message: 'Endereço de email inválido' }),
  subject: z
    .string()
    .nonempty({
      message: 'O campo assunto é obrigatório.',
    })
    .max(50, {
      message: 'O campo não pode exceder o limite máximo de 50 caracteres',
    }),
  message: z
    .string()
    .nonempty({
      message: 'O campo mensagem é obrigatório.',
    })
    .max(300, {
      message: 'O campo não pode exceder o limite máximo de 300 caracteres',
    }),
})

type TContactFormData = z.infer<typeof contactFormValidationSchema>

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TContactFormData>({
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
            <Input
              type="text"
              {...register('name', { required: true, maxLength: 50 })}
              placeholder="Nome"
            />
            {errors.name && <span>{errors.name.message}</span>}
            <Input
              type="text"
              {...register('email', { required: true })}
              placeholder="Email"
            />
            {errors.email && <span>{errors.email.message}</span>}
            <Input
              type="text"
              {...register('subject', { required: true, maxLength: 50 })}
              placeholder="Assunto"
            />
            {errors.subject && <span>{errors.subject.message}</span>}
            <Textarea
              {...register('message', { required: true, maxLength: 300 })}
              placeholder="Mensagem"
            />
            {errors.message && <span>{errors.message.message}</span>}
            <SendMessageButton type="submit">Enviar Mensagem</SendMessageButton>
          </InputWrapper>
        </Form>
      </Content>
    </Container>
  )
}
