import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from '@phosphor-icons/react'
import { TextM, TextS } from '../../styles/text'
import { TitleL, TitleM, TitleS } from '../../styles/titles'
import {
  BlogContainer,
  ProfileContainer,
  ProfileContent,
  ProfileDescription,
  ProfileInfo,
  PublicationCard,
  PublicationContent,
  PublicationInfo,
  PublicationsContainer,
  PublicationsList,
} from './styles'
import { SearchForm } from './components/SearchForm'
import { useContext } from 'react'
import { ProfileContext } from '../../contexts/ProfileContext'
import { IssuesContext } from '../../contexts/IssuesContext'

export function Blog() {
  const { profile } = useContext(ProfileContext)
  const { issues } = useContext(IssuesContext)

  return (
    <BlogContainer>
      <ProfileContainer>
        <img src={profile.avatar_url} alt="" />
        <ProfileContent>
          <header>
            <TitleL>{profile.name}</TitleL>
            <a href={profile.html_url} target="_blank" rel="noreferrer">
              Github
              <ArrowSquareUpRight size={16} />
            </a>
          </header>
          <ProfileDescription>
            <TextM>{profile.bio}</TextM>
          </ProfileDescription>
          <ProfileInfo>
            <span>
              <GithubLogo size={18} weight="fill" />
              {profile.login}
            </span>
            <span>
              <Buildings size={18} weight="fill" />
              {profile.company}
            </span>
            <span>
              <Users size={18} weight="fill" />
              {profile.followers} seguidores
            </span>
          </ProfileInfo>
        </ProfileContent>
      </ProfileContainer>

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
