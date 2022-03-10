import store from "store";
import { v4 as uuidv4 } from 'uuid';

const sessionKey = uuidv4();
store.get("session") == null
  ? store.set("session", sessionKey.toString())
  : store.get("session");
const savedSession = store.get("session");
const dataKey = "48bb04903e728a76992fe87d39cdd706";



export const weatherDataAction = (city) => async (dispatch) => {
  try {
    const weatherResp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Kigali&appid=${dataKey}&units=metric`
    );
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Kigali&appid=${dataKey}&exclude=minutely&units=metric`
    );

    const currentData = await weatherResp.json();
    const forecastData = await forecastRes.json();

    const formData  = new FormData();

    formData.append("sessionDetails", savedSession);
    formData.append("sessionLat", currentData.coord.lat.toString());
    formData.append("sessionLong", currentData.coord.lon.toString());
    formData.append("city", "Kigali");
    formData.append("country", currentData.sys.country);

    const logsData = {
      sessionDetails: savedSession,
      sessionLat: currentData.coord.lat.toString(),
      sessionLong: currentData.coord.lon.toString(),
      city: "Kigali",
      country: currentData.sys.country,
    };
    await weatherLogs(logsData);
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
    console.log(data);
    const weatherResp = await fetch(`https://weatherback.herokuapp.com/api/weatherLogs/`, {
      mode: 'no-cors',
      method: "post",
      body: data,
    });
    console.log(weatherResp)
    // dispatch({ type: "SAVED_DATA", payload: { weatherResp } });
  } catch (error) {
    console.log(error);
    // dispatch({
    //   type: "ERROR_STATUS",
    //   payload: {
    //     status: "error",
    //     message: "Failed to retrieve weather data",
    //   },
    // });
  }
};
