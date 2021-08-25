const initialState = {
    items: [],
    isLoaded: false,
};

const filters = (state = initialState, action) => {
    switch (action) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
};

export default filters;
