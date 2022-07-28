import * as React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { add_question } from "../../store/actions";

import Switch from "@mui/material/Switch";

import AnswerGeneretor from "./OptionGenerator";
const QuestionForm = () => {
  
  const [question, setQuestion] = useState("");

  const [code, setCode] = useState("");

  // used to show code textarea
  const [addCode, setAddCode] = useState(false);
  
  // used to store all options after submit in OptionGenerator component
  const [options, setOption] = useState();
  
  const dispatch = useDispatch();
  
  const enableCodeSection = () => {
    setAddCode(!addCode);
  };

  const saveQuestion = React.useCallback(
    () =>
    
      dispatch(
        add_question({
          question:question,
          code: code,
          option:options
        })
      ),  
    [dispatch,question,code,options]
  );

  return (
    <div
      className="d-flex p-2"
      style={{ maxWidth: "30%", minWidth: "30%", border: "1px solid" }}
    >
      <form>
        <div className="form-group">
          <input
            type="text"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Question"
          />
        </div>
        <hr />
        <u>
          <span>Add Code</span>
        </u>
        <Switch
          onChange={enableCodeSection}
          inputProps={{ "aria-label": "controlled" }}
        />
        {addCode ? (
          <div className="form-group">
            <textarea
              value={code}
              onChange={(event) => setCode(event.target.value)}
              placeholder="Code"
            />
          </div>
        ) : null}
      </form>
      <u>
        <span>Options</span>
      </u>

      <AnswerGeneretor setOption={setOption} />
      <hr />
      <button onClick={saveQuestion}>Submit</button>
    </div>
  );
};

export default QuestionForm;
