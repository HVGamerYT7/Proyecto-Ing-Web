import '../estilos/inicio.scss';

function ContenedorProducto({nombre = '', precio = '', url = ''}) {
    const urlProducto = url;

    return ( 
    <div className="contenedorProducto">
        <img src={urlProducto} alt='imagenProducto' className='imagenProductoContenedor'></img>
        <h3>{nombre}</h3>
        <h3>{precio}</h3>
    </div> );
}

export default ContenedorProducto;