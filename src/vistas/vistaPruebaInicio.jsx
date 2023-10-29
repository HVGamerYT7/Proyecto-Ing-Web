import './estilos/inicioPrueba.scss';
import productosData from '/src/data/productos.json';
import ContenedorProducto from './InicioPrueba/contenedorProducto';

import React, { useState, useEffect } from 'react';

function InicioPrueba() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(productosData);
    }, []);

    const redirigir = (id) => {
        window.location.href = `http://localhost:5173/productos?id=${id}`;
    };
    
    return (
        <div className="listaProductos">
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id} className="producto" onClick={() => redirigir(producto.id)}>
                        <ContenedorProducto nombre={producto.nombre} url={producto.url} precio={producto.precio}></ContenedorProducto>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default InicioPrueba;

