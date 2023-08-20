export const addToCart=(perfume)=>{
    return{
        type: "ADDTOCART",
        payload:perfume,
       
    };
};


export const deleteFromCart=(id)=>{
    return{
        type: "DELATEFROMCART",
        payload:id,
       
    };
};
export const decreasQtyFromCart=(id)=>{
    return{
        type: "DECREASQTYFROMCART",
        payload:id,
       
    };
};

export const addQtyToCart=(id)=>{
    return{
        type: "ADDQTYTOCART",
        payload:id,
       
    };
};


