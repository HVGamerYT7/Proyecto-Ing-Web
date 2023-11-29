import './estilos/login.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { Link,useNavigate } from 'react-router-dom'
import React, {useState , useEffect} from 'react';
import usuarios from '/src/data/usuarios.json';
//import { useNavigate } from 'react-router-dom';

export const InicioSesion = () =>{
    const [email, setEmail] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorContrasenia, setErrorContrasenia] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const navigate = useNavigate();

    const handleContraseniaChange = (e) => {
        setContrasenia(e.target.value);
    }

    const handleEmailFocus = () => {
        setErrorEmail('')
    }

    const handleContraseniaFocus = () =>{
        setErrorContrasenia('')
    }

    const setAuthLocalStorage = (res) => {
        console.log(
          '🚀 ~ file: localstorage.ts:13 ~ setAuthLocalStorage ~ res:',
          res,
        );
        localStorage.setItem(
          'auth',
          JSON.stringify({
            token: res.token,
            usuario: res.usuario,
          }),
        );
      };

    const authUsuario = async (correo, contrasenia) => {
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ correo, contrasenia }),
            });

            const data = await response.json();

            if (response.ok){ 
                setAuthLocalStorage(data);
                return true;
            }

            return false;
        } catch (error) {
            console.error(error);
        }
        return false;
    };

    const handleSubmit = async (e) => {
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
            const res = await authUsuario(email, contrasenia);
            if (res) {
                //Path Inicio

                
                navigate('/', {replace: true});


                // navigate('/carrito', {
                //     replace: true,
                //     state: {
                //         logged: true,
                //     },
                // });
            } else {
              setErrorEmail('Usuario o contraseña incorrectos');
              setErrorContrasenia('');
            }
            //de esta manera accedes a rutas restringidas
            // navigate('/carrito', {
            //     replace: true,
            //     state: {
            //         logged: true,
            //     },
            // });
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

                    <Link style={{textAlign: 'center', margin:'10px'}}>Iniciar</Link>

                </Form>
                

            </article>


        </div>
    );
}

export default InicioSesion;