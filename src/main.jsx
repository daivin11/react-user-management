import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 
import Home from "./pages/Home/index.jsx";
import { GlobalStyles } from './styles/GlobalStyles'
import{ RouterProvider } from "react-router-dom";
import router from "./routes";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <GlobalStyles />
    <RouterProvider router={router} />
    
  </StrictMode>,
)
