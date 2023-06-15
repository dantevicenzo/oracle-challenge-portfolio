import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.blue10};
`

export const Content = styled.div`
  width: auto;
  max-width: calc(71rem + 4rem);
  margin: 0 auto;
  padding: 4rem 2rem;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
  @media screen and (max-width: 425px) {
    padding: 1rem;
  }
`

export const Title = styled.h2`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.375rem;
  }
`

export const Paragraph = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  width: auto;
  max-width: 47rem;

  @media screen and (max-width: 768px) {
    width: auto;
    font-size: 0.875rem;
  }
`

export const SignatureImg = styled.img`
  margin-top: 1rem;
`
