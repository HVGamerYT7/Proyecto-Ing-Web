\-Descripcion
------
Green heart esta nacido atravez de la problematica de que existen empresas independientes muy dispersas dentro del territorio Chileno que hacen productos amigables con el medio ambiente , pero estas trabajan un producto en concreto o no tiene variedades por lo que se tiene conocimiento es que Chile no es un pais productor, si no, uno importador. Tomando ambos casos tambien queremos aprovechar las nuevas leyes aprobadas en Chile para disminuir los desechos toxicos y dañinos al medio ambiente (por ejemplo el mas conocido como los plasticos). Siendo esto una apertura de oportunidades de desarrollo a nivel nacional y uso Internacional. Ayudar a conectar Grandes Empresas que aun no tiene la completa seguridad y accebilidad de tener estos productos y amuentar las existencia de estos a sus clientes en tiendas y en sus propagandas , sin disminuir el consumo y aumentando el PIB con amuento de puestos de trabajo en estas Empresas, en paralelo crecer las pequeñas empresas productoras de los productos amigables con el medio ambiente. En este circulo tambien tendremos relaciones con: la gente comun (Fomenta la venta y uso proctos dañinos por su baja conciencia) , los mall Chinos (Alto uso de plasticos) , feriantes (uso de bolsas de plastico), entre otros. A sumiendo que se van a usar las herramientas ya disponibles de distribuiciones (Chile Express , entre otras).

En base a lo anterior, este proyecto se está realizando para la asignatura ingeniería web, en donde Sebastian Santos, Hector Vera y Jonathan Vega son sus integrantes. 

\-Tecnologías a usar
--------
Con las siguientes herramientas vamos a trabajar:

|Uso|Tecnología|
| :- | :- |
|Backend|Nodejs-Express|
|Base de datos|MySql workbench|
|Frontend|ReactJs-Bootstrap |
|Maquetación|Figma|
|Organización|Trello, Drive|

\-Requerimientos funcionales
---
En la siguiente tabla, se dan a conocer los principales requerimientos del software, dando también a conocer sus respectivos detalles y especificaciones.

