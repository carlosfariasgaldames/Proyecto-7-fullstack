import React from "react";
import { Link } from "react-router-dom";
import productsData from "../../data/productsData";

const ProductList = () => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productsData.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
