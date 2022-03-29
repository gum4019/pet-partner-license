import GlobalLayout from './pages/_layout'
import Index from './pages/index'
import StudyIndex from './pages/study/index'
import ExamIndex from './pages/exam/index'

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Index />, index: true },
      { path: '/study', element: <StudyIndex />, index: true },
      { path: '/exam', element: <ExamIndex />, index: true }
    ],
  },
]

export const pages = [
  { route: '/' },
  { route: '/study' },
  { route: '/exam' }
]
