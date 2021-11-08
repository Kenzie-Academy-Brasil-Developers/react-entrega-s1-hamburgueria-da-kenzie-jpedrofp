import "./styles.css";

const Product = ({ prod, handleClick }) => {
  return (
    <>
      <div className="product">
        <div className="productImg">
          {prod.id === 1 ? <div className="a"></div> : null}
          {prod.id === 2 ? <div className="b"></div> : null}
          {prod.id === 3 ? <div className="c"></div> : null}
          {prod.id === 4 ? <div className="d"></div> : null}
          {prod.id === 5 ? <div className="e"></div> : null}
          {prod.id === 6 ? <div className="f"></div> : null}
        </div>
        <div className="labels">
          <h2 id="name">{prod.name} </h2>
          <h6 id="category"> {prod.category} </h6>
          <h5 id="price"> {prod.price} $ </h5>

          <button
            className="buttonFilter"
            onClick={() => {
              handleClick(prod.id);
            }}
          >
            Adicionar
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
