import './estilos/inicioPrueba.scss';
import productosData from '/src/data/productos.json';
import ContenedorProducto from './InicioPrueba/contenedorProducto';

import React, { useState, useEffect } from 'react';

function InicioPrueba() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(productosData);
    }, []);

    return (
        <div className="listaProductos">
            <ul>
            {productos.map((producto) => (
                <ContenedorProducto nombre={producto.nombre} url={producto.url} precio={producto.precio}></ContenedorProducto>
            ))}
            </ul>
        </div>
    );
}

export default InicioPrueba;
