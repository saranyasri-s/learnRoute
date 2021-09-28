import React from "react";
import { useParams } from "react-router";

function ProductDetail() {
  const params = useParams();
  return (
    <div>
      <h3>Product detail</h3>
      <p>{params.product}</p>
    </div>
  );
}

export default ProductDetail;
