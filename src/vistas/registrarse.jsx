import { useState } from "react";

function Registrarse() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [rut, setRut] = useState('');
    const [constrasenia, setContrasenia] = useState('');
    const [confirmacionContrasenia, setConfirmacionContrasenia] = useState('');

    const BotonRegistrarse = (nombre_, rut_, confirmacionContrasenia_)=>{

    }
    
    const botonIniciarSesion = ()=>{

    }

    const botonAceptarTerminos = ()=>{
        
    }

    return ( <><h1>Registrarse</h1></> );
}

export default Registrarse;