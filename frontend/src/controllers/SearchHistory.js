import React, { Component } from 'react'
import { connect } from "react-redux";

export class SearchHistory extends Component {
  render() {
    return (
      <div>previousSearch</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, {})(SearchHistory);