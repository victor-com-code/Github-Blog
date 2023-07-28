import { ChangeEvent, useContext } from 'react'
import { SearchFormContainer } from './styles'
import { IssuesContext } from '../../../../contexts/IssuesContext'

export function SearchForm() {
  const { fetchIssues } = useContext(IssuesContext)

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
