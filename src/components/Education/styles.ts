import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.blue10};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  max-width: calc(71rem + 4rem);
  margin: 0 auto;
  padding: 5.125rem 2rem;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`

export const Title = styled.h2`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.375rem;
  }
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;

  li {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    strong {
      font-size: 1.375rem;
    }

    span {
      font-size: 1rem;
      font-weight: 500;
    }

    @media screen and (max-width: 768px) {
      strong {
        font-size: 1rem;
      }

      span {
        font-size: 0.875rem;
        font-weight: 500;
      }
    }
  }

  @media screen and (max-width: 425px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`

export const ImgContainer = styled.div`
  width: 100%;
  max-width: 23rem;
  height: 17.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};

  img {
    height: 9rem;
  }

  @media screen and (max-width: 768px) {
    flex: 1;
    min-height: 7.375rem;

    img {
      height: 3.5rem;
    }
  }
`
