import './estilos/login.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { Link } from 'react-router-dom'

export const InicioSesion = () =>{
    return (
        <div className="login">

            <article className='cardLogin'>
                <h3 className='tituloLogin'>Inicio Sesion</h3>

                <Form className='formularioLogin'>
                    
                
                    <FormGroup>
                        <Label for="exampleEmail">
                        Correo
                        </Label>
                        <Input />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                        Contaseña
                        </Label>
                        <Input/>
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