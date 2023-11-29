import { Link } from 'react-router-dom';
import './estilos/navegador.scss';
import { VscAccount } from "react-icons/vsc";

function Navegador() {
    return ( 
        <header>
            <img src='src/assets/iconoReciclaje.png' alt='iconoInicio'></img>
            <nav>
                <Link to='/' className='botonNav'>Inicio</Link>
                <Link to='/listaDeseados' className='botonNav'>lista de deseados</Link>
                <Link to='/carrito' className='botonNav'>Carrito</Link>
                
                <VscAccount className='botonUsuario'/>
                <Link to='/login' className='botonNav' style={{color: ''}}>Iniciar sesion</Link>
            </nav>

        </header>
    );
}

export default Navegador;