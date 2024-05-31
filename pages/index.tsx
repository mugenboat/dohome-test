"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";

interface Product {
  id: string;
  text: string;
  completed: boolean;
  thumbnail: string;
  key: number;
  description: string;
  discountPercentage: number;
  price: number;
  unit: string;
}

interface Promotion {
  id: number;
  price: number;
  button: string;
  header: string;
  content: string;
  list: string[];
  textStyle: string;
  buttonStyle: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [promotions, setPromotion] = useState<Promotion[]>([
    {
      id: 1,
      price: 39,
      button: "Your current plan",
      header: "Basic License",
      content:
        "our goverment backed plan designed to keep your business legaly and secure",
      list: [
        "Secure your customer usage",
        "View basic analytics",
        "Up to 350 customer profiles",
        "Customer network name",
      ],
      textStyle: "basic-card",
      buttonStyle: "basic-button-color promotion-button",
    },
    {
      id: 2,
      price: 60,
      button: "upgrade to social",
      header: "Social License",
      content:
        "Unlimited analytics,plans,demographic insights.All your need to grow-up your business",
      list: [
        "Add your own branding",
        "View popularity analytics",
        "Up to 1500 customer profiles",
        "Viwe demographicinsights",
      ],
      textStyle: "basic-card",
      buttonStyle: "promotion-button social-button-color",
    },
    {
      id: 3,
      price: 125,
      header: "Marketing License",
      button: "upgrade to marketing",
      content:
        "Unlock powerfull time-saving tools for creating email delivery and collecting marketing data",
      list: [
        "Collect marketing data",
        "Design your emails",
        "Email campaigns & interactions",
        "View your customers profiles",
      ],
      textStyle: "basic-card",
      buttonStyle: "promotion-button marketing-button-color",
    },
  ]);
  const link = "https://dummyjson.com/products";
  const fetchDataApi = () => {
    axios.get(link).then(response => {
      console.log("reeee", response);
      if (response.status === 200) {
        setProducts(response.data.products);
      } else {
        console.log("error");
      }
    });
  };

  useEffect(() => {
    fetchDataApi();
  }, []);

  return (
    <main>
      <div className="flex justify-center self-auto mt-10">
        {promotions.map(promotion => (
          <Card
            id={promotion.id}
            key={promotion.id}
            price={promotion.price}
            header={promotion.header}
            content={promotion.content}
            list={promotion.list}
            button={promotion.button}
            textStyle={promotion.textStyle}
            buttonStyle={promotion.buttonStyle}
          />
        ))}
      </div>
      <div className="flex justify-center self-auto mt-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
          {products.map(product => (
            <ProductCard
              thumbnail={product.thumbnail}
              id={product.id}
              key={product.id}
              description={product.description}
              price={product.price}
              discountPercentage={product.discountPercentage}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
