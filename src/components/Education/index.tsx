import education1 from '../../assets/education1.png'
import education2 from '../../assets/education2.png'
import education3 from '../../assets/education3.png'
import { Container, Content, ImgContainer, List } from './styles'

export function Education() {
  return (
    <Container>
      <Content>
        <h2>Formação acadêmica</h2>
        <List>
          <li>
            <ImgContainer>
              <img src={education1} alt="" />
            </ImgContainer>
            <strong>Análise de dados</strong>
            <span>2018 - UFRP</span>
          </li>
          <li>
            <ImgContainer>
              <img src={education2} alt="" />
            </ImgContainer>
            <strong>Formação UX Design</strong>
            <span>2019 - Alura</span>
          </li>
          <li>
            <ImgContainer>
              <img src={education3} alt="" />
            </ImgContainer>
            <strong>Pós-graduação design</strong>
            <span>Em andamento - UFRJ</span>
          </li>
        </List>
      </Content>
    </Container>
  )
}
