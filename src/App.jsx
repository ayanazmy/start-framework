import { createBrowserRouter, RouterProvider, createHashRouter } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './Components/Layout/Layout'
import Home from './components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'

const router = createHashRouter([
  {path: '', element: <Layout/>, children: [
    {index: true, element: <Home/>},
    {path: 'about', element: <About/>},
    {path: 'portfolio', element: <Portfolio/>},
    {path: 'contact', element: <Contact/>},
    {path: '*', element: <NotFound/>},
  ]}
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
