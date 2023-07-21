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

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <PostLinks>
          <a href="">
            <ArrowLeft size={16} /> voltar
          </a>
          <a href="" target="_blank">
            ver no github
            <ArrowSquareUpRight size={16} />
          </a>
        </PostLinks>

        <TitleL>JavaScript data types and data structures</TitleL>

        <PostInfo>
          <span>
            <GithubLogo size={18} weight="fill" />
            victor-com-code
          </span>
          <span>
            <CalendarCheck size={18} weight="fill" />
            Há 1 dia
          </span>
          <span>
            <ChatCircleDots size={18} weight="fill" />5 comentários
          </span>
        </PostInfo>
      </PostHeader>

      <PostContent>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
      </PostContent>
    </PostContainer>
  )
}
