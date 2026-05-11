function Header({ currentPage, setCurrentPage }) {
    return (
        <header>
            <div className="container">
                <h1>🐕 Дневник питания и прогулок</h1>
                <nav>
                    <a onClick={() => setCurrentPage('home')}>Главная</a>
                    <a onClick={() => setCurrentPage('dogs')}>Мои собаки</a>
                    <a onClick={() => setCurrentPage('stats')}>Статистика</a>
                    <span className="user-name">Гость</span>
                </nav>
            </div>
        </header>
    );
}

export default Header;