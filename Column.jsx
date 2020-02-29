const Column = props => {
    const { columnId, employeeName, color, moveCardLeft, moveCardRight } = props;
    const [cards, addCard] = useState([
        <Card
            task="abb"
            columnId={columnId}
            moveCardLeft={moveCardLeft}
            moveCardRight={moveCardRight}
        />,
        <Card
            task="bba"
            columnId={columnId}
            moveCardLeft={moveCardLeft}
            moveCardRight={moveCardRight}
        />
    ]);

    const newCard = () => {
        const newTask = window.prompt("Please Describe New Task");
        addCard([
            ...cards,
            <Card
                task={newTask}
                columnId={columnId}
                moveCardLeft={moveCardLeft}
                moveCardRight={moveCardRight}
            />
        ]);
    };

    return (
        <div className="column">
            <div className={`column-topper ${color}`}>
                <span>{employeeName}</span>
            </div>
            {cards.map(card => {
                {
                    return card;
                }
            })}
            <div onClick={newCard}>Click to Add New Card</div>
        </div>
    );
};

export default Column;
