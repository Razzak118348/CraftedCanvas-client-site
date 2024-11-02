import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContextApi from './Context/ContextApi'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import {HelmetProvider} from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<HelmetProvider>
<ContextApi children={<RouterProvider router={Routes}></RouterProvider>}></ContextApi>
</HelmetProvider>
  </StrictMode>,
)
