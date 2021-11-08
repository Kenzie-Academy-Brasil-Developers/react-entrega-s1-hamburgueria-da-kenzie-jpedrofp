import "./styles.css";
import Cart from "./Cart";

const TotalSale = ({ currentSale, setCurrentSale}) => {
  const accumulator = [];
  const cartSum = currentSale?.reduce((acc, currentValue) => {
    if (accumulator.includes(currentValue.id)) {
      return acc;
    }
    accumulator.push(currentValue.id);
    return acc + currentValue.price;
  }, 0);

  function verify(sale) {
    const accumulator = [];
    if (accumulator.length === 0) {
      accumulator.push(sale.id);
      return false;
    }
    if (accumulator.includes(sale.id)) {
      accumulator.push(sale.id);
      return true;
    }
    accumulator.push(sale.id);
    return false;
  }

  const cartSumDec = (Math.round(cartSum * 100) / 100).toFixed(2);

  function removeAll() {
    setCurrentSale([])
  }

  return (
    <div className="total">
        <div className="cartContainer">
        <h4>Carrinho de compras</h4>
        </div>
      <div className="cartCard">
      

        {currentSale.map((sale) =>
          verify(sale) ? null : (
            <li key={sale.id}>
              <Cart sale={sale} />
            </li>
          )
        )}
      </div>
      <hr></hr>
      <div className="finish">
        <span> Total </span>
        <h6> R$ {cartSumDec}</h6>
        
      </div>
      <div className="rem">
      <button className="remove" onClick={removeAll}>Remover todos</button>
      </div>
     
    </div>
  );
};


export default TotalSale;
