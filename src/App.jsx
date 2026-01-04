import ProductCard from "./components/ProductCard";

function App() {
  const product = {
    title: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 3999,
    salePrice: 2499,
    image: "/product.jpg"
  };

  return (
    <div style={{ padding: "20px" }}>
      <ProductCard product={product} />
    </div>
  );
}

export default App;
