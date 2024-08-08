"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./components/productcard";
import { Input, Typography } from "antd";

export default function Store() {
  const [products, setProduct] = useState([]);

  useEffect(simpleHandler, []);

  function simpleHandler() {
    handleFetch();
  }

  async function handleFetch() {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProduct(res.data);
  }

  function handleMap(item) {
    return <ProductCard key={item.id} product={item} />;
  }

  return (
    <main>
      <div className="text-center">
        <Typography.Title>My Web-store</Typography.Title>
        <Input.Search className="w-3/4" placeholder="Enter Product name" />
      </div>
      <div className="flex flex-wrap justify-center">
        {products.map(handleMap)}
      </div>
    </main>
  );
}
