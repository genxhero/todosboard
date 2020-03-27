import React, {useState}from "react";
import Column from "./Column";

const INITIAL_CARDS = {
    0: ["aaa", "bbb"], 
    1: ["ccc", "ddd"], 
    2: ["eee", "fff"], 
    3: ["ggg", "hhh"]
}

/**
 * 
 * This is the TodosBoard which displays a task list on cards in four columns.
 * TODO: Make this more dynamic by passing a users const as a prop that will have a name and a color.
 * user = {name: String, color: String}
 * It's an array of objects.
 * 
 * @param {*} props 
 */

const TodosBoard = props => {

    /**
     * Moves a card to the column on its left.
     * 
     * @param {*} e 
     */
    const moveCardLeft = e => {
        let from = parseInt(e.currentTarget.getAttribute("name"));
        let to = from - 1;
        const newCards = Object.assign({}, cards);
        const task = e.currentTarget.getAttribute("value");
        newCards[to].push(task);
        newCards[from].splice(newCards[from].indexOf(task), 1)
        console.log("New Cards To", newCards[to])
        console.log("New Cards From", newCards[from])
        changeCards(newCards);
    };

        /**
     * Moves a card to the column on its right.
     * 
     * @param {*} e 
     */
    const moveCardRight = e => {
        let from = parseInt(e.currentTarget.getAttribute("name"));
        let to = from + 1
        const newCards = Object.assign({}, cards);
        const task = e.currentTarget.getAttribute("value");
        newCards[to].push(task);
        newCards[from].splice(newCards[from].indexOf(task), 1);
          console.log("New Cards To", newCards[to]);
          console.log("New Cards From", newCards[from]);
        changeCards(newCards);
    };

    /**
     * Creates a new card by adding a new task to the corresponding column.
     * 
     * @param {*} e 
     */
        const newCard = (e) => {
          const newTask = window.prompt("Please Describe New Task");
          const columnId = e.currentTarget.getAttribute("name");
          const newCards = Object.assign({}, cards)
          newCards[columnId].push(newTask)
          changeCards(newCards)
        };

    const [cards, changeCards] = useState(INITIAL_CARDS)
/**
 * Use users.map() to create columns.
 * Initial cards will have to go 
 */
    return (
      <div className="board">
        <Column
          columnId={0}
          cards={cards[0]}
          employeeName={"Winnie"}
          color="purple"
          moveCardLeft={moveCardLeft}
          moveCardRight={moveCardRight}
          newCard={newCard}
        />
        <Column
          columnId={1}
          cards={cards[1]}
          employeeName={"Bob"}
          color="teal"
          moveCardLeft={moveCardLeft}
          moveCardRight={moveCardRight}
          newCard={newCard}
        />
        <Column
          columnId={2}
          cards={cards[2]}
          employeeName={"Thomas"}
          color="blue"
          moveCardLeft={moveCardLeft}
          moveCardRight={moveCardRight}
          newCard={newCard}
        />
        <Column
          columnId={3}
          cards={cards[3]}
          employeeName={"George"}
          color="orange"
          moveCardLeft={moveCardLeft}
          moveCardRight={moveCardRight}
          newCard={newCard}
        />
      </div>
    );
};

export default TodosBoard;
