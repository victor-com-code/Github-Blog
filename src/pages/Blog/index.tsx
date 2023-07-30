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
import { IssuesContext } from '../../contexts/IssuesContext'
import { Profile } from './components/Profile'
import { dateRelativeToNow } from '../../utils/formatter'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useContextSelector } from 'use-context-selector'

export function Blog() {
  const issues = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

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
              <PublicationCard key={item.id} to={`/post/${item.number}`}>
                <PublicationInfo>
                  <TitleM>{item.title}</TitleM>
                  <span>{dateRelativeToNow(new Date(item.created_at))}</span>
                </PublicationInfo>
                <PublicationContent>
                  <ReactMarkdown>{item.body}</ReactMarkdown>
                </PublicationContent>
              </PublicationCard>
            )
          })}
        </PublicationsList>
      </PublicationsContainer>
    </BlogContainer>
  )
}
