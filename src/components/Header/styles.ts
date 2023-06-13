import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 71rem;
  margin: 2.156rem auto;

  font-size: 1rem;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black100};
  }
`
