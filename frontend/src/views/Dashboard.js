import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CurrentData } from "../controllers/CurrentData";
import { connect } from "react-redux";
import { weatherDataAction } from "../redux/actions";

const Current = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "55vh",
}));


function Dashboard(props) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      props.weatherDataAction({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [0]);
  return (
    <div>
      <Grid
        container
        spacing={2}
        style={{ paddingTop: "100px", paddingLeft: "15px" }}
      >
        <Grid item xs={12} md={12} lg={12}>
          {props.weatherData ? (
            <Current elevation={0}>
              {" "}
              <CurrentData />{" "}
            </Current>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherApi.data
      ? state.weatherApi.data.currentData
      : null,
    forecastData: state.weatherApi.data
      ? state.weatherApi.data.forecastData
      : null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    weatherDataAction: (data) => dispatch(weatherDataAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
