import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (props.activeCity) {
    return (
      <div className="active-city">
        <div className="active-city__details">
          <h3>{props.activeCity.name}</h3>
          <p>{props.activeCity.address}</p>
        </div>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`} alt={`${props.activeCity.name}`} />
      </div>
    );
  }
  return (
    <div className="active-city">
      <p>Select a city...</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity
  };
};

export default connect(mapStateToProps)(ActiveCity);
