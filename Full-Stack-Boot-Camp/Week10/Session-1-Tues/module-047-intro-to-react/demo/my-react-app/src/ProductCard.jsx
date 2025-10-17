export default function ProductCard({ title, price, image, isOnSale }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="price">
        {isOnSale && <span className="sale">SALE! </span>}${price}
      </p>
      <div>This is great</div>
    </div>
  );
}
