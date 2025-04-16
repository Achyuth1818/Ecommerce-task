import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Payment from "./components/Payment";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex">
          <nav className="p-4 bg-gray-100 w-full">
            <Link to="/" className="mr-4">
              Home
            </Link>
            <Link to="/payment">Payment</Link>
          </nav>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <div className="flex">
                <ProductList />
                <Cart />
              </div>
            }
          />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
