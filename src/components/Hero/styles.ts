import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 2rem 2rem;
  width: auto;
  max-width: calc(71rem + 4rem);

  gap: 1rem;

  @media screen and (max-width: 768px) {
    gap: 2rem;
    padding: 2rem;
  }

  @media screen and (max-width: 645px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  @media screen and (max-width: 425px) {
    padding: 1rem;
  }
`

export const Title = styled.h1`
  font-size: 3.25rem;

  @media screen and (max-width: 768px) {
    font-size: 1.375rem;
  }
`

export const Paragraph = styled.p`
  font-size: 1.375rem;
  margin-top: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 425px) {
    font-size: 0.875rem;
    margin-top: 1rem;
  }
`

export const LinksList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin-top: 1.656rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.black100};
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    margin-top: 0.5rem;
    font-size: 1rem;
  }

  @media screen and (max-width: 645px) {
    margin-top: 1rem;
    font-size: 0.875rem;
    gap: 1rem;
  }

  @media screen and (max-width: 425px) {
    gap: 0.5rem;
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

  @media screen and (max-width: 940px) {
    width: 18rem;
    min-width: 18rem;
    height: 18rem;
  }

  @media screen and (max-width: 768px) {
    width: 9.125rem;
    min-width: 9.125rem;
    height: 9.125rem;
  }

  @media screen and (max-width: 645px) {
    width: 6.125rem;
    min-width: 6.125rem;
    height: 6.125rem;

    order: -1;
  }
`
