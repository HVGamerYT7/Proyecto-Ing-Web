import ContenedorProducto from './InicioPrueba/contenedorProducto';
import './estilos/inicio.scss';
import productosData from '/src/data/productos.json';


import React, { useState, useEffect } from 'react';


function Inicio() {
    
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(productosData);
    }, []);

    const redirigir = (id) => {
        window.location.href = `http://localhost:5173/productos?id=${id}`;
    };

    return (<>
        <div className="contenedorInicio">
            <article>
                <div className="imagenFondo">
                    <div className='filtro'></div>
                    <header>
                        <img src='src/assets/iconoReciclaje.png' alt='iconoInicio'></img>
                        <nav>
                            <button className='botonNav'>Inicio</button>
                            <button className='botonNav'>lista de deseados</button>
                            <button className='botonNav'>Carrito</button>
                        </nav>

                    </header>

                    <section className='titulo'>
                        <h3>Cuidar de la Tierra, cuidar de ti: Productos reciclados para un futuro mejor.</h3>
                    </section>
                </div>
            </article>
            
            <section className='seccionCategoria'>
                <svg xmlns="http://www.w3.org/2000/svg" width="200px" height="200" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" stroke-width="0" fill="currentColor"></path>
                </svg>
                <div className='contenedorCategorias'>
                    <article className='cardCategorias'>
                        <img className='imgCategorias' src={'src/assets/camisa.png'}></img>
                        <h3>Categoria</h3>
                    </article>
                    <article className='cardCategorias'>
                        <img className='imgCategorias' src={'src/assets/camisa.png'}></img>
                        <h3>Categoria</h3>
                    </article>
                    <article className='cardCategorias'>
                        <img className='imgCategorias' src={'src/assets/camisa.png'}></img>
                        <h3>Categoria</h3>
                    </article>
                    <article className='cardCategorias'>
                        <img className='imgCategorias' src={'src/assets/camisa.png'}></img>
                        <h3>Categoria</h3>
                    </article>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg"  width="200px" height="200" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" stroke-width="0" fill="currentColor"></path>
                </svg>
            </section>

            <section className='seccionProductos'>
                <div className="listaProductos">
                    <ul className='listadoProductos'>
                        {productos.map((producto) => (
                            <li key={producto.id} className="producto" onClick={() => redirigir(producto.id)}>
                                <ContenedorProducto nombre={producto.nombre} url={producto.url} precio={producto.precio}></ContenedorProducto>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

                    
        </div>
       
    
    </>);
}

export default Inicio;