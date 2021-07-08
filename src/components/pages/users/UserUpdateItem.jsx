import React from "react";

const UserUpdateItem = (props) => {
  const { label, value, type } = props;
  return (
    <div className="userUpdateItem">
      <label className="userUpdateLabel" htmlFor={label}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="userUpdateInput"
          rows="7"
          placeholder={value}
          id={type}
        ></textarea>
      ) : (
        <input
          className="userUpdateInput"
          placeholder={value}
          type={type}
          id={type}
        />
      )}
    </div>
  );
};
UserUpdateItem.defaultProps = {
  type: "text",
};

export default UserUpdateItem;
