import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="border-l p-4 w-80 fixed right-0 top-0 h-full bg-white">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-bold">{item.name}</h3>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              ×
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-2 bg-gray-200 rounded"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-2 bg-gray-200 rounded"
            >
              +
            </button>
            <span>Rupees : {(item.price * item.quantity).toFixed(2)}</span>
          </div>
        </div>
      ))}
      <div className="mt-4 font-bold">Total: Rupees :{total.toFixed(2)}</div>
    </div>
  );
}
