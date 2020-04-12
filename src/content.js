import React from 'react';

const Content = (props) => {
  const { logo } = props;
  return (
    <div>
      <img src={logo} width={"200px"} />
    </div>
  );
}

export default Content;