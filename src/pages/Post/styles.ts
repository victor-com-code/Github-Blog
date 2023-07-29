import { styled } from 'styled-components'

export const PostContainer = styled.article`
  width: 100%;
  max-width: 864px;
  margin: 4rem auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
`

export const PostHeader = styled.header`
  display: flex;
  flex-direction: column;

  margin-top: -9rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    margin: 1.25rem 0 0.5rem;
  }
`

export const PostLinks = styled.nav`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.blue};

    display: flex;
    gap: 0.25rem;
    align-items: center;
    height: fit-content;

    border-bottom: 1px solid transparent;

    transition: border 0.5s ease;

    &:hover {
      border-bottom-color: ${(props) => props.theme.blue};
    }
  }
`

export const PostInfo = styled.div`
  display: flex;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme['base-span']};

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const PostContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  padding: 2.5rem 2rem;

  h3 {
    color: ${(props) => props.theme.blue};
    text-decoration: underline;
  }

  pre {
    background: ${(props) => props.theme['base-post']};
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    border-radius: 2px;
  }
`
