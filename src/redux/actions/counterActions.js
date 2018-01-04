export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const addCount = (num) => {
    return {
        type: INCREMENT,
        num
    }
}

export const decreCount = (num) => {
    return {
        type: DECREMENT,
        num
    }
}