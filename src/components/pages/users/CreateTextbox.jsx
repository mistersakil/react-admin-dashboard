import React from "react";
import { camelCase } from "../../../functions";
const CreateTextbox = (props) => {
  const { name, type } = props;
  return (
    <div className="formItem">
      <label className="formItemLabel" htmlFor={camelCase(name)}>
        {name}
      </label>
      {type === "text" && (
        <input
          className="formItemInput"
          type={type}
          id={camelCase(name)}
          name={camelCase(name)}
          placeholder={name}
        />
      )}
      {type === "password" && (
        <input
          className="formItemInput"
          type={type}
          id={camelCase(name)}
          name={camelCase(name)}
        />
      )}
      {type === "textarea" && (
        <textarea
          className="formItemInput"
          type={type}
          id={camelCase(name)}
          name={camelCase(name)}
          rows="2"
        ></textarea>
      )}
    </div>
  );
};

CreateTextbox.defaultProps = {
  type: "text",
};

export default CreateTextbox;
