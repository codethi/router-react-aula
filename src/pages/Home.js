import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Products } from "../mock";

export default function Home() {
  const [products, setProducts] = useState(Products);
  const navigate = useNavigate();

  function handleProductClick(id) {
    navigate(`/details/${id}`)
  }

  return (
    <>
      {products.map((item, index) => (
        <div key={index} onClick={() => handleProductClick(item.id)}>
          <h1>{item.name}</h1>
          <p>{item.price}</p>
          <Link to={`/details/${item.id}`}>Ver mais</Link>
        </div>
      ))}
    </>
  );
}
