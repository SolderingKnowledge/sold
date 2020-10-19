import axios from "axios";
import { 
    FETCH_ITEMS_REQUEST, 
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAIL,
    FETCH_DETAILS_REQUEST,
    FETCH_DETAILS_SUCCESS,
    FETCH_DETAILS_FAIL
} from "../constants/itemConstants";

// export const getItems = () => {
//     // redux-thunk
//     return async (dispatch) => {
//         try{

//         }
//         catch(e){

//         }
//     }
// }

export const getItems = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_ITEMS_REQUEST});// sets loading to true
        const { data } = await axios.get("/api/items");
        dispatch({
            type: FETCH_ITEMS_SUCCESS,
            payload: data
        });// sets loading to false;
    } catch (error) {
        dispatch({
            type: FETCH_ITEMS_FAIL,
            payload: error.response && error.response.data.message ? 
                error.response.data.message : error.message
        })
    }
}
//     !-very important otherwise you will be losing where is your req is going 
//put /api/items/:id
export const getItemDetails = id => async (dispatch) => {
    try {
        dispatch({ type: FETCH_DETAILS_REQUEST});// sets loading to true
        const { data } = await axios.get(`/api/items/${id}`);
        dispatch({
            type: FETCH_DETAILS_SUCCESS,
            payload: data
        });// sets loading to false;
    } catch (error) {
        dispatch({
            type: FETCH_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? 
                error.response.data.message : error.message
        })
    }
}