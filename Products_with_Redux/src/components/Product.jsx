import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, setQuantityAction } from "../store/actions";
import { useState } from "react";
import "../App.css";

export default ({ data, isCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [islocked, setIschecked] = useState(true);
  const dispatch = useDispatch();
  const handleQuantityChecked = () => {
    setIschecked(!islocked)
    dispatch(setQuantityAction(quantity, data.id));
  };
  const checkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="bi bi-check-circle-fill checkIcon"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </svg>
  );
  const unlockIcn = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="bi bi-unlock-fill unlockIcn"
      viewBox="0 0 16 16"
    >
      <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2" />
    </svg>
  );

  return (
    <div className="product-item">
      <img src={data.thumbnail} />
      <h3 className="title">{data.title}</h3>
      <span className="price">{data.price.toFixed(2)} $</span>
      {isCart ? (
        <div>
          <h6>Qantité: {data.quantity}</h6>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="cartItemActions"
          >
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="QuantityInput"
              disabled={islocked}
            />
            {/* <input type="checkbox" onChange={handleQuantityChecked} /> */}
            <>
              {islocked?
              <div onClick={()=> setIschecked(!islocked)}>{unlockIcn}</div>
              :<div onClick={handleQuantityChecked}>{checkIcon}</div>}
            </>
            <button
              type="button"
              onClick={() => dispatch(removeFromCart(data.id))}
              className="deleteButton"
            >
              Supprimer
            </button>
          </form>
        </div>
      ) : (
        <button onClick={() => dispatch(addToCart(data))}>
          Ajouter au panier
        </button>
      )}
    </div>
  );
};
