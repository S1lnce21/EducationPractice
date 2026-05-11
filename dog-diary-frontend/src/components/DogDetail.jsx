import { useState } from 'react';
import { feedingsData, walksData } from '../data';

function DogDetail({ dog, onBack }) {
    const [activeTab, setActiveTab] = useState('feedings');
    
    const dogFeedings = feedingsData.filter(f => f.dogId === dog.id);
    const dogWalks = walksData.filter(w => w.dogId === dog.id);
    
    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <img src={dog.photoUrl} alt={dog.name} style={{ borderRadius: '50%', width: '150px', height: '150px', border: '3px solid #4CAF50' }} />
                <h2>{dog.name}</h2>
                <p>🐕 {dog.breed} | ⚖️ {dog.weight} кг | 🎂 {dog.birthDate}</p>
            </div>
            
            <div className="tabs-container">
                <div className="tabs">
                    <button className={`tab-button ${activeTab === 'feedings' ? 'active' : ''}`} onClick={() => setActiveTab('feedings')}>🍖 Кормления</button>
                    <button className={`tab-button ${activeTab === 'walks' ? 'active' : ''}`} onClick={() => setActiveTab('walks')}>🦮 Прогулки</button>
                </div>
                
                {activeTab === 'feedings' && (
                    <div className="tab-content active">
                        <table className="data-table">
                            <thead><tr><th>Дата</th><th>Тип</th><th>Наименование</th><th>Количество (г)</th></tr></thead>
                            <tbody>
                                {dogFeedings.map(f => (
                                    <tr key={f.id}>
                                        <td>{f.time}</td><td>{f.type}</td><td>{f.name}</td><td>{f.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                
                {activeTab === 'walks' && (
                    <div className="tab-content active">
                        <table className="data-table">
                            <thead><tr><th>Дата</th><th>Длительность (мин)</th><th>Погода</th><th>Интенсивность</th></tr></thead>
                            <tbody>
                                {dogWalks.map(w => (
                                    <tr key={w.id}>
                                        <td>{w.time}</td><td>{w.duration}</td><td>{w.weather}</td><td>{w.intensity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button className="btn-add" onClick={onBack} style={{ background: '#666' }}>← Назад</button>
            </div>
        </div>
    );
}

export default DogDetail;