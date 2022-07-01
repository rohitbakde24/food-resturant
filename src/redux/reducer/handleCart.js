const cart = [];

const handleCart = (state=cart, action) =>{
    
    const  item = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x)=> x.id === item.id);
            if (exist){
                return state.map((x)=>
                x.id === item.id ? {...x, qty: x.qty +1} : x);
            }else{
                const item = action.payload;
                return[
                    ...state,
                    {
                        ...item,
                        qty:1,
                    }
                ]
            }
            console.log(cart);

            
            break;
            
            case "DELITEM":
                const exist1 = state.find((x)=> x.id === item.id);
                if(exist.qty === 1){
                    return state.filter((x)=> x.id !== exist1.id);
                }else{
                    return state.map(
                        (x)=>x.id === item.id ? {...x, qty: x.qty-1}:x
                    )
                }
                break;

                case "INCREMENT":
                    let updateCart = state.id.map((curElem)=>{
                        if (curElem.item === action.payload){
                            return {...curElem,qty:curElem.qty +1};
                        }
                        return curElem;
                    });
                    return {...state, id: updateCart};
        default:
            return state;
            break;
    }
    

}

export default handleCart