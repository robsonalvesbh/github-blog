import styled from 'styled-components'

export const ContainerSearch = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 12rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-family: "nunito", sans-serif;

  #wrapper {
    display: flex;
    width: 54rem;
    justify-content: space-between;
    margin-bottom: 0.75rem;x
  }

  #wrapper span:last-child {
    font-weight: leight;
    font-size: 0.875rem;
    opacity: 0.5;
  }

  .input_search {
    color: ${(props) => props.theme['base-title']};
    height: 3.125rem;
    width: 54rem;
    max-width: 100%;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 8px;
    padding-left: 1rem;
  }

  .input_search::placeholder {
    color: ${(props) => props.theme['base-border']};
  }
`
