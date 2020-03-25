import React, {useState}from "react";
import Column from "./Column";

const INITIAL_CARDS = {
    0: ["aaa", "bbb"], 
    1: ["ccc", "ddd"], 
    2: ["eee", "fff"], 
    3: ["ggg", "hhh"]
}

const TodosBoard = props => {
    const moveCardLeft = e => {
        let to = parseInt(e.target.getAttribute("name"));
        debugger;
    };

    const moveCardRight = e => {
        let to = parseInt(e.target.getAttribute("name"));
        debugger;
    };

    const [cards, shiftCards] = useState(INITIAL_CARDS)

    return (
        <div className="board">
            <Column columnId={0} cards={cards[0]} employeeName={"Winnie"} color="purple" moveCardLeft={moveCardLeft} moveCardRight={moveCardRight}/>
            <Column columnId={1} cards={cards[1]} employeeName={"Bob"} color="teal" moveCardLeft={moveCardLeft} moveCardRight={moveCardRight}/>
            <Column columnId={2} cards={cards[2]} employeeName={"Thomas"} color="blue" moveCardLeft={moveCardLeft} moveCardRight={moveCardRight}/>
            <Column columnId={3} cards={cards[3]} employeeName={"George"} color="orange" moveCardLeft={moveCardLeft} moveCardRight={moveCardRight} />
        </div>
    );
};

export default TodosBoard;
