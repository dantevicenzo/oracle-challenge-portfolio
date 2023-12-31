import { Box, BoxList, Container } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faCss3,
} from '@fortawesome/free-brands-svg-icons'
import {
  faPersonSkating,
  faGuitar,
  faHeadphones,
  faTv,
  faUtensils,
  faCamera,
} from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as TypescriptSvg } from '../../assets/typescript.svg'

export function SkillsAndHobbies() {
  return (
    <Container>
      <h2 id="skills">Skills</h2>
      <BoxList>
        <Box>
          <FontAwesomeIcon icon={faHtml5} />
          <strong>Html 5</strong>
        </Box>
        <Box>
          <FontAwesomeIcon icon={faCss3} />
          <strong>CSS</strong>
        </Box>
        <Box>
          <FontAwesomeIcon icon={faJs} />
          <strong>Javascript</strong>
        </Box>
        <Box>
          <FontAwesomeIcon icon={faReact} />
          <strong>React</strong>
        </Box>
        <Box>
          <TypescriptSvg />
          <strong>Typescript</strong>
        </Box>
        <Box>
          <FontAwesomeIcon icon={faNodeJs} />
          <strong>Node JS</strong>
        </Box>
      </BoxList>
      <h2 id="hobbies">Hobbies</h2>
      <BoxList>
        <Box>
          <FontAwesomeIcon icon={faPersonSkating} />
          <strong>Andar de patins</strong>
        </Box>
        <Box>
          <FontAwesomeIcon icon={faGuitar} />
          <strong>Tocar violão</strong>
        </Box>
        <Box>
          <FontAwesomeIcon icon={faHeadphones} />
          <strong>Ouvir música</strong>
        </Box>
        <Box>
          <FontAwesomeIcon icon={faTv} />
          <strong>Assistir séries</strong>
        </Box>
        <Box>
          <FontAwesomeIcon icon={faUtensils} />
          <strong>Cozinhar</strong>
        </Box>
        <Box>
          <FontAwesomeIcon icon={faCamera} />
          <strong>Tirar fotos</strong>
        </Box>
      </BoxList>
    </Container>
  )
}
