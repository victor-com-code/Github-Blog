import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function dateRelativeToNow(date: Date) {
  // console.log(date)
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })
}
