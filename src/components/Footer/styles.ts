import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  background-color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-weight: 500;
`
