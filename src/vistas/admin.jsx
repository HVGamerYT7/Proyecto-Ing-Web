import React, { useState } from 'react';

const ProductTable = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 30 },
  ]);

  const handleModify = (productId) => {
    // Lógica para modificar los datos del producto
    console.log(`Modificar producto con id ${productId}`);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              <button onClick={() => handleModify(product.id)}>Modificar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
