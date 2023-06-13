import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.blue10};
`

export const Content = styled.div`
  width: 71rem;
  margin: 0 auto;
  padding: 4rem 0;
`

export const Title = styled.h2`
  font-size: 2rem;
`

export const Paragraph = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  width: 47rem;
`

export const SignatureImg = styled.img`
  margin-top: 1rem;
`
