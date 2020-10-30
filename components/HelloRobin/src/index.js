import React from 'react';

export default function HelloRobin(props) {
  const { type, ...others } = props;

  return (
    <div className="HelloRobin" {...others}>Hello HelloRobin</div>
  );
}

HelloRobin.propTypes = {
};

HelloRobin.defaultProps = {
};
