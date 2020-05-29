import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect, Link, useParams } from "react-router-dom";

const DailyWeather = () => {
  const data = useSelector((state) => state.data.data);
  const { day } = useParams();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const isDataAvailable = () => {
    if (data === null) {
      return <Redirect to="/" />;
    } else {
      return (
        <Fragment>
          <Link to="/">
            <button
              className="btn btn-dark btn-sm mt-2 mb-2"
              style={{ margin: "2px auto" }}
            >
              {`<`} Go Back to Previous Results
            </button>
          </Link>
          <table className="table table-hover text-center">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Time</th>
                <th scope="col">High / Low</th>
                <th scope="col">Weather</th>
              </tr>
            </thead>
            <tbody>
              {data.list.map((weather) => {
                if (
                  days[new Date(weather.dt * 1000).getDay()].toLowerCase() ===
                  day.toLowerCase()
                ) {
                  return (
                    <tr key={weather.dt}>
                      <td>{`${new Date(
                        weather.dt * 1000
                      ).getHours()}: ${new Date(
                        weather.dt * 1000
                      ).getMinutes()}`}</td>
                      <td>
                        {(weather.main.temp_max - 273.15).toFixed(2)} °C /{" "}
                        {(weather.main.temp_min - 273.15).toFixed(2)} °C
                      </td>
                      <td>
                        <img
                          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                          alt="weather"
                        />
                        <br />
                        {weather.weather[0].description}
                      </td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
        </Fragment>
      );
    }
  };

  return <Fragment>{isDataAvailable()}</Fragment>;
};

export default DailyWeather;
