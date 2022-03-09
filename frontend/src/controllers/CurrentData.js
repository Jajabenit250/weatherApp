import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SearchBox from "./SearchBox";
import { useSelector, useDispatch, connect } from "react-redux";

const TodayStats = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "52.5vh",
}));

const DataResult = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "39vh",
  marginTop: "15px",
  border: "0px solid #fff"
}));

const ComingDaysResult = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "29vh",
  marginTop: "8px",
  border: "0px solid #fff"
}));

export class CurrentData extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }
  render() {
    return (
      <div>
        <Grid container spacing={3} style={{ paddingLeft: "15px" }}>
          <Grid item xs={8}>
            Search
            <center>
              <SearchBox />{" "}
            </center>

            <center>
             <DataResult />
            </center>
          </Grid>
          <Grid item xs={4} style={{ paddingRight: "5px" }}>
            <TodayStats>xs=8</TodayStats>
          </Grid>
        </Grid>
      </div>
    );
  }
}


export class ComingDaysData extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={4}>
           < ComingDaysResult />
          </Grid>
          <Grid item xs={4}>
           < ComingDaysResult />
          </Grid>
          <Grid item xs={4}>
           < ComingDaysResult />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, {})(ComingDaysData);
