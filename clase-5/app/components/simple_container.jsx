import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counter';
import SimpleComponent from './simple_component';

const mapStateToProps = (state) => {
  return {
    currentCounterValue: state.counter
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(increment());
    },
    onDecrement: () => {
      dispatch(decrement());
    }
  }
}

const SimpleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleComponent);

export default SimpleContainer;
