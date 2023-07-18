import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from '@phosphor-icons/react'
import { TextM } from '../../styles/text'
import { TitleL } from '../../styles/titles'
import {
  BlogContainer,
  ProfileContainer,
  ProfileContent,
  ProfileDescription,
  ProfileInfo,
} from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <ProfileContainer>
        <img src="http://github.com/victor-com-code.png" alt="" />
        <ProfileContent>
          <header>
            <TitleL>Victor Eduardo</TitleL>
            <a href="" target="_blank">
              Github
              <ArrowSquareUpRight size={16} />
            </a>
          </header>
          <ProfileDescription>
            <TextM>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              neque non corporis quam laborum sit esse ratione distinctio
              fugiat! Quibusdam quaerat ullam magni adipisci, aliquid ducimus
              vitae inventore reprehenderit dignissimos! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Eum neque non corporis quam
              laborum sit esse ratione distinctio fugiat! Quibusdam quaerat
              ullam magni adipisci, aliquid ducimus vitae inventore
              reprehenderit dignissimos! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Eum neque non corporis quam laborum sit esse
              ratione distinctio fugiat! Quibusdam quaerat ullam magni adipisci,
              aliquid ducimus vitae inventore reprehenderit dignissimos!
            </TextM>
          </ProfileDescription>
          <ProfileInfo>
            <span>
              <GithubLogo size={18} weight="fill" />
              victor-com-code
            </span>
            <span>
              <Buildings size={18} weight="fill" />
              Freelancer
            </span>
            <span>
              <Users size={18} weight="fill" />0 seguidores
            </span>
          </ProfileInfo>
        </ProfileContent>
      </ProfileContainer>
    </BlogContainer>
  )
}
