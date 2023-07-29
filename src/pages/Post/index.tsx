import {
  ArrowLeft,
  ArrowSquareUpRight,
  CalendarCheck,
  ChatCircleDots,
  GithubLogo,
} from '@phosphor-icons/react'
import {
  PostContainer,
  PostContent,
  PostHeader,
  PostInfo,
  PostLinks,
} from './styles'
import { TitleL } from '../../styles/titles'
import { useContext, useEffect } from 'react'
import { IssuesContext } from '../../contexts/IssuesContext'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { NavLink, useParams } from 'react-router-dom'
import { dateRelativeToNow } from '../../utils/formatter'

export function Post() {
  const { issuePost, getIssue } = useContext(IssuesContext)

  const { issueNumber } = useParams()

  useEffect(() => {
    getIssue(Number(issueNumber))
  }, [issueNumber])

  return (
    <PostContainer>
      <PostHeader>
        <PostLinks>
          <NavLink to={'/'}>
            <ArrowLeft size={16} /> voltar
          </NavLink>
          <a href={issuePost.html_url} target="_blank" rel="noreferrer">
            ver no github
            <ArrowSquareUpRight size={16} />
          </a>
        </PostLinks>

        <TitleL>{issuePost.title}</TitleL>

        <PostInfo>
          <span>
            <GithubLogo size={18} weight="fill" />
            {issuePost.user?.login}
          </span>
          <span>
            <CalendarCheck size={18} weight="fill" />
            {issuePost.created_at &&
              dateRelativeToNow(new Date(issuePost.created_at))}
          </span>
          <span>
            <ChatCircleDots size={18} weight="fill" />
            {issuePost.comments} comentários
          </span>
        </PostInfo>
      </PostHeader>

      <PostContent>
        <ReactMarkdown>{issuePost.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
