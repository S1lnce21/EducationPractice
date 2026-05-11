import { useState } from 'react';
import './App.css';
import '../styles/main.css';
import Header from './components/Header';
import DogList from './components/DogList';
import DogDetail from './components/DogDetail';
import AddRecord from './components/AddRecord';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import { dogsData, feedingsData, walksData } from './data';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedDog, setSelectedDog] = useState(null);
    const [notification, setNotification] = useState(null);
    
    const showNotification = (message, type = 'info') => {
        setNotification({ message, type });
    };
    
    const handleViewDetail = (dog) => {
        setSelectedDog(dog);
        setCurrentPage('detail');
    };
    
    const handleAddRecord = (dog) => {
        setSelectedDog(dog);
        setCurrentPage('add');
    };
    
    const handleSaveRecord = (data) => {
        console.log('Saved:', data);
        showNotification('Запись сохранена!', 'success');
        setCurrentPage('home');
    };
    
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return (
                    <>
                        <div className="welcome">
                            <h2>Добро пожаловать!</h2>
                            <p>Ведите дневник питания и прогулок вашей собаки</p>
                        </div>
                        <DogList dogs={dogsData} onViewDetail={handleViewDetail} onAddRecord={handleAddRecord} />
                    </>
                );
            case 'dogs':
                return <DogList dogs={dogsData} onViewDetail={handleViewDetail} onAddRecord={handleAddRecord} />;
            case 'detail':
                return <DogDetail dog={selectedDog} onBack={() => setCurrentPage('home')} />;
            case 'add':
                return <AddRecord dogs={dogsData} onBack={() => setCurrentPage('home')} onSave={handleSaveRecord} />;
            case 'stats':
                return <Statistics />;
            default:
                return <DogList dogs={dogsData} onViewDetail={handleViewDetail} onAddRecord={handleAddRecord} />;
        }
    };
    
    return (
        <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main className="container">
                {renderPage()}
            </main>
            <footer>
                <div className="container">
                    <p>© 2026 Учебная практика. Дипломный проект</p>
                </div>
            </footer>
            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}
        </>
    );
}

export default App;