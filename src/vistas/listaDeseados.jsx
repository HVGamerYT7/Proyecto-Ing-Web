import { Button } from 'reactstrap';
import './estilos/listaDeseados.scss'

function ListaDeseados() {

    const limpiarListaDeseados = ()=>{

    }

    const eliminarProductosListaDeseados = ()=>{

    }

    const agregarCarrito = ()=>{
        
    }

    return (<>
        <div className='contenedorPadreDeseados'>
            <div className="containerDeseados">
                <h2>Lista Deseados</h2> 
                <article className='contenedorProductoDeseado'>
                    <img className='imgProductoDeseado' src='src/Img de productos/cepillo de dientes ecologicos.jpg' alt='Cepillo'></img>    
                    <div className='contenedorDatosProductoDeseado'>
                        <h3>Nombre</h3>
                        <h3>Precio</h3>
                        <div className='contenedorBotonesProductos'>
                            <Button color='primary'>Comprar</Button>
                            <Button color='primary'>Ir a ver</Button>
                            <Button color='danger'>Eliminar</Button>
                        </div>

                    </div>
                </article>

                <article className='contenedorProductoDeseado'>
                    <img className='imgProductoDeseado' src='src/Img de productos/cepillo de dientes ecologicos.jpg' alt='Cepillo'></img>    
                    <div className='contenedorDatosProductoDeseado'>
                        <h3>Nombre</h3>
                        <h3>Precio</h3>
                        <div className='contenedorBotonesProductos'>
                            <Button color='primary'>Comprar</Button>
                            <Button color='primary'>Ir a ver</Button>
                            <Button color='danger'>Eliminar</Button>
                        </div>

                    </div>
                </article>

                <article className='contenedorProductoDeseado'>
                    <img className='imgProductoDeseado' src='src/Img de productos/cepillo de dientes ecologicos.jpg' alt='Cepillo'></img>    
                    <div className='contenedorDatosProductoDeseado'>
                        <h3>Nombre</h3>
                        <h3>Precio</h3>
                        <div className='contenedorBotonesProductos'>
                            <Button color='primary'>Comprar</Button>
                            <Button color='primary'>Ir a ver</Button>
                            <Button color='danger'>Eliminar</Button>
                        </div>

                       

                    </div>
                </article>


            </div>
        </div>
        
    </>);
}

export default ListaDeseados;