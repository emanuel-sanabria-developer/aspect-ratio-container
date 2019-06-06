import React from 'react';

import './AspectRatio.css';

export const getRatioPercentage = (x, y) => (y / x) * 100;

export const AspectRatio = ({
  children,
  className,
  x,
  y,
  style
}) => (
  <div className="AspectRatio" style={style}>
    <div
      style={{ paddingTop: `${getRatioPercentage(x, y)}%` }}
    />
    <div className="AspectRatio__content">{children}</div>
  </div>
);

export default AspectRatio;
