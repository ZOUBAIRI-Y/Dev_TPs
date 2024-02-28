import panierReducer from './panierReducer'
import { legacy_createStore as createStore } from 'redux' 
const store = createStore(panierReducer)

export default store