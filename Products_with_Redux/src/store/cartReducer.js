import {produce} from "immer";

const initialState = {
    items: [],
    totalTopay: 0
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const product = state.items.find(item => item.id == action.payload.id);
            return product ? state : produce(state, copy => {
                const newProduct = {...action.payload, quantity: 1}
                copy.items.push(newProduct);
                
                copy.totalTopay += newProduct.price*newProduct.quantity
                // console.log(copy.totalTopay);
            })
            
        case 'REMOVE_FROM_CART':
            const productId = state.items.find(item => item.id == action.payload);
            return produce(state, copy => {
                
                copy.totalTopay -= productId.price*productId.quantity
                copy.items = copy.items.filter(item => item.id !== action.payload)
            })
        case 'setQuantity' : 
            // console.log(action.payload.QuantityValue);
            // const productQ = state.items.find(product=> product.id == action.payload.id)
            const productInd = state.items.findIndex(product=> product.id == action.payload.id)
            return produce(state, copy=>{
                const oldQuan = copy.items[productInd].quantity
                const newQuan = parseInt(action.payload.QuantityValue)
                // console.log(newQuan);
                copy.items[productInd] = {...copy.items[productInd], quantity: newQuan}
                // console.log(copy.items[productInd]);
                const priceDifference = copy.items[productInd].price * (newQuan - oldQuan)
                copy.totalTopay += priceDifference               
            })
            // if (productInd) {
            //     const stateCopy = [...state.items]
            //     stateCopy[productInd] = {...stateCopy[productInd], quantity: action.payload.QuantityValue}
            //     state.items = stateCopy
            // }
            // return state
            // if (productQ) {
            //     {...productQ, quantity : action.payload.QuantityValue}
            // }
            
            // return state
            // return (productQ)? produce(productQ, copy=>{
            //     copy.quantity = action.payload.QuantityValue
            // }): state
            // const id = parseInt(action.payload.id)
            // const quantity = parseInt(action.payload.QuantityValue)
            // return state.items.slice().map(product=> {
            //     (product.id !== id) ? product : {...product, quantity:quantity}
            // })
            
        default:
            return state;
    }
};

export default Reducer;