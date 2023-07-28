import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

import { Endpoints } from '@octokit/types'

type Issue = Endpoints['GET /search/issues']['response']['data']['items']

interface IssuesContextType {
  issues: Issue
  fetchIssues: (query?: string) => Promise<void>
}

export const IssuesContext = createContext({} as IssuesContextType)

interface IssuesContextProviderProps {
  children: ReactNode
}

export function IssuesContextProvider({
  children,
}: IssuesContextProviderProps) {
  const [issues, setIssues] = useState<Issue>([] as Issue)

  async function fetchIssues(query = '') {
    const response = await api.get('search/issues', {
      params: {
        q: `repo:victor-com-code/github-blog is:issue ${query} in:title in:body`,
      },
    })

    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
