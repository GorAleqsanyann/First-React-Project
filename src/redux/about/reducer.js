import { DECREMENT, INCREMENT, INPUT_TEXT } from "./types";

const initialState = {
  text: "",
  likes: 0,
};

export const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        text: action.text,
      };

    case INCREMENT:
      return {
        ...state,
        likes: state.likes + 1,
      };
    case DECREMENT:
      return {
        ...state,
        likes: state.likes - 1,
      };

    default:
      return state;
  }
};
