var redux = require('redux');
// const request = require('request');

var defaultState = {
    mang: ['Android', 'NodeJS', 'IOS'],
    isAdding: false,
    categories: [],
}
var reducer = (state = defaultState , action) => {
    switch (action.type){
        case 'TOGGLE_IS_ADDING': 
            return { state, isAdding: !state.isAdding }
            break;
        case 'INIT_DATA': 
            fetch('http://localhost:5000/api/v1/Category/Categories')
        .then(results => {
                return results.json();
            }).then(data => {
                state.categories = data;
            })
            return;
            break;
        default:
            break;
    }
    return state;
}

//var store = redux.createStore(reducer);
//store.dispatch({type: 'INIT_DATA'});
//console.log(store.getState());