|**Clave**|**Requerimiento**|**Casos de uso**|
| :- | :- | :- |
|**RF 01**|Sistema de login que permita a los usuarios ingresar a sus respectivas cuentas.|Iniciar sesión|
|**RF 01.1**|El ingreso puede ser por cuenta de google.|Iniciar sesión|
|**RF 01.2**|El ingreso puede ser por correo electrónico y contraseña establecidas con anterioridad por el usuario.|Iniciar sesión|
|**RF 02**|Módulo que permita a los usuarios registrarse para poder realizar compras.|Registrarse|
|**RF 02.1**|El usuario tendrá dos tipos de perfiles, los cuales se separan en 2, personas comunes y empresas (estas se registran después creada la cuenta de persona común, dentro de la página web, esto se detalla en el RF 07).|Registrarse|
|**RF 02.1.1**|Las personas comunas son aquellos usuarios, que solo quieren comprar de manera por menor.|Registrarse|
|**RF 02.1.2**|Las empresas o pymes, son aquellos usuarios que quieran comprar por mayor. Estos recibirán descuentos asociados a sus compras realizadas. Además considerar que el registro puede durar aproximadamente de 15 a 30 días para la evaluación y aceptación de la cuenta de empresa. (pueden considerarse datos adicionales) |Registrarse|
|**RF 02.2**|El usuario debe ingresar ciertos datos para poder realizar el registro.|Registrarse|
|**RF 02.2.1**|El usuario debe ingresar su nombre de usuario (nombre que se mostrará dentro del sistema), el cual tendrá como máximo 30 caracteres, no permitirá caracteres especiales ni números. Por último, si se aceptan letras mayúsculas y espacios.|Registrarse|
|**RF 02.2.2**|El usuario debe ingresar su rut (rut de empresa en caso de ingresar como esta), el cual deberá ingresar sin puntos y sin guión, por último si termina en K, esta deberá ser en mayúsculas.|Registrarse|
|**RF 02.2.3**|El usuario deberá elegir en la región que vive, estas serán presentadas como una lista en donde solo se podrá ingresar una.|Registrarse|
|**RF 02.2.4**|Dependiendo de la región que se escoja, al usuario se le mostrarán diferentes comunas las cuales pertenecen a esa localidad escogida, además se deberá elegir alguna comuna.|Registrarse|
|**RF 02.3**|Se debe escoger un método de ingreso.|Registrarse|
|**RF 02.3.1**|Se puede asociar la cuenta, con la de google y este será el método de ingreso.|Registrarse|
|**RF 02.3.2**|Se puede registrar por correo electrónico, y contraseña (esta debe tener como mínimo 8 caracteres, letras y números, un carácter especial como mínimo y una mayúscula, además de que solo se admitirán caracteres del código ascii) |Registrarse|
|**RF 02.4**|Se deben aceptar términos y condiciones para poder registrarse.|Registrarse|
|**RF 03**|Módulo de inicio que permita visualizar los productos ofrecidos y recomendados. Además de algunas novedades sobre la tienda virtual.|Buscar producto|
|**RF 03.1**|Los productos están ordenados por los más vendidos y mejor categorizados.|Buscar producto|
|**RF 03.2**|Por cada producto se mostrará una imagen, un nombre, la clasificación, el precio y la descripción (solo se mostrará como máximo 100 caracteres dentro de este módulo)|Buscar producto|
|**RF 03.3**|Cada vez que se presione en un producto, se abrirá los detalles de este. Pero si se presiona un botón (carrito) dentro del producto, se añadirá al carrito. además se podrá guardar en una lista de deseados.|Buscar producto|
|**RF 03.4**|Aparecerán primero los productos que están en descuento y los nuevos.|Buscar producto|
|<p>**RF 04**</p><p></p>|Módulo que permita mostrar y/o comprar los productos agregados al carrito de compra.|Agregar al carrito|
|**RF 04.1**|Se debe mostrar el total bruto (sin descuento) y el total líquido (con descuento), de todos los productos incluidos en el carrito.|Agregar al carrito|
|**RF 04.2**|Se pueden eliminar productos del carrito, pero si se elimina, también se debe descontar en el total del monto a pagar.|Editar carrito|
|**RF 04.3**|Solo se puede agregar productos al carrito, si es que el usuario está logueado al sistema, sino lo mandara a loguearse. (RF 01)|Agregar al carrito|
|**RF 04.4**|Una vez el usuario quiera comprar los productos en el carrito de compra, tendrá que apretar un botón que lo llevará a este proceso.|realizar pago|
|**RF 04.4.1**|Se pedirá que el usuario  ingrese el medio de pago por el cual pagará. Estos pueden ser, débito y crédito.  |Verificar pago|
|**RF 04.4.2**|Se valida el medio de pago, y si es correcto. Se pedirá la dirección a la cual llegará el producto. Si el pago no es válido regresará al requerimiento anterior (RF 04.4.1)|Verificar pago|
|**RF 04.4.3**|Se pedirá que se acepten los términos y condiciones de la compra.|Verificar pago|
|**RF 04.4.4**|Se mostrará un resumen de la compra, los productos que compro, el día app que llegara y el total del precio que se canceló.|Verificar pago|
|**RF 04.4.5**|Por último el sistema se autodirige al módulo de inicio (RF 03) una vez terminado todo el proceso.|Verificar pago|
|**RF 05**|Módulo que permite buscar productos por su nombre, mostrando una lista de ellos ordenados por los más comprados.|Buscar producto|
|**RF 05.1**|<p>Se crearán páginas para guardar los productos que coincidan con la búsqueda. Cada página contendrá una lista de los productos cargados (20 productos por página), además el total de páginas se calculará de la siguiente manera:</p><p>cantidad productos // 20 = cantidad páginas.</p><p>Por último, si cantidad productos % 20 != 0, se añadirá una página extra la cual la cantidad a mostrar en la lista, será igual a cantidad productos - (cantidad páginas \* 20).</p>|Buscar producto|
|**RF 05.2**|Los productos se pueden filtrar por nombre, precio y si están en oferta o no, por categorías.|Buscar producto|
|**RF 05.3**|Sí no coincide ningún producto con la búsqueda, aparecerá un mensaje (no se encontró ningún elemento)|Buscar producto|
|**RF 05.4**|Los productos tendrán una pre visualización por defecto previa a la carga.|Buscar producto|
|**RF 05.5**|Por cada producto se mostrará una imagen, un nombre, la clasificación, el precio y la descripción (solo se mostrará como máximo 100 caracteres dentro de este módulo) (al igual que en RF 03.2).|Buscar producto|
|**RF 05.6**|Cada vez que se presione en un producto, se abrirá los detalles de este. Pero si se presiona un botón (carrito) dentro del producto, se añadirá al carrito. además se podrá guardar en una lista de deseados. (al igual que en RF 03.3).|Buscar producto|
|**RF 06**|Módulo personalizado para cada producto que permita ver a detalle el nombre, precio, clasificación (también comentarios asociados al producto) y descripción de este.|Mostrar producto|
|**RF 06.1**|Se podrá agregar al carrito y a la lista de deseados, además de mostrar el descuento asociado a este.|Mostrar producto|
|**RF 06.2**|El usuario podrá colocar la clasificación (siempre y cuando esté logueado (RF 01) ), que él estime conveniente para el producto. Esta se colocará con estrellas del 1 al 5, en donde 5 es la más alta. Por cada producto se mostrará el promedio de las clasificaciones dadas por los usuarios. |Mostrar producto|
|**RF 06.3**|<p>El usuario podrá dejar comentarios (máximo 250 palabras) sobre los productos, siempre y cuando antes deje su clasificación (RF 06.2). Además como en </p><p>el requerimiento anterior (RF 06.2), se necesita estar logueado para dejar un comentario (RF 01).</p>|Mostrar producto|
|**RF 07**|Módulo que permita a personas comunes, registrarse como empresa para recibir descuentos al comprar por mayor (grandes cantidades de productos). Se pedirá que se acepten los términos y condiciones y CVE (código de verificación electrónica) , para comenzar el proceso de verificación que dura aproximadamente 2 semanas (Se enviará un correo electrónico con la respuesta). Si se acepta la cuenta de empresa, en su perfil aparecerá un distintivo.|verificación de documentos|
|**RF 08**|Dentro de la página web se pedirá que aparezcan pegatinas de forma aleatoria (dentro de dimensiones que el usuario puede visualizar, estas cambian dependiendo de la pantalla de cada dispositivo).|juego|
|**RF 08.1**|Cada vez que se presione dentro de una pegatina, aparecerán preguntas con alternativas (4 alternativas), la cual el usuario deberá responder la correcta.|juego|
|**RF 08.1.1**|Las preguntas se mostrarán de forma aleatoria, además, tendrán relación con el reciclaje y medio ambiente. |juego|
|**RF 08.1.2**|Las alternativas se organizaron de forma aleatoria. Una de ellas es la correcta y las demás son incorrectas.|juego|
|**RF 08.1.3**|Si se presiona en la alternativa correcta se asociará un descuento a la cuenta del usuario. Del caso contrario vuelve al módulo de inicio.|juego|
|**RF 08.1.4**|Se contará de 1 minuto para responder, en el caso que no se responda ninguna alternativa, se considerará que la respuesta es incorrecta|juego|
|**RF 08.2**|Solo aparecerán pegatinas si el usuario no tiene ningún descuento asociado.|juego|
|**RF 08.3**|Las pegatinas solo aparecen cuando el administrador activa la temporadas de pegatinas (descuentos), estas se desactivaran de la misma forma (por el administrador).|juego|
|**RF 08.4**|Las pegatinas aparecerán por detrás de los elementos en pantalla (imágenes, botones, cuadros, etc).|juego|
|**RF 09**|Sistema que gestione y administre los descuentos u ofertas, que de él sistema.|Acumular Puntos|
|**RF 10**|Módulo que permita guardar y visualizar los productos deseados.|Lista Deseados|
|**RF 11**|Módulo de administrador en donde se pueda administrar datos y visualizarlos.|administrar datos|

