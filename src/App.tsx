import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalTheme } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ProfileContextProvider } from './contexts/ProfileContext'
import { IssuesContextProvider } from './contexts/IssuesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalTheme />

      <BrowserRouter>
        <ProfileContextProvider>
          <IssuesContextProvider>
            <Router />
          </IssuesContextProvider>
        </ProfileContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
