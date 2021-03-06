import React from "react";

/**
 * 
 * This component's job is to display a task to be done sooner than later.
 * 
 * @param {*} props 
 */

const Card = props => {
    const { task, columnId, moveCardLeft, moveCardRight } = props;
    return (
      <div className="card">
        <div
          id="left-shift-arrow"
          className="card-shift-arrow"
          name={columnId}
          value={task}
          onClick={moveCardLeft}
        >
          {columnId > 0 && <span> {"<"}</span>}
        </div>

        {task}

        <div
          id="right-shift-arrow"
          className="card-shift-arrow"
          name={columnId}
          value={task}
          onClick={moveCardRight}
        >
          {columnId < 3 && <span> {">"}</span>}
        </div>
      </div>
    );
};

export default Card;
