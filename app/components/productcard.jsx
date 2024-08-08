import { Button, Card, Image } from "antd";
import { useContext } from "react";
import { CounterContext } from "../store/counter";

export default function ProductCard({ product }) {
  const { counter, setCounter } = useContext(CounterContext);

  function updateProductCart() {
    const newCounter = counter + 1;
    setCounter(newCounter);
  }

  return (
    <Card title={product.title} className="w-1/4 m-4">
      <Image src={product.image} alt={product.title} height={200} />
      <div className="flex justify-between">
        <p>NGN {product.price}</p>
        <Button onClick={updateProductCart} type="primary">
          Buy Now
        </Button>
      </div>

      <a href={"singleproduct/" + product.id}>View More</a>
    </Card>
  );
}
