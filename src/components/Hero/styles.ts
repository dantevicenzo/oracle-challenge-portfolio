import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 2rem 0;
  width: 71rem;
`

export const Title = styled.h1`
  font-size: 52px;
`

export const Paragraph = styled.p`
  font-size: 22px;
  margin-top: 24px;
`

export const LinksList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin-top: 26.5px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.black100};
    font-weight: 500;
  }
`

export const RoundImage = styled.div`
  width: 23rem;
  min-width: 23rem;
  height: 23rem;
  border-radius: 50%;
  background-image: url('https://github.com/dantevicenzo.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
