import { experienceList } from './db'
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
        {experienceList.map((experience, index) => (
          <ListItem key={index}>
            <ImgWrapper>
              <img src={experience.imageUrl} alt="" />
            </ImgWrapper>
            <InfoWrapper>
              <strong>{experience.title}</strong>
              <span>{experience.languages}</span>
              <ActionsWrapper>
                <RepositoryButton
                  href={experience.repositoryUrl}
                  target="_blank"
                >
                  Repositório
                </RepositoryButton>
                <SeeDemoButton href={experience.demoUrl} target="_blank">
                  Ver demo
                </SeeDemoButton>
              </ActionsWrapper>
            </InfoWrapper>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}
