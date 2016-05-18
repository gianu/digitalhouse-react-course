import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { addNumber } from '../actions';
import SimpleComponent from './simple_component';

const mapStateToProps = (state) => {
  return {
    numberList: state.numberList,
    total: createSelector(
      state => state.numberList,
      numbers => numbers.reduce((acc, item) => acc + item, 0)
    )(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddNumber: (number) => {
      dispatch(addNumber(number));
    }
  };
}

const SimpleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleComponent);

export default SimpleContainer;
