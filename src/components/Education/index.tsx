import education1 from '../../assets/education1.png'
import education2 from '../../assets/education2.png'
import education3 from '../../assets/education3.png'
import { Container, Content, ImgContainer, List, Title } from './styles'

export function Education() {
  return (
    <Container id="education">
      <Content>
        <Title>Formação acadêmica</Title>
        <List>
          <li>
            <ImgContainer>
              <img src={education1} alt="" />
            </ImgContainer>
            <strong>Graduação em Filosofia</strong>
            <span>2017 a 2020 - FSB</span>
          </li>
          <li>
            <ImgContainer>
              <img src={education2} alt="" />
            </ImgContainer>
            <strong>Pós-Graduação em Cinema</strong>
            <span>2020 a 2021 - USCS</span>
          </li>
          <li>
            <ImgContainer>
              <img src={education3} alt="" />
            </ImgContainer>
            <strong>Formação em Front-End React</strong>
            <span>Em andamento - Alura</span>
          </li>
        </List>
      </Content>
    </Container>
  )
}
