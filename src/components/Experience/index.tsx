import experience1 from '../../assets/experience1.png'
import experience2 from '../../assets/experience2.png'
import experience3 from '../../assets/experience3.png'
import experience4 from '../../assets/experience4.png'
import { Container, List, RepositoryButton, SeeDemoButton } from './styles'

export function Experience() {
  return (
    <Container>
      <h2>Experiência profissional</h2>
      <List>
        <li>
          <img src={experience1} alt="" />
          <div>
            <strong>Decodificador de texto</strong>
            <span>Challenge Alura Codificador</span>
            <div>
              <RepositoryButton>Repositório</RepositoryButton>
              <SeeDemoButton>Ver demo</SeeDemoButton>
            </div>
          </div>
        </li>
        <li>
          <img src={experience2} alt="" />
          <div>
            <strong>Jogo criado com HTML, CSS e JavaScript</strong>
            <span>Challenge Oracle</span>
            <div>
              <RepositoryButton>Repositório</RepositoryButton>
              <SeeDemoButton>Ver demo</SeeDemoButton>
            </div>
          </div>
        </li>
        <li>
          <img src={experience3} alt="" />
          <div>
            <strong>Decodificador de texto</strong>
            <span>Challenge Alura Codificador</span>
            <div>
              <RepositoryButton>Repositório</RepositoryButton>
              <SeeDemoButton>Ver demo</SeeDemoButton>
            </div>
          </div>
        </li>
        <li>
          <img src={experience4} alt="" />
          <div>
            <strong>Jogo criado com HTML, CSS e JavaScript</strong>
            <span>Challenge Oracle</span>
            <div>
              <RepositoryButton>Repositório</RepositoryButton>
              <SeeDemoButton>Ver demo</SeeDemoButton>
            </div>
          </div>
        </li>
      </List>
    </Container>
  )
}
