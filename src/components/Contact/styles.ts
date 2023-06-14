import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.blue10};
`
export const Content = styled.div`
  display: flex;
  gap: 1rem;
  width: 71rem;
  margin: 0 auto;
  padding: 8.094rem 0 4.094rem;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const Title = styled.h2`
  font-size: 2rem;
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

  @media (max-width: 425px) {
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
  gap: 2rem;
  height: 100%;
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
`

export const Textarea = styled.textarea`
  resize: none;
  flex-grow: 1;

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
`
