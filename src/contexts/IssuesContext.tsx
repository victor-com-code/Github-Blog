import { ReactNode, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'

import { Endpoints } from '@octokit/types'
import { createContext } from 'use-context-selector'

type Issues = Endpoints['GET /search/issues']['response']['data']['items']

type IssuePost =
  Endpoints['GET /repos/{owner}/{repo}/issues/{issue_number}']['response']['data']

interface IssuesContextType {
  issues: Issues
  issuePost: IssuePost
  fetchIssues: (query?: string) => Promise<void>
  getIssue: (issueNumber: number) => Promise<void>
}

export const IssuesContext = createContext({} as IssuesContextType)

interface IssuesContextProviderProps {
  children: ReactNode
}

export function IssuesContextProvider({
  children,
}: IssuesContextProviderProps) {
  const [issues, setIssues] = useState<Issues>([] as Issues)

  const [issuePost, setIssuePost] = useState<IssuePost>({} as IssuePost)

  const fetchIssues = useCallback(async (query = '') => {
    const response = await api.get('search/issues', {
      params: {
        q: `repo:victor-com-code/github-blog is:issue ${query} in:title in:body`,
      },
    })

    setIssues(response.data.items)
  }, [])

  const getIssue = useCallback(async (issueNumber: number) => {
    const response = await api.get(
      `repos/victor-com-code/github-blog/issues/${issueNumber}`,
    )

    setIssuePost(response.data)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider
      value={{ issues, issuePost, fetchIssues, getIssue }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
