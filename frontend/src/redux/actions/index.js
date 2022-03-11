import store from "store";
import { v4 as uuidv4 } from "uuid";

const sessionKey = uuidv4();
store.get("session") == null
  ? store.set("session", sessionKey.toString())
  : store.get("session");
const savedSession = store.get("session").split("-").join("");
const dataKey = "48bb04903e728a76992fe87d39cdd706";

export const weatherDataAction = (data) => async (dispatch) => {
  try {
    console.log(data);
    const weatherResp = await fetch(
      data.city
        ? `https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${dataKey}&units=metric`
        : `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${dataKey}&units=metric`
    );
    const forecastRes = await fetch(
      data.city
        ? `https://api.openweathermap.org/data/2.5/forecast?q=${data.city}&appid=${dataKey}&exclude=minutely&exclude=hourly&units=metric`
        : `https://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&appid=${dataKey}&exclude=minutely&exclude=hourly&units=metric`
    );

    const currentData = await weatherResp.json();
    const forecastData = await forecastRes.json();
    console.log(forecastData);
    const formData = new FormData();

    formData.append("sessionDetails", savedSession);
    formData.append("sessionLat", currentData.coord.lat.toString());
    formData.append("sessionLong", currentData.coord.lon.toString());
    formData.append("city", "Kigali");
    formData.append("country", currentData.sys.country);

    await weatherLogs(formData);
    dispatch({ type: "WEATHER_DATA", payload: { currentData, forecastData } });
  } catch (error) {
    dispatch({
      type: "ERROR_STATUS",
      payload: {
        status: "error",
        message: "Failed to retrieve weather data",
      },
    });
  }
};

const weatherLogs = async (data) => {
  try {
    const weatherResp = await fetch(
      `https://weatherback.herokuapp.com/api/weatherLogs/`,
      {
        mode: "no-cors",
        method: "post",
        body: data,
      }
    );
    return weatherResp;
  } catch (error) {
    return error;
  }
};
