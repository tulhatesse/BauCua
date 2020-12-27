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
  result: [],
};

export const bauCuaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULT: {
      console.log(action.payload);
      const newResult = action.payload;
      const newObj = {};
      let income = 0;
      let newValue = state.value;
      newResult.forEach((item) => {
        if (newObj[item]) {
          newObj[item]++;
        } else newObj[item] = 2;
      });
      const keys = Object.keys(newObj);
      keys.forEach((key) => {
        income += newObj[key] * state.selected[key];
      });
      newValue += income;
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
