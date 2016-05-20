import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import SimpleComponent from './simple_component';

const mapStateToProps = (state) => {
  return {
    numberList: state.numberList,
    loading: state.loading,
    total: createSelector(
      state => state.numberList,
      numbers => numbers.reduce((acc, item) => {
        if (item.type === 'ADD') {
          return acc + item.number;
        } else {
          return acc - item.number;
        }
      }, 0)
    )(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddNumber: (number) => {
      dispatch({ type: 'NUMBER_ADD_BEGIN', payload: number });
    },
    onSubtractNumber: (number) => {
      dispatch({ type: 'NUMBER_SUBTRACT_BEGIN', payload: number });
    }
  };
}

const SimpleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleComponent);

export default SimpleContainer;
