import React from "react";

const Title = props => {
  console.log(props, "PROPSSSSS");
  const { text, defaultText, isDefault } = props;
  return (
    <div className="title-wrapper">
      <p className="title">{isDefault ? defaultText : text}</p>
    </div>
  );
};

export default Title;
