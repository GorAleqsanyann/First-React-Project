import { DECREMENT, INCREMENT, INPUT_TEXT } from "./types";

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text,
  };
}

export function incrementLikes() {
  return {
    type: INCREMENT,
  };
}

export function decrementLikes() {
  return {
    type: DECREMENT,
  };
}
