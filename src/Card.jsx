import React from "react";

const Card = props => {
    const { task, columnId, moveCardLeft, moveCardRight } = props;
    return (
        <div className="card">
            <div id="left-shift-arrow" onClick={moveCardLeft}>
                {columnId > 0 && <span> {"<"}</span>}
            </div>

            {task}

            <div id="right-shift-arrow" onClick={moveCardRight}>
                {columnId < 3 && <span> {">"}</span>}
            </div>
        </div>
    );
};

export default Card;
