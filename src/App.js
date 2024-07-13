import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/product";
import CartPage from "./pages/cart";
import CheckoutPage from "./pages/checkout";
import Success from "./pages/success";
import WishListPage from "./pages/wishlist";
import { CartProvider } from './contexts/CartContext';
import { WishListProvider } from "./contexts/wishListContext";
function App() {
  return (
    <CartProvider>
      <WishListProvider>
      <Router>
      {/* <Header /> */}
        <div className="App">
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<Success />} />
            <Route path="/wishList" element={<WishListPage />} />
          </Routes>
        </div>
      </Router>
      </WishListProvider>
    </CartProvider>
  );
}

export default App;
