import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CurrentData, ComingDaysData } from "../controllers/CurrentData";

const Current = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "55vh",
}));

const ComingDays = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginTop: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "33vh",
}));

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          spacing={2}
          style={{ paddingTop: "10px", paddingLeft: "15px" }}
        >
          <Grid item xs={12} md={12} lg={12}>
            <Current elevation={0}>
              {" "}
              <CurrentData />{" "}
            </Current>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <ComingDays elevation={0}>
              {" "}
              <ComingDaysData />{" "}
            </ComingDays>
          </Grid>
        </Grid>
      </div>
    );
  }
}
