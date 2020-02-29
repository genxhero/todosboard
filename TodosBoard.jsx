import React from "react";
import Column from "./Column";

const TodosBoard = props => {
    const moveCardLeft = e => {

    };

    const moveCardRight = e => {

    };
    return (
        <div className="board">
            <Column columnId={0} employeeName={"Winnie"} color="purple" moveCardLeft={moveCardLeft} moveCardRight={moveCardRight}/>
            <Column columnId={1} employeeName={"Bob"} color="teal" moveCardLeft={moveCardLeft} moveCardRight={moveCardRight}/>
            <Column columnId={2} employeeName={"Thomas"} color="blue" moveCardLeft={moveCardLeft} moveCardRight={moveCardRight}/>
            <Column columnId={3} employeeName={"George"} color="orange" moveCardLeft={moveCardLeft} moveCardRight={moveCardRight} />
        </div>
    );
};

export default TodosBoard;
