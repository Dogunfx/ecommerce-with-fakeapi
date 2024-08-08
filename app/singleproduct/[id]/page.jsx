"use client";
import { Button, Card, Image } from "antd";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SinglePage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(simplerHandler, []);

  function simplerHandler() {
    handleFetch();
  }

  async function handleFetch() {
    const res = await axios.get("https://fakestoreapi.com/products/" + id);
    setProduct(res.data);
  }

  return (
    <Card title={product.title} className="w-1/2 m-auto">
      <div className="text-center">
        <Image src={product.image} alt={product.title} height={300} />
      </div>
      <p>{product.description}</p>
      <div className="flex justify-between">
        <p>NGN {product.price}</p>
        <a
          href="/"
          className="bg-teal-600 text-white px-4 py-2 rounded-sm  hover:bg-teal-900 hover:text-white"
        >
          Continue Shopping
        </a>
      </div>
    </Card>
  );
}
