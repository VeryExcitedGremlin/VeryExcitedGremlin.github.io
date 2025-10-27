export default function ProductList() {
  // array of products - Typically will come in from an API call
  const products = ["iPhone", "iPad", "MacBooks", "Android Phone"];

  return (
    <ul>
      {/* map - 1 to 1 input to output
          we are createing a new output with it
           We use to be "iPhone" and now we are
             <li>iPhone</li>
             and it does that for each item in the
             array
        */}
      {products.forEach((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ul>
  );
}