\-Casos de uso
---
A continuación se presentan los casos de uso:

<div align="center">
  <img src="https://github.com/HVGamerYT7/Proyecto-Ing-Web/blob/main/imgReadme/casosuso.png" alt="Casos de Uso">
  <p>Figura 1. Casos de Uso</p>
</div>

\-Maquetas
---
Se presentan las maquetas realizadas en figma:
<a href="https://www.figma.com/file/NjzQ3luHXtIJpk6XFp8znu/alpha-proyect-web?type=design&node-id=0%3A1&mode=design&t=Yq5Vnin0aGm4c4s4-1">Link de figma</a>

<div align="center">
  <img src="https://github.com/HVGamerYT7/Proyecto-Ing-Web/blob/78d5bf2a9ddc81540afa9f27eb6ad49055928a7b/imgReadme/busqueda.jpeg" alt="Busqueda">
  <p>Figura 2. Busqueda</p>
</div>

<div align="center">
  <img src="https://github.com/HVGamerYT7/Proyecto-Ing-Web/blob/78d5bf2a9ddc81540afa9f27eb6ad49055928a7b/imgReadme/carrito.jpeg" alt="Carrito">
  <p>Figura 3. Carrito</p>
</div>

<div align="center">
  <img src="https://github.com/HVGamerYT7/Proyecto-Ing-Web/blob/78d5bf2a9ddc81540afa9f27eb6ad49055928a7b/imgReadme/inicio.jpeg" alt="Inicio">
  <p>Figura 4. Inicio</p>
