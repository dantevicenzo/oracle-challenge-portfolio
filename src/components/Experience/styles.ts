import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;

  h2 {
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem;

    h2 {
      font-size: 1.375rem;
    }
  }
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.344rem;
  margin-top: 2rem;
  width: auto;
  max-width: calc(71rem + 4rem);

  @media screen and (max-width: 768px) {
    width: auto;
    margin-top: 1rem;
  }
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  gap: 1.625rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    gap: 1rem;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`

export const ImgWrapper = styled.div`
  img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  flex: 1 0 auto;

  strong {
    font-size: 1.375rem;
  }

  span {
    font-size: 1rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    strong {
      font-size: 1rem;
    }

    span {
      font-size: 0.875rem;
    }
  }
`

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

const BaseButton = styled.a`
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
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
