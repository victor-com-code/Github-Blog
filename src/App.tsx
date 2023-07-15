import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalTheme } from './styles/global'
import { Header } from './components/Header'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalTheme />

      <Header />
    </ThemeProvider>
  )
}
