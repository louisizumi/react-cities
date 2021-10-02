import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import setCities from '../actions/set_cities';

import City from './city';

class CityList extends React.Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities">
        {
          this.props.cities.map((city) => {
            return <City city={city} key={city.slug} />;
          })
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setCities },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
