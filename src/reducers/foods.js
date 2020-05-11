import { GET_FOODS } from "../actions/foods";

export default function(state = [], action) {
  switch (action.type) {
    case GET_FOODS:
      return [
        ...state,
        ...action.foods
      ];
    default:
      return state;
  }
}
