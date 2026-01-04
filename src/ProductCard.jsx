import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  const [added, setAdded] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="card">
      <div className="favorite" onClick={() => setFavorite(!favorite)}>
        {favorite ? "❤️" : "🤍"}
      </div>

      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description.slice(0, 60)}...</p>

      <div className="price">
        <span className="sale">₹{product.salePrice}</span>
        <span className="original">₹{product.price}</span>
      </div>

      <button onClick={handleAddToCart}>
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
