import { useSelector } from "react-redux";
import Product from "./Product";

export default () => {
    const cart = useSelector(state => state.cart.items);
    const total = useSelector(state=> state.cart.totalTopay)
    return <div className="cart">
        <h4 className="totalTopay">Total à payer: {total.toFixed(2)} $</h4>
        {
          cart.map(item => {
            return <Product data={item} key={item.id} isCart={true} />
          })
        }
    </div>
}