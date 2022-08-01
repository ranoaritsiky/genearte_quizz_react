import { useState } from "react";

import Switch from "@mui/material/Switch";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@material-ui/icons/Add";

function OptionGenerator(props) {
  const [formFields, setFormFields] = useState([{ name: "" }, { name: "" }]);

  const [multiAnswer, setMultiAnswer] = useState(false);

  const enableMultipleAnswer = () => {
    setMultiAnswer(!multiAnswer);
  };
  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
    props.addOption(formFields)
    props.setTypeOption(multiAnswer)
  };

  

  const addOption = (e) => {
    let object = {
      name: "",
    };

    setFormFields([...formFields, object]);

    e.preventDefault();
  };

  

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <>
      <div
        style={{ margin: "10px" }}
        className="d-flex justify-content-between"
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton aria-label="add" size="small" onClick={addOption}>
            <AddIcon fontSize="inherit" /> <span>Add Option</span>
          </IconButton>
        </Stack>
        <Switch
          onChange={enableMultipleAnswer}
          inputProps={{ "aria-label": "controlled" }}
        />
        <span>Multiple answer</span>
      </div>
      {formFields.map((form, index) => {
        return (
          <div key={index}>
            <input
            id="option"
              className="form-control"
              name="name"
              placeholder="Option"
              onChange={(event) => handleFormChange(event, index)}
              value={form.name}
              required
            />

            <button
              className="btn btn-danger"
              style={{ margin: "10px" }}
              onClick={() => removeFields(index)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
}

export default OptionGenerator;
