import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../context/CartContext";
import productsData from "../../data/productsData";

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = productsData.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductDetail;
