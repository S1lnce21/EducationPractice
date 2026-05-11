import DogCard from './DogCard';

function DogList({ dogs, onViewDetail, onAddRecord }) {
    return (
        <section>
            <h2>Мои собаки</h2>
            <div className="dog-cards">
                {dogs.map(dog => (
                    <DogCard
                        key={dog.id}
                        dog={dog}
                        onViewDetail={onViewDetail}
                        onAddRecord={onAddRecord}
                    />
                ))}
            </div>
        </section>
    );
}

export default DogList;