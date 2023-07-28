import { TextS } from '../../styles/text'
import { TitleM, TitleS } from '../../styles/titles'
import {
  BlogContainer,
  PublicationCard,
  PublicationContent,
  PublicationInfo,
  PublicationsContainer,
  PublicationsList,
} from './styles'
import { SearchForm } from './components/SearchForm'
import { useContext } from 'react'
import { IssuesContext } from '../../contexts/IssuesContext'
import { Profile } from './components/Profile'

export function Blog() {
  const { issues } = useContext(IssuesContext)

  return (
    <BlogContainer>
      <Profile />

      <PublicationsContainer>
        <header>
          <TitleS>Publicações</TitleS>
          <TextS>{issues.length} publicações</TextS>
        </header>

        <SearchForm />

        <PublicationsList>
          {issues.map((item) => {
            return (
              <PublicationCard key={item.id} href="">
                <PublicationInfo>
                  <TitleM>{item.title}</TitleM>
                  <span>{item.created_at}</span>
                </PublicationInfo>
                <PublicationContent>{item.body}</PublicationContent>
              </PublicationCard>
            )
          })}
        </PublicationsList>
      </PublicationsContainer>
    </BlogContainer>
  )
}
