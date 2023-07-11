import experience1 from '../../assets/experience1.png'
import experience2 from '../../assets/experience2.png'
import experience3 from '../../assets/experience3.png'
import experience4 from '../../assets/experience4.png'
import experience5 from '../../assets/experience5.png'
import experience6 from '../../assets/experience6.png'
import {
  ActionsWrapper,
  Container,
  ImgWrapper,
  InfoWrapper,
  List,
  ListItem,
  RepositoryButton,
  SeeDemoButton,
} from './styles'

export function Experience() {
  return (
    <Container id="experience">
      <h2>Experiência profissional</h2>
      <List>
        <ListItem>
          <ImgWrapper>
            <img src={experience1} alt="" />
          </ImgWrapper>
          <InfoWrapper>
            <strong>Decodificador de texto</strong>
            <span>HTML, CSS e Javascript</span>
            <ActionsWrapper>
              <RepositoryButton
                href="https://github.com/dantevicenzo/oracle-challenge-decodificador"
                target="_blank"
              >
                Repositório
              </RepositoryButton>
              <SeeDemoButton
                href="https://dantevicenzo.github.io/oracle-challenge-decodificador"
                target="_blank"
              >
                Ver demo
              </SeeDemoButton>
            </ActionsWrapper>
          </InfoWrapper>
        </ListItem>
        <ListItem>
          <ImgWrapper>
            <img src={experience2} alt="" />
          </ImgWrapper>
          <InfoWrapper>
            <strong>Lista de Tarefas</strong>
            <span>React e Typescript</span>
            <ActionsWrapper>
              <RepositoryButton
                href="https://github.com/dantevicenzo/todo-list"
                target="_blank"
              >
                Repositório
              </RepositoryButton>
              <SeeDemoButton
                href="https://todo-list-7wc.pages.dev/"
                target="_blank"
              >
                Ver demo
              </SeeDemoButton>
            </ActionsWrapper>
          </InfoWrapper>
        </ListItem>
        <ListItem>
          <ImgWrapper>
            <img src={experience3} alt="" />
          </ImgWrapper>
          <InfoWrapper>
            <strong>Cafeteria Delivery</strong>
            <span>React e Typescript</span>
            <ActionsWrapper>
              <RepositoryButton
                href="https://github.com/dantevicenzo/coffee-delivery"
                target="_blank"
              >
                Repositório
              </RepositoryButton>
              <SeeDemoButton
                href="https://coffee-delivery.pages.dev/"
                target="_blank"
              >
                Ver demo
              </SeeDemoButton>
            </ActionsWrapper>
          </InfoWrapper>
        </ListItem>
        <ListItem>
          <ImgWrapper>
            <img src={experience4} alt="" />
          </ImgWrapper>
          <InfoWrapper>
            <strong>Github Blog</strong>
            <span>React e Typescript</span>
            <ActionsWrapper>
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
            </ActionsWrapper>
          </InfoWrapper>
        </ListItem>
        <ListItem>
          <ImgWrapper>
            <img src={experience5} alt="" />
          </ImgWrapper>
          <InfoWrapper>
            <strong>Ignite Shop</strong>
            <span>React, Typescript e Next.js</span>
            <ActionsWrapper>
              <RepositoryButton
                href="https://github.com/dantevicenzo/ignite-shop"
                target="_blank"
              >
                Repositório
              </RepositoryButton>
              <SeeDemoButton
                href="https://ignite-shop-fawn.vercel.app/"
                target="_blank"
              >
                Ver demo
              </SeeDemoButton>
            </ActionsWrapper>
          </InfoWrapper>
        </ListItem>
        <ListItem>
          <ImgWrapper>
            <img src={experience6} alt="" />
          </ImgWrapper>
          <InfoWrapper>
            <strong>Alura Geek</strong>
            <span>React, Typescript e Next.js</span>
            <ActionsWrapper>
              <RepositoryButton
                href="https://github.com/dantevicenzo/alura-geek"
                target="_blank"
              >
                Repositório
              </RepositoryButton>
              <SeeDemoButton
                href="https://alura-geek-taupe.vercel.app/"
                target="_blank"
              >
                Ver demo
              </SeeDemoButton>
            </ActionsWrapper>
          </InfoWrapper>
        </ListItem>
      </List>
    </Container>
  )
}
