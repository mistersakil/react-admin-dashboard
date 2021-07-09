import React from "react";

const CreateRadioBox = () => {
  return (
    <div className="formItem">
      <label className="formItemLabel">Gender</label>
      <article className="formItemRadio">
        <label className="item" htmlFor={`male`}>
          <input type="radio" name="gender" id="male" />
          {`male`}
        </label>
        <label className="item" htmlFor={`female`}>
          <input type="radio" name="gender" id="female" />
          {`female`}
        </label>
        <label className="item" htmlFor={`other`}>
          <input type="radio" name="gender" id="other" />
          {`Other`}
        </label>
      </article>
    </div>
  );
};

export default CreateRadioBox;
