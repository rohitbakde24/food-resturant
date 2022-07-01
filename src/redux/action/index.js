export const addCart = (item) => {
    return{
        type : "ADDITEM",
        payload : item
    }
}

export const delCart = (item) => {
    return{
        type : "DELITEM",
        payload : item
    }
}
export const incCart = (item) => {
    return{
        type : "INCREMENT",
        payload : item
    }
}