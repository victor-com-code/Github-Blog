import { styled } from 'styled-components'

export const BlogContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 4rem auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 4.5rem;
`

export const ProfileContainer = styled.div`
  margin-top: -9rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2rem 2rem 2.5rem;
  max-height: 212px;

  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    border-radius: 8px;
    height: 10rem;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: ${(props) => props.theme['base-title']};
    }

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
  }
`

export const ProfileDescription = styled.div`
  margin: 0.5rem 0 1.5rem;
  max-height: 3.25rem;
  overflow: hidden;
`

export const ProfileInfo = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const PublicationsContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  header {
    display: flex;
    justify-content: space-between;
  }
`

export const PublicationsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  padding: 2.5rem 0;
`

export const PublicationCard = styled.a`
  background: ${(props) => props.theme['base-post']};
  text-decoration: none;
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;

  border: 2px solid transparent;

  transition: border-color 0.4s ease;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
  }
`

export const PublicationInfo = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;

  h2 {
    flex: 1;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const PublicationContent = styled.div`
  margin-top: 1.25rem;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  color: ${(props) => props.theme['base-text']};
`
