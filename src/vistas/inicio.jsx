import './estilos/inicio.scss';

function Inicio() {
    

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
            
                    
        </div>
       
    
    </>);
}

export default Inicio;