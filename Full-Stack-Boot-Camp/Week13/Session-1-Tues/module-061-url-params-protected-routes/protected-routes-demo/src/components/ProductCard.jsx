// ProductCard Component
// Reusable card component for displaying product information

import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        <p className="product-category">{product.category}</p>

        <p className="product-price">${product.price}</p>

        <p className="product-stock">
          {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
        </p>

        {/* Link to product detail page using the product ID as a URL parameter */}
        <Link to={`/products/${product.id}`} className="btn-view-details">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
