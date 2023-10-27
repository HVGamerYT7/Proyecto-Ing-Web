class Usuario{
    nombre = '';
    rut = '';
    correo = '';
    contrasena = '';
    puntos = ''; //A que se refiere estos puntos? //puntos acumulados al responder los juegos aperecidos en pantalla solo las que tiene correctas
    // y podran usarse como canje de descuento
    dirreccion = '';

    cambiarNombre(string nombreNuevo){ //Cambiar el nombre del usuario
        //al usuario se le preguntara si esta seguro de cambiar el nombre
        //en el caso sea correcto se cambiara
        //en el caso contrario se mantendra igual
    }

    cambiarContrasenia(string contraseniaActual, string nuevaContrasenia, string nuevaContraseniaValidacion){ //Cambiar contraseña, no recibe nada?
        //resive contraseña actual para validar con la que ya tiene
        // en el caso correcto se cambiara la nueva contraseña con su validacion
        //si ambas son iguales se realizara el cambio correspondiente 
        //en el caso contrario se mandar un mensaje se "error en la solicitud" y maximo de 3 intentos
    }

    cambiarDireccion(string direccionNueva){ //Cambiar dirreccion del usuario, no recibe nada?
        //resivira la nueva direccion y la cambiara
    }

}