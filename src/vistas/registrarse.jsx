import { useState , useEffect } from "react";
import './estilos/registro.scss';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import jsonRegiones from '../data/regiones.json';
import usuarios from '../data/usuarios.json'

function Registrarse() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [rut, setRut] = useState('');
    const [region, setRegion] = useState('');
    const [comuna, setComuna] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [confirmacionContrasenia, setConfirmacionContrasenia] = useState('');

    const [errorNombre, setErrorNombre] = useState('');
    const [errorCorreo, setErrorCorreo] = useState('');
    const [errorRut, setErrorRut] = useState('');
    const [errorRegion, setErrorRegion] = useState('');
    const [errorComuna, setErrorComuna] = useState('');
    const [errorContrasenia, setErrorContrasenia] = useState('');
    const [errorConfirmacionContrasenia, setErrorConfirmacionContrasenia] = useState('');

    const [regionesYComunas, setRegionesYComunas] = useState(null);


    

    const BotonRegistrarse = () => {
        let errores = false;

        if (!nombre) {
            setErrorNombre('Nombre es obligatorio.');
            errores = true;
        } else {
            setErrorNombre('');
        }

        if (!correo) {
            setErrorCorreo('Correo es obligatorio.');
            errores = true;
        } else {
            setErrorCorreo('');
        }

        if (!rut) {
            setErrorRut('RUT es obligatorio.');
            errores = true;
        } else {
            setErrorRut('');
        }

        if (!region) {
            setErrorRegion('Región es obligatoria.');
            errores = true;
        } else {
            setErrorRegion('');
        }

        if (!comuna) {
            setErrorComuna('Comuna es obligatoria.');
            errores = true;
        } else {
            setErrorComuna('');
        }

        if (!contrasenia) {
            setErrorContrasenia('Contraseña es obligatoria.');
            errores = true;
        } else {
            setErrorContrasenia('');
        }

        if (confirmacionContrasenia!= contrasenia) {
            setErrorConfirmacionContrasenia('Las contraseñas no coinciden.');
            errores = true;
        } else {
            setErrorConfirmacionContrasenia('');
        }

        if(!validaRut(rut)){
            console.log("run invalido");
            setErrorRut('Rut invalido.');
            errores = true;
        }

        if (!/^[a-zA-Z0-9]+$/.test(nombre)) {
            setErrorNombre('El nombre de usuario solo puede contener letras y números.');
            errores = true;
        } else {
            setErrorNombre('');
        }
    

        if (!errores) {
            // Envía el formulario o realiza las acciones necesarias.
        }
    }

    function validaRut(rut) {
        const [numero, dv] = rut.toString().replace('-K', '-k').split('-');
        const dvVer = ((T) => {
            let M=0,S=1;
            for(;T;T=Math.floor(T/10))
            S=(S+T%10*(9-M++%6))%11;
            return S?S-1:'k';
        })(numero);
        console.log(dvVer == dv);
        return dvVer == dv;
    }

    return (
        <div className="registro">
            <article className='cardRegistro'>
                <h3 className='tituloRegistro'>Registrar Cuenta</h3>
                <Form className='formularioRegistro'>
                    <FormGroup>
                        <Label for="nombre">Nombre</Label>
                        <Input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        {errorNombre && <p className="errorMensaje">{errorNombre}</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="correo">Correo Electrónico</Label>
                        <Input type="email" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        {errorCorreo && <p className="errorMensaje">{errorCorreo}</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="rut">RUT sin puntos</Label>
                        <Input type="text" id="rut" value={rut} onChange={(e) => setRut(e.target.value)} />
                        {errorRut && <p className="errorMensaje">{errorRut}</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="region">Región</Label>
                        <Input type="select"
                            id="region"
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}>
                            <option value="">Seleccione una región</option>
                            {jsonRegiones.regiones.map((regionData) => (
                                <option key={regionData.region} value={regionData.region}>
                                    {regionData.region}
                                </option>
                            ))}
                        </Input>
                        {errorRegion && <p className="errorMensaje">{errorRegion}</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="comuna">Comuna</Label>
                        <Input type="select"
                            id="comuna"
                            value={comuna}
                            onChange={(e) => setComuna(e.target.value)}>
                            <option value="">Seleccione una comuna</option>
                            {region && jsonRegiones.regiones
                                .find((regionData) => regionData.region === region)
                                .comunas.map((comuna) => (
                                    <option key={comuna} value={comuna}>
                                        {comuna}
                                    </option>
                                ))}
                        </Input>
                        {errorComuna && <p className="errorMensaje">{errorComuna}</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="contrasenia">Contraseña</Label>
                        <Input type="password" id="contrasenia" value={contrasenia} onChange={(e) => setContrasenia(e.target.value)} />
                        {errorContrasenia && <p className="errorMensaje">{errorContrasenia}</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirmacionContrasenia">Confirmación de Contraseña</Label>
                        <Input type="password" id="confirmacionContrasenia" value={confirmacionContrasenia} onChange={(e) => setConfirmacionContrasenia(e.target.value)} />
                        {errorConfirmacionContrasenia && <p className="errorMensaje">{errorConfirmacionContrasenia}</p>}
                    </FormGroup>
                    <Button color="primary" className='botonSumitLogin' onClick={BotonRegistrarse}>
                        Registrarse
                    </Button>
                    <Link to="/login" style={{textAlign: 'center', margin:'10px'}}>Iniciar Sesión</Link>
                </Form>
            </article>
        </div>
    );
}

export default Registrarse;
