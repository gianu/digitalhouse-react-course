import { addValueToService } from '../service';
// This is a Thunk!
export function addNumber(num) {
  return function(dispatch) {
    dispatch({
      type: 'NUMBER_ADD_BEGIN'
    });
    return addValueToService(num).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: 'NUMBER_ADD_SUCCESS',
          payload: +num
        });
      }
    });
  }
}

export function subtractNumber(num) {
  return function(dispatch) {
    dispatch({
      type: 'NUMBER_SUBTRACT_BEGIN'
    });
    return addValueToService(num).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: 'NUMBER_SUBTRACT_SUCCESS',
          payload: +num
        })
      }
    })
  }
}
