import { Button } from 'reactstrap';
import './estilos/carritoCompra.scss';

function CarritoCompra() {

    const limpiarCarrito = ()=>{

    }

    const eliminarProductoCarrito = ()=>{

    }

    const AgregarUnidadDeProducto = ()=>{ //Esta mal escrito en el modelo

    }

    const eliminarUnidadDeProducto = ()=>{

    }

    const pagarCarrito = ()=>{

    }
    
    return ( <>
        <div className='contenedorPadreCarrito'>
            <div className="containerCarrito">
                <h2>Carrito de compra</h2> 
                <article className='contenedorProductoCarrito'>
                    <img className='imgProductoCarrito' src='src/Img de productos/cepillo de dientes ecologicos.jpg' alt='Cepillo'></img>    
                    <div className='contenedorDatosProductoCarrito'>
                        <h3>Nombre</h3>
                        <h3>Precio</h3>
                        <div className='contenedorBotonesProductosCarrito'>
                            <Button color='primary'>Ir a ver</Button>
                            <Button color='danger'>Eliminar</Button>
                        </div>

                    </div>
                </article>

                <article className='contenedorProductoCarrito'>
                    <h3 style={{marginRight: '40px'}}>Total:1000 </h3>
                    <Button color='success'>Comprar productos</Button>
                </article>
                

            </div>
        </div>
    
    </> );
}

export default CarritoCompra;