import "./styles.css";

const Topo = ({ showProducts, filteredProducts }) => {
  return (
    <>
      <div className="topo">
          <div className="title">
        <h1>Burguer</h1>

        </div>
        <div className="input">
          <input type="text" onChange={(e) => showProducts(e.target.value)} />
          <button
            onClick={() => showProducts(filteredProducts)}
            className="buttonFilter"
          >Pesquisar</button>
        </div>
      </div>
    </>
  );
};

export default Topo;
