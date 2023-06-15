import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  max-width: calc(71rem + 4rem);
  margin: 0 auto;
  padding: 2rem 2rem 0;

  h2 {
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.375rem;
    }
  }

  @media screen and (max-width: 425px) {
    padding: 1rem;
  }
`
export const BoxList = styled.ul`
  display: flex;
  width: 100%;
  gap: 1rem;
  margin: 2rem 0 5.5rem;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    margin: 2rem 0;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`
export const Box = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.5rem;
  list-style: none;
  height: 10.875rem;
  width: 11rem;

  padding: 1rem;

  background-color: ${(props) => props.theme.colors.white};

  svg {
    font-size: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.colors.blue100};
  }

  strong {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    height: 7.375rem;
    width: auto;
  }
`
