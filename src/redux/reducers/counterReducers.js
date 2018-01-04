const counter = (state = 0, action) => {
    switch (action.type){
        case 'INCREMENT':
            return state + action.num;
        case 'DECREMENT':
            return state - action.num;
        default:
            return state;
    }
}
export default counter;