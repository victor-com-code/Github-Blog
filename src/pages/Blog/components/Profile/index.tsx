import {
  ArrowSquareUpRight,
  GithubLogo,
  Buildings,
  Users,
} from '@phosphor-icons/react'
import { useContext } from 'react'
import { ProfileContext } from '../../../../contexts/ProfileContext'
import { TextM } from '../../../../styles/text'
import { TitleL } from '../../../../styles/titles'
import {
  ProfileContainer,
  ProfileContent,
  ProfileDescription,
  ProfileInfo,
} from './styles'

export function Profile() {
  const { profile } = useContext(ProfileContext)

  return (
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
  )
}
