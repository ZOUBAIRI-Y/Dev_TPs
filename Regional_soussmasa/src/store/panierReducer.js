const initialState = {
    panier: []
}
const Reducer = (state= initialState, action) => {
    switch (action.type) {
        case 'ADDARTICLE':
            // console.log(action.payload);
            const id = state.panier.find(id=> id == action.payload)
            // console.log(article);
            return id?state:{...state, panier:[...state.panier, action.payload]}
        case 'REMOVEARTICLE':
            return {...state, panier: state.panier.filter(id=> id !== action.payload)}
        default:
            return state;
    }
    
}
export default Reducer