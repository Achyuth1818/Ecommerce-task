import { useCart } from "../context/CartContext";

export default function Payment() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    alert("Payment processed successfully!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Card Number</label>
          <input type="text" className="border p-2 w-full rounded" required />
        </div>
        <div>
          <label className="block">Expiration Date</label>
          <input type="month" className="border p-2 w-full rounded" required />
        </div>
        <div>
          <label className="block">CVV</label>
          <input type="text" className="border p-2 w-full rounded" required />
        </div>
        <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded w-full"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}
