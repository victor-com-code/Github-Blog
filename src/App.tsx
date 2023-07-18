import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalTheme } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalTheme />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
