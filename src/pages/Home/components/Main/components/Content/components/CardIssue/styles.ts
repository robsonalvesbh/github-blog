import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 54rem;
  margin: 0 auto;

  margin-top: 3rem;
`

export const CardWrapper = styled.article`
  width: calc(50% - 2rem);
  max-width: 50%;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;

  margin-right: 2rem;
  margin-bottom: 2rem;

  a {
    color: ${(props) => props.theme['base-text']};
    display: block;
  }

  .wrapper {
    display: flex;
    align-items: flex-start;
  }

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 160%;

    width: 280px;
  }

  span {
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;
    flex-grow: 2;

    color: ${(props) => props.theme['base-span']};
  }

  p {
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;

    margin-top: 1.25rem;

    flex-grow: 1;
  }
`
