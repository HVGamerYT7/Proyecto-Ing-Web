import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InicioSesion from './vistas/inisiosesion';
import Inicio from './vistas/inicio';
import Productos from './vistas/productos';
import CarritoCompra from './vistas/carritoCompra';
import Pago from './vistas/pago';
import VerificarPago from './vistas/verificarPago';
import CargarDatos from './vistas/cargarDatos';
import Perfil from './vistas/perfil';
import Registrarse from './vistas/registrarse';
import ListaDeseados from './vistas/listaDeseados';
import Juego from './vistas/juego';
import Categorias from './vistas/categorias';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PrivateRoute } from './vistas/PrivateRoute';
import axios from 'axios';

function App() {
  const [datosDelBackend, setDatosDelBackend] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/ejemplo')
  //     .then(response => {
  //       setDatosDelBackend(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error al obtener datos del backend', error);
  //     });
  // }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio datosDelBackend={datosDelBackend} />}>
            <Route index element={<Inicio></Inicio>}></Route>
            <Route path='productos' element={<Productos datosDelBackend={datosDelBackend} />}></Route>
            <Route path='categorias' element={<Categorias datosDelBackend={datosDelBackend} />}></Route>
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
  );
}

export default App;

