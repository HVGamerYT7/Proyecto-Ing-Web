import { useState } from 'react'
import InicioSesion from './vistas/inisiosesion'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Inicio from './vistas/inicio'
import Productos from './vistas/productos'
import CarritoCompra from './vistas/carritoCompra'
import Pago from './vistas/pago'
import VerificarPago from './vistas/verificarPago'
import CargarDatos from './vistas/cargarDatos'
import Perfil from './vistas/perfil'
import Registrarse from './vistas/registrarse'
import ListaDeseados from './vistas/listaDeseados'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Inicio></Inicio>}></Route>
            <Route path='productos' element={<Productos></Productos>}></Route>
            <Route path='carrito' element={<CarritoCompra></CarritoCompra>}></Route>
            <Route path='pago' element={<Pago></Pago>}></Route>
            <Route path='verificarPago' element={<VerificarPago></VerificarPago>}></Route>
            <Route path='cargarDatos' element={<CargarDatos></CargarDatos>}></Route>
            <Route path='perfil' element={<Perfil></Perfil>}></Route>
            <Route path='listaDeseados' element={<ListaDeseados></ListaDeseados>}></Route>
            <Route path='login'>
              <Route index element={<InicioSesion></InicioSesion>}></Route>
              <Route path='registrarse' element={<Registrarse></Registrarse>}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App