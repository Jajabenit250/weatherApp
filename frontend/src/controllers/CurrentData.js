import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const TodayStats = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "52.5vh",
}));

export default class CurrentData extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={3} style={{ paddingLeft: "15px" }}>
          <Grid item xs={8}>
            Search
          </Grid>
          <Grid item xs={4} style={{ paddingRight: "5px" }}>
            <TodayStats>xs=8</TodayStats>
          </Grid>
        </Grid>
      </div>
    );
  }
}
