import styled, { css } from 'styled-components'

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

  transition: background-color 0.15s;

  &:hover {
    background-color: ${(props) => props.theme.colors.blue80};
  }
`

export const Error = styled.span`
  height: 2rem;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.red100};
`

export const CustomInputWrapper = styled.div`
  position: relative;
  width: 100%;
`

interface IInputProps {
  isValid: boolean
}

export const Input = styled.input<IInputProps>`
  padding: 1.75rem 0.75rem 0.438rem;
  border-radius: 4px;
  border: none;
  font-size: 1rem;
  height: 53px;
  width: 100%;

  color: ${(props) => props.theme.colors.black100};
  caret-color: ${(props) => props.theme.colors.blue100};

  border-bottom: 1px solid ${(props) => props.theme.colors.black30};

  &:focus {
    outline: none;
    padding-bottom: 0.375rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.blue100};
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    font-size: 0.75rem;
    top: 8px;
  }

  &:focus + label {
    color: ${(props) => props.theme.colors.blue100};
  }

  &::placeholder {
    opacity: 0;
    color: ${(props) => props.theme.colors.black50};
  }

  ${(props) =>
    props.isValid &&
    css`
      margin-bottom: 2rem;
    `}
`

export const Textarea = styled.textarea<IInputProps>`
  resize: none;
  flex-grow: 1;
  width: 100%;

  min-height: 8.313rem;

  overflow: hidden;

  padding: 1.75rem 0.75rem 0.438rem;
  border-radius: 4px;
  border: none;
  font-size: 1rem;

  color: ${(props) => props.theme.colors.black100};
  caret-color: ${(props) => props.theme.colors.blue100};

  border-bottom: 1px solid ${(props) => props.theme.colors.black30};

  &:focus {
    outline: none;
    padding-bottom: 0.375rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.blue100};
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    font-size: 0.75rem;
    top: 7px;
  }

  &:focus + label {
    color: ${(props) => props.theme.colors.blue100};
  }

  &::placeholder {
    opacity: 0;
    color: ${(props) => props.theme.colors.black50};
  }

  ${(props) =>
    props.isValid &&
    css`
      margin-bottom: 2rem;
    `}
`

export const Label = styled.label`
  position: absolute;
  top: 16px;
  left: 12px;
  pointer-events: none;
  transition: opacity, top, color, font-size, 0.15s;
  color: ${(props) => props.theme.colors.black50};
`
