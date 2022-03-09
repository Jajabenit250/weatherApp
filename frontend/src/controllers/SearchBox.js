import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector, useDispatch, connect } from "react-redux";

const places = [
  { label: "Kigali" },
  { label: "Iowa" },
  { label: "New York" },
  { label: "Ottawa" },
  { label: "Colorado" },
  { label: "Bujumbura" },
  { label: "Toronto" },
];

export class SearchBox extends Component {
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

export default connect(mapStateToProps, {})(SearchBox);
