import { NavLink } from 'react-router-dom'
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

export const PublicationCard = styled(NavLink)`
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
