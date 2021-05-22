import axios from "axios";
import { GET_ERRORS, GET_CONTRIBUTIONS, GET_DOC, LOADING, GET_EXTRACTED, GET_CONTRIBUTION } from "./types";

export const getContributions = () => (dispatch) => {
   dispatch(setLoading(true));
  axios
    .get(`http://localhost:5000/get-contributions`)
    .then((res) => {
      dispatch({
        type: GET_CONTRIBUTIONS,
        payload: res.data.data,
      });
    })
    .catch((err) =>{
      dispatch({
        type: GET_ERRORS,
        payload: err.response.message,
      })}
    );  
    dispatch(setLoading(false));
};
export const setLoading = (payload) => {
  return {
    type: LOADING,
    payload: payload
  };
};


export const getContribution = (id) => (dispatch) => {
  dispatch(setLoading(true));
 axios
   .get(`http://localhost:5000/get-contribution/${id}`)
   .then((res) => {
     dispatch({
       type: GET_CONTRIBUTION,
       payload: res.data.data,
     });
   })
   .catch((err) =>{
     console.log(err);
     dispatch({
       type: GET_ERRORS,
       payload: err.response.message,
     })}
   );
   dispatch(setLoading(false));
};


export const uploadDoc = (data) => (dispatch) => {
dispatch(setLoading(true));
const config = {
  headers: {
      'content-type': 'multipart/form-data'
  }
}
 axios
   .post(`http://localhost:5000/upload`, data,config )
   .then((res) => {
     console.log(res.data);
     dispatch({
       type: GET_EXTRACTED,
       payload: res.data,
     });
   })
   .catch((err) =>{
     console.log(err);
     dispatch({
       type: GET_ERRORS,
       payload: err.response.message,
     }
     )
    }
   );
   dispatch(setLoading(false));
};


export const editDoc = (_id,data) => (dispatch) => {
  dispatch(setLoading(true));
 axios
   .put(`http://localhost:5000/update/${_id}`,data)
   .then((res) => {
     console.log(res.data);
    //  dispatch({
    //    type: GET_DOC,
    //    payload: res.data.data,
    //  });
   })
   .catch((err) =>{
     console.log(err);
     dispatch({
       type: GET_ERRORS,
       payload: err.response.message,
     })}
   );
   dispatch(setLoading(false));
};