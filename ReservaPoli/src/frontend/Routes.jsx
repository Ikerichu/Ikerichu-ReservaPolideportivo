import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import Instalaciones from './Instalaciones.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="instalaciones" element={<Instalaciones />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
