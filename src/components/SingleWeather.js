import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SingleWeather = ({ data }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return (
    <Fragment>
      <tr>
        <td>
          <Link
            to={`/${days[new Date(data.dt * 1000).getDay()]}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            {days[new Date(data.dt * 1000).getDay()]}
          </Link>
        </td>
        <td>
          {(data.main.temp_max - 273.15).toFixed(2)} °C /{" "}
          {(data.main.temp_min - 273.15).toFixed(2)} °C
        </td>
        <td>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather"
          />
          <br />
          {data.weather[0].description}
        </td>
      </tr>
    </Fragment>
  );
};

export default SingleWeather;
