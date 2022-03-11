import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { connect } from "react-redux";
import { weatherDataAction } from "../redux/actions";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function SearchBox(props) {
  const [cityData, setCityData] = React.useState("");
  
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
      <Grid container>
        <Grid item md={8}>
          {" "}
          <TextField
              sx={{ width: 300 }}
                label="Places"
                onChange={(e) => setCityData(e.target.value)}
              />
        </Grid>
        <Grid item md={4}>
          <Button
            variant="contained"
            onClick={() => props.weatherDataAction({ city: cityData })}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    weatherDataAction: (data) => dispatch(weatherDataAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
