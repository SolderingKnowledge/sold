import { 
    FETCH_ITEMS_REQUEST, 
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAIL,
    FETCH_DETAILS_REQUEST,
    FETCH_DETAILS_SUCCESS,
    FETCH_DETAILS_FAIL
} from "../constants/itemConstants";

export const itemsReducer = (state={items: []}, action) => {
    switch (action.type) {
        case FETCH_ITEMS_REQUEST:
            return { loading: true, items: []};
        case FETCH_ITEMS_SUCCESS:
            return { loading: false, items: action.payload };
        case FETCH_ITEMS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;

    }
}

export const itemDetailsReducer = (state={item: { reviews: []}}, action) => {
    switch (action.type) {
        case FETCH_DETAILS_REQUEST:
            return { loading: true, ...state};
        case FETCH_DETAILS_SUCCESS:
            return { loading: false, item: action.payload };
        case FETCH_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;

    }
}