import productosData from '/src/data/productos.json';
import React, { useState, useEffect } from 'react';
import ContenedorProducto from './InicioPrueba/contenedorProducto';
import './estilos/categorias.scss';
import Navegador from './navegador';

function Categorias() {

    const [productos,setProductos] = useState([]);
    useEffect(() => {
        var urlParams = new URLSearchParams(window.location.search);
        var categoria = urlParams.get('categoria');
        setProductos(productosData.filter((producto) => producto.categoria === categoria));
    }, []);
    

    const redirigir = (id) => {
        window.location.href = `http://localhost:5173/productos?id=${id}`;
    };

    return ( <>
        <Navegador></Navegador>
        <section className='seccionProductos'>
            
            <div className="listaProductos">
                <h2 style={{textAlign:'center', margin:'20px'}}>Categorias</h2>
                <ul className='listadoProductos'>
                    {productos.map((producto) => (
                        <li key={producto.id} className="producto" onClick={() => redirigir(producto.id)}>
                            <ContenedorProducto nombre={producto.nombre} url={producto.url} precio={producto.precio}></ContenedorProducto>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    
    </> );
}

export default Categorias;