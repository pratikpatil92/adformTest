import React, { memo } from "react";

function Card(props) {
  return (
    <div className="card p-5 main-card">
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default memo(Card)
