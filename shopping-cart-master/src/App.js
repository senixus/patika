import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";

const App = () => {
  const [cart, setCart] = useState([
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
  ]);
  const [itemCount, setItemCount] = useState(0);

  const getItemCount = (cart) => {
    // Sepetteki toplam ürün sayısını bul
    let itemCount = cart.reduce((total, product) => total + product.value, 0);

    return itemCount;
  };

  const handleIncrement = (product) => {
    // cart array'inin kopyasını oluştur
    const cartItems = [...cart];
    console.log(cartItems);
    // parametre olarak gelen product'ın cart array'i içerisindeki index'ini bul
    const index = cartItems.indexOf(product);
    // kopyalanan cart array'ine bu ürünü ekle ve value property'sini 1 artır
    cartItems[index] = { ...cartItems[index] };
    cartItems[index].value++;
    // getItemCount fonksiyonunu kullanarak sepetteki ürün sayısını bul
    const itemCount = getItemCount(cartItems);
    // state'i güncelle
    setCart(cartItems);
    setItemCount(itemCount);
  };

  const handleDecrement = (product) => {
    const cartItems = [...cart];
    const index = cartItems.indexOf(product);
    cartItems[index] = { ...cartItems[index] };
    cartItems[index].value--;
    const itemCount = getItemCount(cartItems);
    setCart(cartItems);
    setItemCount(itemCount);
  };

  return (
    <div className="App">
      <Navbar totalItems={itemCount} />
      <ProductsGrid
        products={products}
        cart={cart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
};

export default App;
