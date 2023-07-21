import { Route, Routes } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { DefaultLayout } from './layouts/DefaultLayouts'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  )
}
