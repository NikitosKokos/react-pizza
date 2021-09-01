import axios from 'axios';

export const setLoaded = (payload) => ({ type: 'SET_LOADED', payload });
export const setPizzas = (payload) => ({ type: 'SET_PIZZAS', payload });

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false));
    axios
        .get(
            `http://localhost:3000/pizzas?${
                category !== null ? `category=${category}` : ''
            }&_sort=${sortBy.type}&_order=${sortBy.order}`,
        )
        .then(({ data }) => {
            dispatch(setPizzas(data));
        });
};