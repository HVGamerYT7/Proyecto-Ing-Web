import { useState } from "react";
import './estilos/registro.scss';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

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

    return ( <>
        <div className="registro">

            <article className='cardRegistro'>
                <h3 className='tituloRegistro'>Registrar Cuenta</h3>

                <Form className='formularioRegistro'>

                    <FormGroup>
                        <Label for="exampleEmail">
                        Correo Electronico
                        </Label>
                        <Input type="email" />
                      
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                        Rut sin puntos
                        </Label>
                        <Input type="email" />
                      
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleSelect">
                        Region
                        </Label>
                        <Input
                        id="exampleSelect"
                        name="select"
                        type="select"
                        >
                            <option>
                                1
                            </option>
                            <option>
                                2
                            </option>
                            <option>
                                3
                            </option>
                            <option>
                                4
                            </option>
                            <option>
                                5
                            </option>
                        </Input>
                        
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleSelect">
                        Comuna
                        </Label>
                        <Input
                        id="exampleSelect"
                        name="select"
                        type="select"
                        >
                            <option>
                                1
                            </option>
                            <option>
                                2
                            </option>
                            <option>
                                3
                            </option>
                            <option>
                                4
                            </option>
                            <option>
                                5
                            </option>
                        </Input>
                        
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePassword">
                        Contraseña
                        </Label>
                        <Input type="password"  />
                        
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePassword">
                        Confirmacion Contraseña
                        </Label>
                        <Input type="password"  />
                        
                    </FormGroup>

                    <Button color="primary" className='botonSumitLogin'>
                        Registrarse
                    </Button>

                    <Link style={{textAlign: 'center', margin:'10px'}}>Iniciar Sesion</Link>

                </Form>
                

            </article>


        </div>
    </> );
}

export default Registrarse;