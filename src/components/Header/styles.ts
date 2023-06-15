import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  max-width: calc(71rem + 4rem);
  margin: 0 auto;
  padding: 2.156rem 2rem;

  font-size: 1rem;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 425px) {
    padding: 1rem 1rem;
  }
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

    li:last-child {
      font-weight: 700;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black100};
  }

  @media screen and (max-width: 768px) {
    ul li:not(:last-child) {
      display: none;
    }
  }

  @media screen and (max-width: 425px) {
    ul li:last-child {
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
`
