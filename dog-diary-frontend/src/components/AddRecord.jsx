import { useState } from 'react';

function AddRecord({ dogs, onBack, onSave }) {
    const [recordType, setRecordType] = useState('feeding');
    const [selectedDog, setSelectedDog] = useState(dogs[0]?.id || '');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            dogId: selectedDog,
            type: recordType,
            time: formData.get('time'),
            ...(recordType === 'feeding' && {
                foodType: formData.get('foodType'),
                foodName: formData.get('foodName'),
                amount: parseInt(formData.get('amount'))
            }),
            ...(recordType === 'walk' && {
                duration: parseInt(formData.get('duration')),
                weather: formData.get('weather'),
                intensity: formData.get('intensity')
            })
        };
        onSave(data);
    };
    
    return (
        <div className="form-container">
            <h2 style={{ textAlign: 'center', color: '#4CAF50' }}>➕ Новая запись</h2>
            
            <div className="form-group">
                <label>Выберите собаку:</label>
                <select value={selectedDog} onChange={(e) => setSelectedDog(parseInt(e.target.value))}>
                    {dogs.map(dog => (
                        <option key={dog.id} value={dog.id}>{dog.name}</option>
                    ))}
                </select>
            </div>
            
            <div className="tabs">
                <button className={`tab-button ${recordType === 'feeding' ? 'active' : ''}`} onClick={() => setRecordType('feeding')}>🍖 Кормление</button>
                <button className={`tab-button ${recordType === 'walk' ? 'active' : ''}`} onClick={() => setRecordType('walk')}>🦮 Прогулка</button>
            </div>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Дата и время *</label>
                    <input type="datetime-local" name="time" required />
                </div>
                
                {recordType === 'feeding' && (
                    <>
                        <div className="form-group">
                            <label>Тип корма</label>
                            <select name="foodType">
                                <option>Сухой корм</option><option>Натуральный</option><option>Смешанный</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Наименование</label>
                            <input type="text" name="foodName" placeholder="Royal Canin..." />
                        </div>
                        <div className="form-group">
                            <label>Количество (грамм)</label>
                            <input type="number" name="amount" required />
                        </div>
                    </>
                )}
                
                {recordType === 'walk' && (
                    <>
                        <div className="form-group">
                            <label>Длительность (минуты)</label>
                            <input type="number" name="duration" required />
                        </div>
                        <div className="form-group">
                            <label>Погода</label>
                            <select name="weather">
                                <option>Солнечно</option><option>Облачно</option><option>Дождь</option><option>Снег</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Интенсивность</label>
                            <select name="intensity">
                                <option>Спокойная</option><option>Активная</option>
                            </select>
                        </div>
                    </>
                )}
                
                <button type="submit">💾 Сохранить запись</button>
                <button type="button" onClick={onBack} style={{ marginTop: '0.5rem', background: '#666' }}>Отмена</button>
            </form>
        </div>
    );
}

export default AddRecord;