import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherByCityName } from "../redux/actions/dataActions";

const Form = () => {
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState("");

  const dispatch = useDispatch();
  const noCityAvailable = useSelector((state) => state.data.errors);

  const onSubmit = (event) => {
    event.preventDefault();
    if (city.trim() === "") {
      setErrors("Field must not be empty");
      return;
    } else {
      setCity("");
      setErrors("");
      dispatch(getWeatherByCityName(city));
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className={`form-control ${errors !== "" && "is-invalid"} ${
              noCityAvailable !== null && "is-invalid"
            }`}
            placeholder="Enter your city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-dark"
              type="submit"
              id="button-addon2"
            >
              Search
            </button>
          </div>
          {errors === "" ? null : (
            <div className="invalid-feedback">{errors}</div>
          )}
          {noCityAvailable !== null && noCityAvailable.message !== "" && (
            <div className="invalid-feedback">{noCityAvailable.message}</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
