import { Button } from 'reactstrap';
import './estilos/productos.scss';
import productosData from '/src/data/productos.json';
import React, { useState, useEffect } from 'react';

function Productos() {

    const [productoSeleccionado,setProductoSeleccionado] = useState([]);
    useEffect(() => {
        var urlParams = new URLSearchParams(window.location.search);
        var id = urlParams.get('id');
        setProductoSeleccionado(productosData.find((producto) => producto.id === id));
        console.log();
    }, []);
    


    const agregarListasDeseados = ()=>{

    }

    const agregarCarrito = ()=>{
        
    }

    return ( <>
        <div className='contenedorProductos'>
            <section className='sessionProducto'>
                <article className='contenedorProducto'>
                    <div className='rowProducto'>
                        <img className='imgProducto' src={productoSeleccionado.url} alt={productoSeleccionado.nombre}></img>
                        
                        <div className='columnProducto'>
                            <h3>{productoSeleccionado.nombre}</h3>
                            <h3>{productoSeleccionado.precio}</h3>

                        </div>

                        
                    </div>
                    <div className='contenedorBotonesProducto'>
                        <Button color="primary">Comprar</Button>
                        <Button color="primary">Lista de Deseados</Button>
                    </div>

                    <div className='descripcionProducto'>
                        <p>
                            {productoSeleccionado.descripcion}
                        </p>

                    </div>
                </article>

            </section>
            <section className='sessionComentarios'>

            </section>
        </div>

        {/* <main>
            <div class="contenedor" id="producto">
                <div id="contenedor-producto">
                    <img src={productoSeleccionado.url}
                    alt="imagenProducto"/>
                    <div>
                        <button id="boton-compra">Comprar</button>
                        <button id="boton-lista-deseados">Lista de deseados</button>
                    </div>
                </div>
                <ul>
                    <li>
                        <span class="material-symbols-outlined">
                            star
                        </span>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">
                            star
                        </span>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">
                            star
                        </span>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">
                            star
                        </span>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">
                            star
                        </span>
                    </li>
                </ul>
                <h3>Nombre={productoSeleccionado.nombre}</h3>
                <h3>Precio={productoSeleccionado.precio}</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat enim vitae pharetra finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum luctus et lorem eu congue. Donec euismod elementum leo et aliquam. Etiam ut venenatis purus. Vestibulum porttitor vehicula nisi, finibus consequat nisl volutpat sed. Nulla vitae eleifend massa, vel imperdiet risus. Aliquam faucibus quam eu nisl ullamcorper, id finibus risus egestas. Ut ante ipsum, efficitur et quam eu, lobortis consequat nisi. Etiam id massa magna. Fusce mattis, dui eu pharetra condimentum, urna tortor ornare erat, sit amet pharetra sem ante vitae felis.
                </p>
            </div>
            <div class="contenedor" id="comentarios">
                <ul>
                    <li>
                        <img src="./img/bano-de-bosque-epu.webp" 
                        alt="imagenProducto"/>
                    </li>
                    <li>
                        <h4>nombre Ususuario</h4>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span class="material-symbols-outlined">
                            star
                        </span>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">
                            star
                        </span>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">
                            star
                        </span>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">
                            star
                        </span>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">
                            star
                        </span>
                    </li>
                </ul>
                <h5>Fecha</h5>
                <p>Nunc vel lacus maximus, dapibus risus sit amet, viverra ipsum. Maecenas sit amet est a turpis pretium porta. Donec laoreet euismod eros, non rutrum sem. Vivamus dapibus justo quis maximus viverra. Donec mollis nibh eget ante sollicitudin porta. In posuere eget tortor a semper. Proin nec hendrerit magna, sed commodo massa.</p>
            </div>
        </main> */}
    </> );
}

export default Productos;