import {
  DECREMENT,
  INCREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_DELETE,
} from "./types";

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

export function createComment(text, id) {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
}
export function deleteComment(id) {
  return {
    type: COMMENT_DELETE,
    id,
  };
}
