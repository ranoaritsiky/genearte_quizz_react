import { useState } from "react";

import Switch from "@mui/material/Switch";

import AnswerGeneretor from "./OptionGenerator";
const QuestionForm = () => {
  const [addCode, setAddCode] = useState(false);

  const [options,setOption]=useState()
 

  const handleChange = () => {
    setAddCode(!addCode);
    console.log(options)
  };
  return (
    <div
      className="d-flex p-2"
      style={{ maxWidth: "30%", minWidth: "30%", border: "1px solid" }}
    >
      <form>
        <div className="form-group">
          <input type="text" placeholder="Question" />
        </div>
        <Switch
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <div className="form-group">
          <textarea placeholder="Code" />
        </div>
      </form>
      <AnswerGeneretor setOption={setOption}/>
      <hr />
    </div>
  );
};

export default QuestionForm;
