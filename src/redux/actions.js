export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function addCount(num){
    return {
        type: INCREMENT,
        num
    }
}

export function decreCount(num) {
    return {
        type: DECREMENT,
        num
    }
}