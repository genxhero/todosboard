import Card from './Card'
import React from 'react';

const Column = props => {
    const { cards, columnId, employeeName, color, moveCardLeft, moveCardRight } = props;
    

    const newCard = () => {
        const newTask = window.prompt("Please Describe New Task");
        // addCard([
        //     ...cards,
        //     <Card
        //         task={newTask}
        //         columnId={columnId}
        //         moveCardLeft={moveCardLeft}
        //         moveCardRight={moveCardRight}
        //     />
        // ]);
    };

    return (
        <div className="column">
            <div className={`column-topper ${color}`}>
                <span>{employeeName}</span>
            </div>
            {cards.map(card => {
                {
                    return (
                      <Card
                        task={card}
                        columnId={columnId}
                        moveCardLeft={moveCardLeft}
                        moveCardRight={moveCardRight}
                      />
                    );
                }
            })}
            <div onClick={newCard}>Click to Add New Card</div>
        </div>
    );
};

export default Column;
