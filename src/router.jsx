import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './components/Layout/AppLayout'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import AboutPage from './pages/AboutPage'
import StacksPage from './pages/StacksPage'
import AwardDetailPage from './pages/AwardDetailPage'
import NotFoundPage from './pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/pokedex', element: <PokedexPage /> },
      { path: '/pokedex/:slug', element: <ProjectDetailPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/stacks', element: <StacksPage /> },
      { path: '/awards/:id', element: <AwardDetailPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
