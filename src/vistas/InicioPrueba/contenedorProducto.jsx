import '../estilos/inicioPrueba.scss';

function ContenedorProducto() {
    const urlProducto = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Frockcontent.com%2Fes%2Fwp-content%2Fuploads%2Fsites%2F3%2F2019%2F02%2Fo-que-e-produto-no-mix-de-marketing-1024x538.png&tbnid=snQ87iIy7YlAIM&vet=12ahUKEwi9rMK775aCAxVclJUCHSmbASUQMygBegQIARBx..i&imgrefurl=https%3A%2F%2Frockcontent.com%2Fes%2Fblog%2Fproducto-en-el-marketing%2F&docid=raz8xoe6v6xofM&w=1024&h=538&q=Producto&client=safari&ved=2ahUKEwi9rMK775aCAxVclJUCHSmbASUQMygBegQIARBx';

    return ( 
    <div className="contenedorProducto">
        <img src={urlProducto} alt='imagenProducto'></img>
        <h3>Nombre</h3>
        <h3>Precio</h3>
    </div> );
}

export default ContenedorProducto;