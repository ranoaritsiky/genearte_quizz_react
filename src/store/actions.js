export const questionFormInitialState = [];

export const ADD_QUESTION = "add question";
export const DELETE_QUESTION = "delete question";

export const add_question = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};
