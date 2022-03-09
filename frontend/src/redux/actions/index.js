import store from "store";

let savedSession = store.get("sessionDetails");
savedSession == null
  ? store.set("sessionDetails", "UUID")
  : store.get("sessionDetails");

export const weatherDataAction = (payload) => async (dispatch) => {
  try {
    let weatherResp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${payload.latitude}&lon=${payload.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );

    let forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${payload.latitude}&lon=${payload.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&exclude=minutely&units=metric`
    );

    dispatch({ type: "WEATHER_DATA", payload: [weatherResp, forecastRes] });
  } catch (error) {
    dispatch({
      type: "WE_ERROR_STATUS",
      payload: {
        status: "error",
        message: "Failed to retrieve weather data",
      },
    });
  }
};
