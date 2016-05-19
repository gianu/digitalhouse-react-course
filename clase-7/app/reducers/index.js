const initialState = {
  numberList: [],
  loading: false
};

export default function counterApp(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case 'NUMBER_ADD_BEGIN':
    case 'NUMBER_SUBTRACT_BEGIN':
      return {
        ...state,
        loading: true
      };
    case 'NUMBER_ADD_SUCCESS':
      return {
        ...state,
        numberList: state.numberList.concat({ number: payload, type: 'ADD' }),
        loading: false
      };
    case 'NUMBER_SUBTRACT_SUCCESS':
      return {
        ...state,
        numberList: state.numberList.concat({ number: payload, type: 'SUB' }),
        loading: false
      }
  }

  return state;
}
