import React from 'react';
import { connect } from 'react-redux';

const Test = ({ itemCount }) => {
  console.log('Test render');
  return <span>{itemCount.count}</span>;
};

const mapStateToProps = state => {
  console.log('Test I am being called');
  return {
    itemCount: {
      count: 5
    }
  };
};

export default connect(mapStateToProps)(Test);
