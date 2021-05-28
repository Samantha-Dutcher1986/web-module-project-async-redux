import axios from 'axios';

export const IS_FETCHING = "IS_FETCHING";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAIL = "FETCHING_FAIL";

export const getFortune = () => {
    return dispatch => {
        dispatch({ type: IS_FETCHING })

        axios.get('http://fortunecookieapi.com/v1/fortunes/1')
            .then(response => {
                console.log(response.data.fortune);
                dispatch({ type: FETCHING_SUCCESS, payload: response.data.fortune });
            })
            .catch(error => {
                dispatch({ type: FETCHING_FAIL, payload: error });
            });
    };
};

export const fetching = () => {
    return ({
        type: FETCHING_SUCCESS,
        payload: fortune
    });
};

export const fetchingFail = (error) => {
    return ({
        type: FETCHING_FAIL,
        payload: error
    });
};