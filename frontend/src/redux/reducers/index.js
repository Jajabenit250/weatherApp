import { combineReducers } from "redux";
import weatherApi from "./weatherApi";
import weatherLogs from "./weatherLogs"

export default combineReducers({
    weatherApi,
    weatherLogs
});
