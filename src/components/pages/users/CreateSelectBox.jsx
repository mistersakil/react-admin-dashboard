import React from "react";
import { camelCase } from "../../../functions";
const CreateSelectBox = (props) => {
  const { name, values } = props;
  return (
    <div className="formItem">
      <label className="formItemLabel" htmlFor={camelCase(name)}>
        {name}
      </label>
      <select id={camelCase(name)} className="formItemInput">
        {values.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CreateSelectBox;
