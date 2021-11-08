import Product from "./Product";
import "./styles.css";
import TotalSale from "./TotalSale";
import Topo from "./Topo";

const MenuContainer = ({
  products,
  handleClick,
  currentSale,
  setCartTotal,
  cartTotal,
  showProducts,
  filteredProducts,
  setCurrentSale
}) => {
  return (
    <>
    
      <div>
        <Topo showProducts={showProducts} filteredProducts={filteredProducts} />
      </div>

      <div className="container">
        <div className="productsContainer">
          <ul>
            {filteredProducts.length>=1
              ? filteredProducts.map((filtered) => (
                  <li  key={filtered.id}>
                    {" "}
                    <Product
                      prod={filtered}
                      handleClick={handleClick}
                      currentSale={currentSale}
                    />{" "}
                  </li>
                ))
              : products.map((prod) => (
                  <li>
                    {" "}
                    <Product
                      key={prod.id}
                      prod={prod}
                      handleClick={handleClick}
                      currentSale={currentSale}
                    />{" "}
                  </li>
                ))}
          </ul>
        </div>
        <div className="totalSaleContainer">
          <TotalSale
            currentSale={currentSale}
            setCartTotal={setCartTotal}
            cartTotal={cartTotal}
            setCurrentSale={setCurrentSale}
          />
        </div>{" "}
        
      </div>
    </>
  );
};

export default MenuContainer;
