import contactImg from '../../assets/contact.png'
import {
  Container,
  Content,
  CustomInputWrapper,
  Error,
  Form,
  Input,
  Label,
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
    mode: 'all',
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
          <CustomInputWrapper>
            <Input
              {...register('name', { required: true, maxLength: 50 })}
              placeholder="Nome"
              isValid={errors.name === undefined}
            />
            <Label htmlFor="name">Nome</Label>
            {errors.name && <Error>{errors.name.message}</Error>}
          </CustomInputWrapper>
          <CustomInputWrapper>
            <Input
              {...register('email', { required: true })}
              placeholder="E-mail"
              isValid={errors.email === undefined}
            />
            <Label htmlFor="email">E-mail</Label>
            {errors.email && <Error>{errors.email.message}</Error>}
          </CustomInputWrapper>
          <CustomInputWrapper>
            <Input
              {...register('subject', { required: true, maxLength: 50 })}
              placeholder="Assunto"
              isValid={errors.subject === undefined}
            />
            <Label htmlFor="subject">Assunto</Label>
            {errors.subject && <Error>{errors.subject.message}</Error>}
          </CustomInputWrapper>
          <CustomInputWrapper>
            <Textarea
              {...register('message', { required: true, maxLength: 300 })}
              placeholder="Mensagem"
              isValid={errors.message === undefined}
            />
            <Label htmlFor="message">Mensagem</Label>
            {errors.message && <Error>{errors.message.message}</Error>}
          </CustomInputWrapper>
          <SendMessageButton type="submit">Enviar Mensagem</SendMessageButton>
        </Form>
      </Content>
    </Container>
  )
}
