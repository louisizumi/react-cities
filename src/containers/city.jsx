import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import setActiveCity from '../actions/set_active_city';

const City = (props) => {
  return (
    <div className="list-group-item" onClick={() => {props.setActiveCity(props.city)}}>
      <h3>{props.city.name}</h3>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setActiveCity },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(City);
