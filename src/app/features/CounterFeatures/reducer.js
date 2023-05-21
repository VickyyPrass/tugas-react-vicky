import * as counter from "./constans";

let initialState = {
    count: 0,
};

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case counter.tambah:
            return {
                ...state,
                count: state.count + action.value,
            };
        case counter.kurang:
            return {
                count: state.count - action.value,
            };
        default:
            return state;
    }
};

export default CounterReducer;
