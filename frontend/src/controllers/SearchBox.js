import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { connect } from "react-redux";
import { weatherDataAction } from "../redux/actions";

const places = [
  { label: "Kigali" },
  { label: "Iowa" },
  { label: "New York" },
  { label: "Ottawa" },
  { label: "Colorado" },
  { label: "Bujumbura" },
  { label: "Toronto" },
];

class SearchBox extends Component {
    constructor(props) {
        super(props);
    
        this.state = {};
        weatherDataAction();
      }
      componentDidMount() {
        console.log("-------");
        weatherDataAction();
      }
  render() {
    return (
      <div>
        <Autocomplete
          disablePortal
          id="places-box"
          options={places}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Places" />}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const SearchBoxPage = connect(mapStateToProps, {weatherDataAction})(SearchBox);

export default SearchBoxPage;
