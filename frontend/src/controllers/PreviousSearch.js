import React, { Component } from 'react'
import { useSelector, useDispatch, connect } from "react-redux";
export class PreviousSearch extends Component {
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

export default connect(mapStateToProps, {})(PreviousSearch);