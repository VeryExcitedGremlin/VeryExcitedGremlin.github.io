// Products Page - Demonstrates useSearchParams for query parameters

import { useSearchParams } from "react-router-dom";
import { products } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

function Products() {
  // useSearchParams grabs the query key value pairs object
  const [searchParams, setSearchParams] = useSearchParams();

  // grab the search value by using the key
  //  <baseUrl>?search=<valueOfSearchVariable>
  const search = searchParams.get("search") || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearchParams({ search: e.target.value })}
        className="search-input"
      />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
