import React from "react";
import "./Form.css";

const Form = ({ fields, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="custom-form">
      {fields.map((field, index) => (
        <div key={index} className="form-group">
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            required={field.required}
          />
        </div>
      ))}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
