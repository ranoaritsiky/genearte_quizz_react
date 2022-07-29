import * as React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { add_question } from "../../store/actions";

import Switch from "@mui/material/Switch";

import OptionGenerator from "./OptionGenerator";

const QuestionForm = (props) => {

  // ref to access in Optiongenerator component
  const [codeSection, showCodeBlock] = useState(false);

  // used to store all options after submit in OptionGenerator component
  const [options, addOption] = useState();


  // use dispatch
  const dispatch = useDispatch();

  
  // save question and update store
  const saveQuestion = React.useCallback((a,b) =>
    dispatch(
      add_question({
        question: a,
        codeQuestion: b,
        option:options
      })
    ),[options]);

  const enableCodeSection = () => {
    showCodeBlock(!codeSection);
  };

  const formik = useFormik({
    initialValues: {
      titleQuestion: "",
      codeQuestion: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (values.titleQuestion) {
        saveQuestion(values.titleQuestion,values.codeQuestion)
        resetForm({ values: "" });
      } else if (!values.titleQuestion ) {
        alert("must fill all ");
      } 
    },
  });

  return (
    <>
      <form
        style={{ maxWidth: "30%" }}
        className="m-3"
        onSubmit={formik.handleSubmit}
      >
        <label htmlFor="user">User form</label>
        <input
          type="text"
          name="titleQuestion"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.titleQuestion}
          style={{ marginBottom: "5px" }}
        />
        {/* switch to show code section */}
        <Switch
          onChange={enableCodeSection}
          inputProps={{ "aria-label": "controlled" }}
        />
        <span>Add Code</span>

        {/* show code if codeSection is true else show null */}
        {codeSection ? (
          <textarea
            name="codeQuestion"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.codeQuestion}
          />
        ) : null}
        <OptionGenerator addOption={addOption}  />
        <div>
          <button className="btn btn-primary mt-4" type="submit">
            Ajout
          </button>
        </div>
      </form>
    </>
  );
};

export default QuestionForm;
