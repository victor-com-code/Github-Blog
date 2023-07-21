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

      <PublicationsContainer>
        <header>
          <TitleS>Publicações</TitleS>
          <TextS>0 publicações</TextS>
        </header>

        <SearchForm />

        <PublicationsList>
          <PublicationCard>
            <PublicationInfo>
              <TitleM>Javascript data types and data structures</TitleM>
              <span>Há 1 dia</span>
            </PublicationInfo>
            <PublicationContent>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </PublicationContent>
          </PublicationCard>
          <PublicationCard>
            <PublicationInfo>
              <TitleM>Javascript data types and data structures</TitleM>
              <span>Há 1 dia</span>
            </PublicationInfo>
            <PublicationContent>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </PublicationContent>
          </PublicationCard>
        </PublicationsList>
      </PublicationsContainer>
    </BlogContainer>
  )
}
