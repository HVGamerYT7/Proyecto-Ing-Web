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
//import InicioPrueba from './vistas/vistaPruebaInicio'
import 'bootstrap/dist/css/bootstrap.min.css'
import Juego from './vistas/juego'
import Categorias from './vistas/categorias'
import { RouterProvider } from 'react-router-dom'
import { PrivateRoute } from './vistas/PrivateRoute'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Inicio></Inicio>}></Route>
              <Route path='productos' element={<Productos></Productos>}></Route>
              <Route path='categorias' element={<Categorias></Categorias>}></Route>
              <Route path='carrito' element={<CarritoCompra></CarritoCompra>}></Route>
              <Route path='pago' element={<Pago></Pago>}></Route>
              <Route path='verificarPago' element={<VerificarPago></VerificarPago>}></Route>
              <Route path='cargarDatos' element={<CargarDatos></CargarDatos>}></Route>
              <Route path='perfil' element={<Perfil></Perfil>}></Route>
              <Route path='listaDeseados' element={<ListaDeseados></ListaDeseados>}></Route>
              <Route path='juego' element={<Juego></Juego>}></Route>
              <Route path='login'>
                <Route index element={<InicioSesion></InicioSesion>}></Route>
                <Route path='registrarse' element={<Registrarse></Registrarse>}></Route>
              </Route>
          </Route>
          <Route path='*' element={<h1>404 Not Found</h1>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
