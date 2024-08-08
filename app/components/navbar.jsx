"use client";
import { FloatButton } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { CounterContext } from "../store/counter";

export default function Navbar() {
  const { counter } = useContext(CounterContext);
  return (
    <FloatButton icon={<ShoppingCartOutlined />} badge={{ count: counter }} />
  );
}
