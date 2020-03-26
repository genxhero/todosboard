import Card from './Card'
import React from 'react';

const Column = props => {
    const { cards, columnId, employeeName, color, moveCardLeft, moveCardRight, newCard} = props;
    
    return (
        <div className="column">
            <div className={`column-topper ${color}`}>
                <span>{employeeName}</span>
            </div>
            {cards.map(card => {
                {
                    return (
                      <Card
                        key={card}
                        task={card}
                        columnId={columnId}
                        moveCardLeft={moveCardLeft}
                        moveCardRight={moveCardRight}
                      />
                    );
                }
            })}
            <div onClick={newCard} name={columnId}>Click to Add New Card</div>
        </div>
    );
};

export default Column;
