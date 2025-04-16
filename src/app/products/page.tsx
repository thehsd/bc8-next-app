import React from "react";

const ProductPage = async () => {
  interface IProduct {
    id: number;
    title: string;
  }

  const response = await fetch("https://fakestoreapi.com/products");
  const allProduct = await response.json();
  console.log("  allProduct : ", allProduct);
  return (
    <div>
      {allProduct.map((product: IProduct) => {
        return <li key={product.id}> {product.title}</li>;
      })}
    </div>
  );
};

export default ProductPage;
