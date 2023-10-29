import './estilos/login.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { Link } from 'react-router-dom'
import React, {useState , useEffect} from 'react';
import usuarios from '/src/data/usuarios.json';

export const InicioSesion = () =>{
    const [email, setEmail] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorContrasenia, setErrorContrasenia] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleContraseniaChange = (e) => {
        setContrasenia(e.target.value);
    }

    const handleEmailFocus = () => {
        setErrorEmail('')
    }

    const handleContraseniaFocus = () =>{
        setErrorContrasenia('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let errores = false;

        if(!email || !email.trim()){
            setErrorEmail('Correo no valido.');
            errores = true;
        }

        if(!contrasenia || !contrasenia.trim()){
            setErrorContrasenia('Contraseña no valida.');
            errores = true;
        }

        if (!errores) {
            const usuario = usuarios.find((u) => u.correo === email && u.contrasenia === contrasenia);
      
            if (usuario) {
                //Path Inicio
            } else {
              setErrorEmail('Usuario o contraseña incorrectos');
              setErrorContrasenia('');
            }
          }
    };

    return (
        <div className="login">

            <article className='cardLogin'>
                <h3 className='tituloLogin'>Inicio Sesion</h3>

                <Form className='formularioLogin' onSubmit={handleSubmit}>

                    <FormGroup>
                        <Label for="exampleEmail">
                        Correo
                        </Label>
                        <Input type="email" value={email} onChange={handleEmailChange} onFocus={handleEmailFocus}/>
                        {errorEmail && <p className="errorMensaje">{errorEmail}</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                        Contaseña
                        </Label>
                        <Input type="password" value={contrasenia} onChange={handleContraseniaChange} onFocus={handleContraseniaFocus}/>
                        {errorContrasenia && <p className="errorMensaje">{errorContrasenia}</p>}
                    </FormGroup>

                    <Button color="primary" className='botonSumitLogin'>
                        Iniciar
                    </Button>

                    <Link style={{textAlign: 'center', margin:'10px'}}>Registrarse</Link>

                </Form>
                

            </article>


        </div>
    );
}

export default InicioSesion;