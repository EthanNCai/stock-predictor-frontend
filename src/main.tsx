import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Box from "@mui/material/Box";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Box
          sx={{
          backgroundImage: `url(https://logincdn.msauth.net/shared/1.0/content/images/appbackgrounds/49_6ffe0a92d779c878835b40171ffc2e13.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "150vh",
      }}>
          <App /></Box>
  </React.StrictMode>,
)
