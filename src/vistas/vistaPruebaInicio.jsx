import './estilos/inicioPrueba.scss';
import ContenedorProducto from './InicioPrueba/contenedorProducto';
// import ContenedorProducto from './InicioPrueba/contenedorProducto';


function InicioPrueba() {
    return ( 
        <div className="listaProductos">
            <ul>
                <li><ContenedorProducto></ContenedorProducto></li>
            </ul>
        </div>
    );
}

export default InicioPrueba;