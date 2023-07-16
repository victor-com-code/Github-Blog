import logoGithubBlog from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoGithubBlog} alt="Logo Github Blog" />
    </HeaderContainer>
  )
}
