import "./styles.css";

const Cart = ({ sale }) => {
    return (
      <>
        <div className="sale">
          <div className="sale_Data">
          <div className="saleImg">
          {sale.id === 1 ? <div className="aa"></div> : null}
          {sale.id === 2 ? <div className="bb"></div> : null}
          {sale.id === 3 ? <div className="cc"></div> : null}
          {sale.id === 4 ? <div className="dd"></div> : null}
          {sale.id === 5 ? <div className="ee"></div> : null}
          {sale.id === 6 ? <div className="ff"></div> : null}
        </div>
        <div className="text">
            <h2 id="name">{sale.name} </h2>
            <h6 id="category">{sale.category} </h6>
        </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Cart;
  