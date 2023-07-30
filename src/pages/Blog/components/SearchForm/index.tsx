import { ChangeEvent } from 'react'
import { SearchFormContainer } from './styles'
import { IssuesContext } from '../../../../contexts/IssuesContext'
import { useContextSelector } from 'use-context-selector'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchIssues = useContextSelector(IssuesContext, (context) => {
    return context.fetchIssues
  })

  const { register } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(event: ChangeEvent<HTMLInputElement>) {
    fetchIssues(event.target.value)
  }

  return (
    <SearchFormContainer>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query', {
          onChange: (e) => {
            handleSearchIssues(e)
          },
        })}
      />
    </SearchFormContainer>
  )
}
