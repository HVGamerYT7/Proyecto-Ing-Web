import { Button } from 'reactstrap';
import './estilos/listaDeseados.scss'
import Navegador from './navegador';
import { useState } from 'react';
// import './estilos/inicio.scss';

function ListaDeseados() {

    const [productos, setProductos] = useState([
        {
        "id": "1",
        "nombre": "Bolsa de genero",
        "url": "src/Img de productos/Bolsa de genero.jpg",
        "valoración": "4.5",
        "categoria": "Otros",
        "precio": "10.99",
        "descripcion": "Esto es un producto"
        },
        {
        "id": "2",
        "nombre": "Bolsas de papel",
        "url": "src/Img de productos/bolsas de papel.jpg",
        "valoración": "3.2",
        "categoria": "Otros",
        "precio": "5.99",
        "descripcion": "Esto es un producto"
        },
        {
        "id": "3",
        "nombre": "Bombillas de papel",
        "url": "src/Img de productos/Bombillas de papel.jpg",
        "valoración": "2.8",
        "categoria": "Otros",
        "precio": "8.99",
        "descripcion": "Esto es un producto"
        },
    ]);

    const limpiarListaDeseados = ()=>{

    }

    const eliminarProductosListaDeseados = (id)=>{

        setProductos(productos.filter((producto)=>producto.id !== id));
    }

    const agregarCarrito = ()=>{
        
    }

    const redirigir = (id) => {
        window.location.href = `http://localhost:5173/productos?id=${id}`;
    };

    const handleData = (id, url, nombre, precio)=>{  
        if(productos.length === 0){
            return <h2>No hay productos en la lista de deseos</h2>
        }


        return (
            <article className='contenedorProductoDeseado' key={id}>
                <img className='imgProductoDeseado' src={url} alt={nombre}></img>    
                <div className='contenedorDatosProductoDeseado'>
                    <h3>{nombre}</h3>
                    <h3>{precio}</h3>
                    <div className='contenedorBotonesProductos'>
                        <Button color='primary'>Comprar</Button>
                        <Button color='primary' onClick={()=>redirigir(id)}>Ir a ver</Button>
                        <Button color='danger' onClick={()=>eliminarProductosListaDeseados(id)}>Eliminar</Button>
                    </div>

                </div>
            </article>
        )
    }


    return (<>
        <Navegador></Navegador>
        <div className='contenedorPadreDeseados'>
            
            <div className="containerDeseados">
                <h2>Lista Deseados</h2> 
                <div className='containerDeseadosContainer'>{
               
                    productos.map((producto) => (
                        handleData(producto.id, producto.url, producto.nombre, producto.precio)
                        
                    ))
                }
                </div>
            </div>
        </div>
        
    </>);
}

export default ListaDeseados;