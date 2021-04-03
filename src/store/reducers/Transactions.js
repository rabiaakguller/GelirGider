import {ADD_TRANSACTION  , DELETE_TRANSACTION } from '../actions/types';

const initialstate = {
    transactions : [
        {id:1, title:'Giyiiiism', price: 80},
        {id:2, title:'Yemek', price: -90},
        {id:3, title:'Market', price: -120},
        {id:4, title:'Sağlık', price: -20},
        {id:5, title:'Kira', price: 11500},
        {id:6, title:'Eğitim', price: -600},
       
    ],
};

export default (state = initialstate, {type, payload}) => {
    switch(type){
        case ADD_TRANSACTION:
            return{
                ...state,
                transactions:[payload,...state.transactions],
            };
            case DELETE_TRANSACTION:
                return{
                    ...state,
                    transactions: state.transactions
                    .filter(transaction=>transaction.id !==payload,
                        
                        ),
                };
        default:
            return state;
    }
};