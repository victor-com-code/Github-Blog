import { ChangeEvent } from 'react'
import { SearchFormContainer } from './styles'
import { IssuesContext } from '../../../../contexts/IssuesContext'
import { useContextSelector } from 'use-context-selector'

export function SearchForm() {
  const fetchIssues = useContextSelector(IssuesContext, (context) => {
    return context.fetchIssues
  })

  function searchIssues(event: ChangeEvent<HTMLInputElement>) {
    fetchIssues(event.target.value)
  }

  return (
    <SearchFormContainer>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={searchIssues}
      />
    </SearchFormContainer>
  )
}
