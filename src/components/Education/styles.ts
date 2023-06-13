import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.blue10};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 71rem;
  margin: 0 auto;
  padding: 82px 0;
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  li {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    strong {
      font-size: 1.375rem;
    }

    span {
      font-size: 1rem;
    }
  }
`

export const ImgContainer = styled.div`
  width: 368px;
  height: 286px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
`
