import styled from 'styled-components'

export const ProfileContainer = styled.main``

export const ProfileCard = styled.div`
  display: flex;
  width: 54rem;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  position: absolute;
  left: 50%;
  top: 53%;
  transform: translate(-50%, -140%);

  .wrapper {
    margin-left: 2rem;
  }

  h1 {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 24px;

    color: #e7edf4;

    margin-bottom: 8px;
  }

  p {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    color: #afc2d4;
  }

  ul {
    margin-top: 24px;
  }

  li {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 16px;
    margin-right: 24px;
  }

  .img-avatar {
    width: 145px;
  }

  .gap {
    gap: 8px;
  }

  .flex {
    display: flex;
  }

  .align-items-center {
    align-items: center;
  }

  .img-link {
    width: 14px;
  }

  .position {
    font-size: 0.75rem;
    font-family: 'Nunito', sanse-serif;
    font-weight: 700;
    position: absolute;
    right: 20px;
    gap: 8px;
    color: ${(props) => props.theme['blue-brand']};
    text-transform: uppercase;
    text-decoration: none;
  }
`
