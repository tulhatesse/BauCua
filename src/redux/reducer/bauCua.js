import { ADD_ITEM, REMOVE_ITEM, SET_RESULT } from "../constant/BauCua";

const initialState = {
  value: 500,
  selected: {
    cua: 0,
    bau: 0,
    nai: 0,
    tom: 0,
    ga: 0,
    ca: 0,
  },
  result: {
    result1: "",
    result2: "",
    result3: "",
  },
};

export const bauCuaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULT: {
      const newResult = { ...state.result };
      let newValue = state.value;
      newResult.result1 = action.payload.result1;
      newResult.result2 = action.payload.result2;
      newResult.result3 = action.payload.result3;
      if (state.selected[newResult.result1] !== 0) {
        newValue += state.selected[newResult.result1] * 2;
      }
      if (state.selected[newResult.result2] !== 0) {
        newValue += state.selected[newResult.result2] * 2;
      }
      if (state.selected[newResult.result3] !== 0) {
        newValue += state.selected[newResult.result3] * 2;
      }
      return {
        value: newValue,
        result: newResult,
        selected: { ...initialState.selected },
      };
    }
    case ADD_ITEM: {
      let newValue = state.value;
      const newSelected = { ...state.selected };
      if (newValue > 0) {
        newValue -= 100;
        newSelected[action.payload] += 100;
        return {
          ...state,
          value: newValue,
          selected: newSelected,
        };
      }
      return state;
    }
    case REMOVE_ITEM: {
      let newValue = state.value;
      const newSelected = { ...state.selected };
      if (newSelected[action.payload] > 0) {
        newValue += 100;
        newSelected[action.payload] -= 100;
        return {
          ...state,
          value: newValue,
          selected: newSelected,
        };
      }
      return state;
    }
    default:
      return state;
  }
};
