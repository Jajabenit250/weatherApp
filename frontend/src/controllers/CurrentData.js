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

class Current extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    
  }
  componentDidMount() {
     this.props.weatherDataAction();
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
                  Kigali, Rwanda
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
                        src={`http://openweathermap.org/img/w/09d.png`}
                        style={{ height: "175px", width: "120px" }}
                        alt= 'ico'
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
                      <p style={{ marginBottom: "-10px" }}>Tuesday,</p>
                      <p style={{ marginTop: "1px", marginBottom: "-10px" }}>
                        Time,
                      </p>
                      <p style={{ marginTop: "2px", marginBottom: "-10px" }}>
                        Rain
                      </p>
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      variant="h1"
                      component="div"
                      style={{ marginTop: "45px" }}
                    >
                      18&deg;
                    </Typography>
                    <Typography
                      variant="h6"
                      component="div"
                      style={{ marginTop: "5px" }}
                    >
                      Winds :
                    </Typography>

                    <Typography variant="h6" component="div">
                      Humility :
                    </Typography>
                  </Grid>
                </Grid>
              </DataResult>
            </center>
          </Grid>
          <Grid item xs={12} md={4} display={{ xs: "none", lg: "block" }} style={{ paddingRight: "5px" }}>
            <TodayStats elevation={0}>
              <Typography variant="h5" gutterBottom component="div">
                Tuesday Forecast
              </Typography>
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
                        src={`http://openweathermap.org/img/w/09d.png`}
                        style={{ height: "85px", width: "80px" }}
                        alt= 'ico'
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      variant="h4"
                      component="div"
                      style={{ marginTop: "10px" }}
                    >
                      18&deg;
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6" component="div">
                      1:00 AM
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
                      29 mph
                    </Typography>
                    <Typography variant="h7" component="div">
                      <WiHumidity
                        size={24}
                        color="skyblue"
                        style={{ paddingBottom: "-12px" }}
                      />{" "}
                      51%
                    </Typography>
                  </Grid>
                </Grid>
              </TodayWidget>
              <TodayWidget />
              <TodayWidget />
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
                alt= 'ico'
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
                  <Typography
                    variant="h6"
                    component="div"
                  >
                    18&deg;
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <KeyboardArrowUpIcon />
                  <Typography
                    variant="h6"
                    component="div"
                  >
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
    console.log(state);
  return {};
};

export const ComingDaysData = connect(mapStateToProps, {weatherDataAction})(ComingDays);
export const CurrentData = connect(mapStateToProps, {weatherDataAction})(Current);

