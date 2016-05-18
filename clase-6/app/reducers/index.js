const initialState = {
  numberList: []
};

export default function counterApp(state = initialState, action) {
  const { type, payload } = action;
  if (type === 'ADD') {
    const numberList = state.numberList.concat(payload)
    return {
      ...state,
      numberList
    };
  }

  return state;
}
