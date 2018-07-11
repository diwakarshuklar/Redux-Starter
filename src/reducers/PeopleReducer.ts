import { FETCHING_PEOPLE, FETCH_PEOPLE_SUCCESS, TOGGLE_OVER_18 } from './../constants';

const initialState = {
    people: [],
    isLoading: true,
    checked: false
};

const peopleReducer = (state = initialState, action :any) => {
    const { type, payload } = action;
    
    switch (type) {
        case TOGGLE_OVER_18:
            return { ...state, checked: !state.checked };
        case FETCH_PEOPLE_SUCCESS:
            return { people: payload, isLoading: false };    
        default:
            return { ...state };
    }
};

export default peopleReducer;