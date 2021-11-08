import MenuContainer from "./components/MenuContainer";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 14.0 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 16.0 },
    { id: 3, name: "Big Kenzie", category: "Sanduíches", price: 18.0 },
    { id: 4, name: "Fanta Guaraná", category: "Bebidas", price: 5.0 },
    { id: 5, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Milkshake", category: "Bebidas", price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  function showProducts(input) {
    const filtrados = products.filter((product) => {
      for (let i = 0; i <= product.name.length; i++) {
        if (product.name === input) return true;
      }
      return false;
    });
    setFilteredProducts([...filtrados]);
  }

  const [currentSale, setCurrentSale] = useState([]);

  function handleClick(prod) {
    const sale = products.find((selected) => {
      return selected.id === prod;
    });

    if (currentSale.includes(sale)) {
      return;
    }

    setCurrentSale([...currentSale, sale]);
  }

  return (
    <div className="App">
      <MenuContainer
        showProducts={showProducts}
        filteredProducts={filteredProducts}
        products={products}
        handleClick={handleClick}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
      ></MenuContainer>
    </div>
  );
}

export default App;
