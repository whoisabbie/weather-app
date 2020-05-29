import { DATA_LOAD, DATA_ERROR, DATA_SUCCESS } from "../types";

const initialState = {
  data: null,
  errors: null,
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DATA_LOAD:
      return {
        ...state,
        loading: true
      };
    case DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        data: action.payload
      };
    case DATA_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        errors: action.payload.response.data
      };
    default:
      return state;
  }
}
