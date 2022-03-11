import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SearchBox from "./SearchBox";
import { connect } from "react-redux";
import Typography from "@mui/material/Typography";
import { WiStrongWind, WiHumidity } from "weather-icons-react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { weatherDataAction } from "../redux/actions";

const TodayStats = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "52.5vh",
}));

const TodayWidget = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginBottom: "10px",
  height: "12.5vh",
}));

const DataResult = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "35vh",
  marginTop: "15px",
  border: "0px solid #fff",
}));

const ComingDaysResult = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#F5F5F5",
  height: "32vh",
  marginTop: "3px",
  border: "0px solid white",
  borderRadius: "10px",
  backgroundColor: "skyblue",
}));
const today = new Date();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
class Current extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid container spacing={3} style={{ paddingLeft: "15px" }}>
          <Grid item xs={12} md={8}>
            Search
            <center>
              <SearchBox />{" "}
            </center>
            <center>
              <DataResult>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ marginBottom: "-20px", marginLeft: "-10px" }}
                >
                  {this.props.weatherData.name} , {" "}
                  {this.props.weatherData.sys.country}
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Paper
                      style={{
                        marginTop: "50px",
                        backgroundColor: "skyblue",
                        opacity: "70%",
                      }}
                      elevation={0}
                    >
                      <img
                        src={`http://openweathermap.org/img/w/${this.props.weatherData.weather[0].icon}.png`}
                        style={{ height: "175px", width: "120px" }}
                        alt="ico"
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{ marginLeft: "5px" }}
                    >
                      <p style={{ marginBottom: "-10px" }}>
                        {weekday[today.getDay()]},{" "}
                      </p>
                      <p style={{ marginTop: "2px", marginBottom: "-10px" }}>
                        {this.props.weatherData.weather[0].description}
                      </p>
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      variant="h2"
                      component="div"
                      style={{ marginTop: "45px" }}
                    >
                      {this.props.weatherData.main.temp}&deg;
                    </Typography>
                    <Typography
                      variant="h6"
                      component="div"
                      style={{ marginTop: "-15px" }}
                    >
                      feels like: {this.props.weatherData.main.feels_like}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="div"
                      style={{ marginTop: "5px" }}
                    >
                      Wind Speed : {this.props.weatherData.wind.speed}
                    </Typography>

                    <Typography variant="h6" component="div">
                      Humidity : {this.props.weatherData.main.humidity}
                    </Typography>
                  </Grid>
                </Grid>
              </DataResult>
            </center>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display={{ xs: "none", lg: "block" }}
            style={{ paddingRight: "5px" }}
          >
            <TodayStats elevation={0}>
              <Typography variant="h5" gutterBottom component="div">
              {weekday[today.getDay()]} Forecast
              </Typography>
              {this.props.forecastData.list.slice(0, 3).map((i) => {
                return (
                  <TodayWidget>
                    <Grid container>
                      <Grid item xs={4}>
                        <Paper
                          style={{
                            backgroundColor: "skyblue",
                            opacity: "70%",
                          }}
                          elevation={0}
                        >
                          <img
                            src={`http://openweathermap.org/img/w/${i.weather[0].icon}.png`}
                            style={{ height: "85px", width: "80px" }}
                            alt="ico"
                          />
                        </Paper>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography
                          variant="h4"
                          component="div"
                          style={{ marginTop: "10px" }}
                        >
                          {i.main.temp}&deg;
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="h7" component="div">
                          {i.dt_txt}
                        </Typography>
                        <Typography
                          variant="h7"
                          component="div"
                          style={{ marginTop: "5px" }}
                        >
                          <WiStrongWind
                            size={24}
                            color="skyblue"
                            style={{ paddingBottom: "-12px" }}
                          />{" "}
                          {i.wind.speed}
                        </Typography>
                        <Typography variant="h7" component="div">
                          <WiHumidity
                            size={24}
                            color="skyblue"
                            style={{ paddingBottom: "-12px" }}
                          />{" "}
                          {i.main.humidity}%
                        </Typography>
                      </Grid>
                    </Grid>
                  </TodayWidget>
                );
              })}
            </TodayStats>
          </Grid>
        </Grid>
        <br />
      </div>
    );
  }
}

class ComingDays extends Component {
  render() {
    return (
      <div
        style={{ marginTop: "-6vh", marginLeft: "15px", marginRight: "15px" }}
      >
        <Typography variant="h5" gutterBottom component="div">
          Next 4 Days / Hourly
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ComingDaysResult>
              <Typography
                variant="h6"
                component="div"
                style={{ marginBottom: "-20px", marginLeft: "-10px" }}
              >
                Wednesday
              </Typography>
              <img
                src={`http://openweathermap.org/img/w/09d.png`}
                style={{ height: "120px", width: "100px" }}
                alt="ico"
              />

              <Typography
                variant="h4"
                component="div"
                gutterBottom
                style={{ marginTop: "-20px" }}
              >
                18&deg;
              </Typography>

              <Grid container>
                <Grid item xs={6}>
                  <KeyboardArrowDownIcon />
                  <Typography variant="h6" component="div">
                    18&deg;
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <KeyboardArrowUpIcon />
                  <Typography variant="h6" component="div">
                    18&deg;
                  </Typography>
                </Grid>
              </Grid>
            </ComingDaysResult>
          </Grid>
          <Grid item xs={3}>
            <ComingDaysResult />
          </Grid>
          <Grid item xs={3}>
            <ComingDaysResult />
          </Grid>
          <Grid item xs={3}>
            <ComingDaysResult />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherApi.data ? state.weatherApi.data.currentData : "",
    forecastData: state.weatherApi.data
      ? state.weatherApi.data.forecastData
      : "",
  };
};

export const ComingDaysData = connect(mapStateToProps, { weatherDataAction })(
  ComingDays
);
export const CurrentData = connect(mapStateToProps, { weatherDataAction })(
  Current
);
