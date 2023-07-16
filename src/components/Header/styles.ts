import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['base-profile']};
  height: 17.5rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  img {
    max-width: 9rem;
    margin-top: 4rem;
  }
`
