function DogCard({ dog, onViewDetail, onAddRecord }) {
    return (
        <div className="dog-card">
            <img src={dog.photoUrl} alt={dog.name} />
            <h3>{dog.name}</h3>
            <p>{dog.breed}, {dog.weight} кг</p>
            <div className="buttons">
                <button onClick={() => onViewDetail(dog)}>Подробнее</button>
                <button onClick={() => onAddRecord(dog)}>➕ Добавить запись</button>
            </div>
        </div>
    );
}

export default DogCard;