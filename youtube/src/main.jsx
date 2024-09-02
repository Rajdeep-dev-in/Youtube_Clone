
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Video from './pages/Video.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='video' element={<Video />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
