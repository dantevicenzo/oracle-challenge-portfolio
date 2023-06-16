import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  background-color: ${(props) => props.theme.colors.blue10};
`
export const Content = styled.div`
  display: flex;
  gap: 1rem;
  width: auto;
  max-width: calc(71rem + 4rem);
  margin: 0 auto;
  padding: 8.094rem 2rem 4.094rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 2rem;
    img {
      display: none;
    }
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Title = styled.h2`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.375rem;
  }
`
export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5rem 0 2rem;
`
export const SendMessageButton = styled.button`
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;

  align-self: flex-start;

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 0.875rem;
    font-weight: bold;
  }

  background-color: ${(props) => props.theme.colors.blue100};
  border: none;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background-color: ${(props) => props.theme.colors.blue80};
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  span {
    height: 2rem;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.red100};
  }
`

export const Input = styled.input`
  padding: 1rem 0.75rem;
  border-radius: 4px;
  border: none;
  font-size: 1rem;

  border-bottom: 2px solid ${(props) => props.theme.colors.black30};

  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.blue100};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.black50};
  }

  & + input,
  & + textarea,
  & + button {
    margin-top: 2rem;
  }
`

export const Textarea = styled.textarea`
  resize: none;
  flex-grow: 1;

  min-height: 8.313rem;

  overflow: hidden;

  padding: 1rem 0.75rem;
  border-radius: 4px;
  border: none;
  font-size: 1rem;

  border-bottom: 2px solid ${(props) => props.theme.colors.black30};

  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.blue100};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.black50};
  }

  & + button {
    margin-top: 2rem;
  }
`
