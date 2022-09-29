import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 19rem;
  margin: 0 auto;
  display: flex;
  padding-top: 4rem;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['base-profile']};

  .img-terminal {
    width: 45px;
  }

  .left-effect {
    position: absolute;
    left: 0;
    top: 70px;
  }

  .right-effect {
    position: absolute;
    right: 0;
    top: 30px;
  }

  p {
    margin-top: 20px;
    font-size: 1.5rem;
    color: ${(props) => props.theme['blue-brand']};
    text-transform: uppercase;
    font-family: 'Coda';
  }
`
