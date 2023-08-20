export const decreaseQty=(id)=>{
    return{
        type: "DECREASQTY",
        payload:id,
       
    };
};


export const addQty=(id,amount)=>{
    return{
        type: "ADDQTY",
        payload:{id,amount},
       
    };
};

