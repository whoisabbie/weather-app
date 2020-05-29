import React from "react";
import { useSelector } from "react-redux";
import SingleWeather from "./SingleWeather";

const CompleteWeather = () => {
  const weatherData = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);

  const renderWeather = () => {
    if (loading) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    if (!loading && weatherData !== null) {
      return (
        <div className="text-center">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Day</th>
                <th scope="col">High / Low</th>
                <th scope="col">Weather</th>
              </tr>
            </thead>
            <tbody>
              {weatherData.list.map((data, index) => {
                if (index % 8 === 0)
                  return <SingleWeather data={data} key={data.dt} />;
                return null;
              })}
            </tbody>
          </table>
        </div>
      );
    }
  };

  return <div>{renderWeather()}</div>;
};

export default CompleteWeather;
