import { INPUT_TEXT } from "./types";

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text,
  };
}
