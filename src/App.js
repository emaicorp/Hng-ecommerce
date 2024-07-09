import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/product";
import CartPage from "./pages/cart";
import CheckoutPage from "./pages/checkout";
import Success from "./pages/success";
import { CartProvider } from './contexts/CartContext';
import Header from './components/header';
function App() {
  return (
    <CartProvider>
      
      <Router>
      {/* <Header /> */}
        <div className="App">
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
