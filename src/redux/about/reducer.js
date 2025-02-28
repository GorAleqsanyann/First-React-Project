import {
  DECREMENT,
  INCREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_DELETE,
} from "./types";

const initialState = {
  text: "",
  likes: 0,
  commentText: [],
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

    case COMMENT_CREATE:
      return {
        ...state,
        commentText: [...state.commentText, action.data],
      };
    case COMMENT_DELETE:
      return (() => {
        const { id } = action;
        const { commentText } = state;
        const itemIndex = commentText.findIndex((res) => res.id == id);
        return {
          ...state,
          commentText: [
            ...commentText.slice(0, itemIndex),
            ...commentText.slice(itemIndex + 1),
          ],
        };
      })();

    default:
      return state;
  }
};

//nayel metod,math,useState
//trello grancvel
