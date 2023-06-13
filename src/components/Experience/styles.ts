import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.344rem;
  margin-top: 2rem;

  li {
    display: flex;
    align-items: center;

    gap: 1.625rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      div {
        flex-direction: row;
        gap: 1rem;
      }
    }
  }

  li:nth-child(even) {
    flex-direction: row-reverse;
  }
`

const BaseButton = styled.button`
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
`

export const RepositoryButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.blue100};
  color: ${(props) => props.theme.colors.blue100};
`

export const SeeDemoButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.blue100};
  border: none;
  color: ${(props) => props.theme.colors.white};
`