</div>

<div align="center">
  <img src="https://github.com/HVGamerYT7/Proyecto-Ing-Web/blob/78d5bf2a9ddc81540afa9f27eb6ad49055928a7b/imgReadme/listadeseados.jpeg" alt="Lista de deseados">
  <p>Figura 5. Lista de deseados</p>
</div>

<div align="center">
  <img src="https://github.com/HVGamerYT7/Proyecto-Ing-Web/blob/78d5bf2a9ddc81540afa9f27eb6ad49055928a7b/imgReadme/listaproductos.jpeg" alt="Lista de Productos">
  <p>Figura 6. Lista de Productos</p>
</div>

<div align="center">
  <img src="https://github.com/HVGamerYT7/Proyecto-Ing-Web/blob/78d5bf2a9ddc81540afa9f27eb6ad49055928a7b/imgReadme/listausuarios.jpeg" alt="Lista de Usuarios">
  <p>Figura 7. Lista de Usuarios</p>
</div>

<div align="center">
  <img src="https://github.com/HVGamerYT7/Proyecto-Ing-Web/blob/78d5bf2a9ddc81540afa9f27eb6ad49055928a7b/imgReadme/login.jpeg" alt="Login">
  <p>Figura 8. Login</p>
</div>

<div align="center">
  <img src="https://github.com/HVGamerYT7/Proyecto-Ing-Web/blob/78d5bf2a9ddc81540afa9f27eb6ad49055928a7b/imgReadme/producto.jpeg" alt="Producto">
  <p>Figura 9. Producto</p>
</div>

<div align="center">
  <img src="https://github.com/HVGamerYT7/Proyecto-Ing-Web/blob/78d5bf2a9ddc81540afa9f27eb6ad49055928a7b/imgReadme/registro.jpeg" alt="Registro">
  <p>Figura 10. Registro</p>
</div>

<div align="center">
  <img src="https://github.com/HVGamerYT7/Proyecto-Ing-Web/blob/78d5bf2a9ddc81540afa9f27eb6ad49055928a7b/imgReadme/sobre-nosotros.jpeg" alt="Sobre Nosotros">
  <p>Figura 11. Sobre Nosotros</p>
</div>

<div align="center">
  <img src="" alt="Terminos y condiciones">
  <p>Figura 12. Terminos y condiciones/p>
</div>

\-Consideraciones finales
---

Para revisar correctamente todas nuestras pantallas HTML, abrir con Live Server cada archivo de forma independiente.
