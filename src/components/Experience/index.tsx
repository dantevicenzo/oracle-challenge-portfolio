import experience1 from '../../assets/experience1.png'
import experience2 from '../../assets/experience2.png'
import experience3 from '../../assets/experience3.png'
import experience4 from '../../assets/experience4.png'
import { Container, List, RepositoryButton, SeeDemoButton } from './styles'

export function Experience() {
  return (
    <Container id="experience">
      <h2>Experiência profissional</h2>
      <List>
        <li>
          <img src={experience1} alt="" />
          <div>
            <strong>Decodificador de texto</strong>
            <span>HTML, CSS e Javascript</span>
            <div>
              <RepositoryButton
                href="https://dantevicenzo.github.io/oracle-challenge-decodificador/"
                target="_blank"
              >
                Repositório
              </RepositoryButton>
              <SeeDemoButton
                href="https://github.com/dantevicenzo/oracle-challenge-decodificador"
                target="_blank"
              >
                Ver demo
              </SeeDemoButton>
            </div>
          </div>
        </li>
        <li>
          <img src={experience2} alt="" />
          <div>
            <strong>Lista de Tarefas</strong>
            <span>React e Typescript</span>
            <div>
              <RepositoryButton href="https://github.com/dantevicenzo/todo-list">
                Repositório
              </RepositoryButton>
              <SeeDemoButton
                href="https://todo-list-7wc.pages.dev/"
                target="_blank"
              >
                Ver demo
              </SeeDemoButton>
            </div>
          </div>
        </li>
        <li>
          <img src={experience3} alt="" />
          <div>
            <strong>Cafeteria Delivery</strong>
            <span>React e Typescript</span>
            <div>
              <RepositoryButton
                href="https://github.com/dantevicenzo/coffee-delivery"
                target="_blank"
              >
                Repositório
              </RepositoryButton>
              <SeeDemoButton href="https://coffee-delivery.pages.dev/">
                Ver demo
              </SeeDemoButton>
            </div>
          </div>
        </li>
        <li>
          <img src={experience4} alt="" />
          <div>
            <strong>Github Blog</strong>
            <span>React e Typescript</span>
            <div>
              <RepositoryButton
                href="https://github.com/dantevicenzo/github-blog"
                target="_blank"
              >
                Repositório
              </RepositoryButton>
              <SeeDemoButton
                href="https://github-blog-prod.pages.dev/"
                target="_blank"
              >
                Ver demo
              </SeeDemoButton>
            </div>
          </div>
        </li>
      </List>
    </Container>
  )
}
