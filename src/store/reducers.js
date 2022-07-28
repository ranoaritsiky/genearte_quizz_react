import * as actions from "./actions";

export const questions = (state = actions.questionFormInitialState, action) => {
  // TODO change this to switch case if many action
  if (action.type === actions.ADD_QUESTION) {
    return [...state, action.question];
  } else {
    return state;
  }
};
