import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Product 1", price: 19.99 },
  { id: 2, name: "Product 2", price: 29.99 },
  { id: 3, name: "Product 3", price: 39.99 },
  { id: 4, name: "Product 1", price: 19.99 },
  { id: 5, name: "Product 2", price: 29.99 },
  { id: 6, name: "Product 3", price: 39.99 },
  { id: 7, name: "Product 1", price: 19.99 },
  { id: 8, name: "Product 2", price: 29.99 },
  { id: 9, name: "Product 3", price: 39.99 },
];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p>Rupees : {product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
