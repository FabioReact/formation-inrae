import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import { ChangeBackground } from './pages/ChangeBackground'
import Counter from './pages/Counter'
import Heroes from './pages/Heroes'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='background' element={<ChangeBackground />} />
      <Route path='heroes' element={<Heroes />} />
      <Route path='counter' element={<Counter />} />
    </Route>
  )
)

export { router }