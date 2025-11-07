// ProductDetail Page - Demonstrates useParams for path parameters

import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products.js';

function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(parseInt(id));

  if (!product) {
    return (
      <div className="page">
        <h1>Product Not Found</h1>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/products">&larr; Back</Link>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p className="product-price">${product.price}</p>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>{product.stock} in stock</p>
    </div>
  );
}

export default ProductDetail;
