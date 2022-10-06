import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Products } from "../mock";

export default function Home() {
  const [product, setProducts] = useState({});
  const { id } = useParams();

  function filterProduct() {
    const productFinder = Products.find((item) => item.id === Number(id));
    setProducts(productFinder);
  }

  useEffect(() => {
    filterProduct();
  }, []);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Preço: R${product.price}</p>
      <p>Quantidade: {product.stock}</p>
      <p>Descrição: {product.description}</p>

      <Link to={`/`}>Voltar</Link>
    </div>
  );
}
