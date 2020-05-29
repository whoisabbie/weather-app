import { DATA_LOAD, DATA_SUCCESS, DATA_ERROR } from "../types";
import { API_KEY } from "../../config/keys";
import axios from "axios";

export const getWeatherByCityName = (location) => (dispatch) => {
  dispatch({ type: DATA_LOAD });
  axios
    .get("forecast", {
      params: {
        q: location,
        appid: API_KEY
      }
    })
    .then((res) => {
      dispatch({
        type: DATA_SUCCESS,
        payload: res.data
      });
    })
    .catch((err) => {
      console.error(err);
      dispatch({
        type: DATA_ERROR,
        payload: err
      });
    });
};
