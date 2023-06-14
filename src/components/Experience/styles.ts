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
  max-width: 71rem;
  width: 71rem;

  li {
    display: flex;
    align-items: center;

    gap: 1.625rem;

    img {
      max-width: 75%;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      flex: 1 0 auto;

      div {
        flex-direction: row;
        gap: 1rem;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  li:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`

const BaseButton = styled.a`
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 425px) {
    padding: 0.75rem;
    font-size: 0.875rem;
    font-weight: bold;
  }
`

export const RepositoryButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.blue100};
  color: ${(props) => props.theme.colors.blue100};

  &:hover {
    background-color: ${(props) => props.theme.colors.blue20};
  }
`

export const SeeDemoButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.blue100};
  border: none;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background-color: ${(props) => props.theme.colors.blue80};
  }
`
