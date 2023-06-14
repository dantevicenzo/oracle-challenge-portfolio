import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 71rem;
  margin: 0 auto;
  padding-top: 2rem;
`
export const BoxList = styled.ul`
  display: flex;
  width: 100%;
  gap: 1rem;
  margin: 2rem 0 5.5rem;
`
export const Box = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.5rem;
  list-style: none;
  height: 174px;
  width: 176px;

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
`
