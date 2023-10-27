import './estilos/inicioPrueba.scss';
import ContenedorProducto from './InicioPrueba/contenedorProducto';
// import ContenedorProducto from './InicioPrueba/contenedorProducto';


function InicioPrueba() {
    const listaPrueba = [
        <li><ContenedorProducto nombre='Juan' precio='Precio' url='None'/></li>,
        <li><ContenedorProducto nombre='Nombre' precio='Precio' url='None'/></li>,
        <li><ContenedorProducto nombre='Nombre' precio='Precio' url='None'/></li>,
        <li><ContenedorProducto nombre='Nombre' precio='Precio' url='None'/></li>,
    ];


    return ( 
        <div className="listaProductos">
            <ul>
                {listaPrueba.map((elemento, index) => (
                    elemento
                ))}
                {/* <li><ContenedorProducto></ContenedorProducto></li> */}
            </ul>
        </div>
    );
}

export default InicioPrueba;