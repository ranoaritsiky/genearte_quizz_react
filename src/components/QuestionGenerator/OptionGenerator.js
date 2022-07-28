import { useState } from "react";

function AnswerGeneretor(props) {
  const [formFields, setFormFields] = useState([{ name: "" }, { name: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const addField = () => {
    let object = {
      name: "",
    };

    setFormFields([...formFields, object]);
  };

  const submit = (e) => {

    e.preventDefault();
    props.setOption(formFields)

    setFormFields([{ name: "" }, { name: "" }]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div>
      <div style={{ margin: "10px" }}>
        <button className="btn btn-default" onClick={addField}>
          Add option
        </button>
        <button className="btn btn-default" style={{margin:'5px'}} onClick={submit}>
          Fin Option
        </button>
      </div>
      <form onSubmit={submit}>
      
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="Option"
                onChange={(event) => handleFormChange(event, index)}
                value={form.name}
              />

              <button
                className="btn btn-default"
                style={{ margin: "10px" }}
                onClick={() => removeFields(index)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </form>
      
    </div>
  );
}

export default AnswerGeneretor;
