const cart = []

const cartReducer = (state = cart, action) => {
    switch (action.type) {
        case "ADDTOCART": {
            let a = state.find(i => i.id === action.payload.id);
            if (a === undefined) {
                action.payload.amount = 1;
                state.push(action.payload);
            }
            else {
                a.amount++
            }
        }

        case "DELATEFROMCART": {
            state = state.filter(i => i.id !== action.payload);
            return state;

        }
        case "ADDQTYTOCART": {
            const product = state.find(i => i.id === action.payload)
            if (product.amount < product.qty) {
                product.amount++;
                return state;
            }
            //    return {...state, qty:state[action.payload+1]}

        }
        case "DECREASQTYFROMCART": {
            //    state = {...state, qty:state[action.payload].qly-1};
            let product = state.find(i => i.id === action.payload)
            if (product.amount > 1) {
                product.amount--;
                return state;
            }

        }
        default:
            return state;
    }
    return state;
}

export default cartReducer;
