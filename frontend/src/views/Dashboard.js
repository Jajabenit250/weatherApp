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

const PreviousSearch = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "92vh",
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
          <Grid item xs={12} md={8} lg={8}>
            <Current>
              {" "}
              <CurrentData />{" "}
            </Current>
            <ComingDays> <ComingDaysData /> </ComingDays>
          </Grid>
          <Grid item xs={12} style={{ paddingRight: "15px" }} md={4} lg={4}>
            <PreviousSearch>xs=4</PreviousSearch>
          </Grid>
        </Grid>
      </div>
    );
  }
}
