import ProductCard from "./ProductCard";
import type { ProductType } from "./productType";

export default function Products() {
  const products: ProductType[] = [
    { name: "Laptop", brand: "Dell" },
    { name: "mobile", brand: "iphone" },
    { name: "Watch", brand: "vintage" },
    { name: "Backpack", brand: "American Tourister" },
    { name: "Glass", brand: "Ray Bon" },
    { name: "booot", brand: "woodland" },
  ];

  return (
    <div>
      {products.map((product) => (
        <ProductCard product={product}></ProductCard>
      ))}
    </div>
  );
}
