class Empresa{ //No es hijo de usuario?
    nombre = '';
    rutEmpresa = '';
    correo = '';
    puntos = '';
    contrasenia = '';

    cambiarNombre(nuevoNombre){ //Cambiar el nombre del usuario
        //seguro deses cambiar su nombre?
        //si , cambiara al nuevo nombre
        //no , dejar tal cual
    }

    cambiarContrasenia(contraseniaaActual){ //Cambiar contraseña, no recibe nada?
        //tiene que resivir la contraseña que ingrese el usuario y validarla que es
        //la misma que tiene ya de antes
        //En el caso de ser incorrecta se le pedira de nuevo con 3 intentos si este falla se bloqueara este modulo
        //En el caso que sea correcta se le pedira que ingrese la contraseña nueva 2 veces para confirmar el cambio
    }

    cambiarDireccion(direccionNueva){ //Cambiar dirreccion del usuario, no recibe nada?
        //Resivira la direccion nueva y se cambiaa al instantes
    }
}