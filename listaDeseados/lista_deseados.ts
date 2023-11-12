const pool = require('../config');

export const eliminarProductosLD = async (id_producto: number, id_usuario: number) => {
    pool.query(`DELETE FROM listaDeseados INNER JOIN productos ON listaDeseados.id_producto = productos.id WHERE listaDeseados.id_usuario = '${id_usuario}' AND productos.id = '${id_producto}'`, (error:any, results:any) => {
        if (error) {
            console.error(error);
        } else {
            console.log(`Producto con id ${id_producto} eliminado exitosamente de la lista de deseos del usuario con id ${id_usuario}`);
        }
        pool.end();
    });
};

export const agregarProductoLD = async (id_producto: number, id_usuario: number) => {
    pool.query(`INSERT INTO listaDeseados (id_usuario, id_producto) VALUES ('${id_usuario}', '${id_producto}')`, (error:any, results:any) => {
        if (error) {
            console.error(error);
        } else {
            console.log(`Producto con id ${id_producto} agregado exitosamente a la lista de deseos del usuario con id ${id_usuario}`);
        }
        pool.end();
    });
};
