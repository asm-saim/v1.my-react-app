import type { ProductType } from "./productType";

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <div>
      <h4>Product Name: {product.name}</h4>
      <h4>Brand: {product.brand}</h4>
    </div>
  );
}
