import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { feedingsData, walksData, weightData } from '../data';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

function Statistics() {
    const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const feedingAmounts = [320, 300, 350, 310, 330, 380, 350];
    const walkDurations = [45, 30, 50, 25, 60, 75, 40];
    
    const feedingChartData = {
        labels: weekDays,
        datasets: [{ label: 'Количество корма (г)', data: feedingAmounts, backgroundColor: '#4CAF50', borderRadius: 8 }]
    };
    
    const walksChartData = {
        labels: weekDays,
        datasets: [{ label: 'Длительность прогулки (мин)', data: walkDurations, borderColor: '#2196F3', backgroundColor: 'rgba(33, 150, 243, 0.1)', tension: 0.3, fill: true }]
    };
    
    const weightChartData = {
        labels: weightData.map(w => w.date),
        datasets: [{ label: 'Вес собаки (кг)', data: weightData.map(w => w.weight), borderColor: '#FF9800', backgroundColor: 'rgba(255, 152, 0, 0.1)', tension: 0.3, fill: true }]
    };
    
    return (
        <div>
            <h2>📊 Статистика и аналитика</h2>
            
            <div className="charts-container">
                <div className="chart-card">
                    <h3>📈 Расход корма по дням</h3>
                    <Bar data={feedingChartData} options={{ responsive: true }} />
                </div>
                <div className="chart-card">
                    <h3>🚶 Длительность прогулок</h3>
                    <Line data={walksChartData} options={{ responsive: true }} />
                </div>
            </div>
            
            <div className="charts-container">
                <div className="chart-card">
                    <h3>⚖️ Динамика веса</h3>
                    <Line data={weightChartData} options={{ responsive: true }} />
                </div>
                <div className="chart-card">
                    <h3>📋 Сводка</h3>
                    <table className="data-table">
                        <thead><tr><th>Показатель</th><th>Значение</th></tr></thead>
                        <tbody>
                            <tr><td>Средняя длительность прогулки</td><td>45 мин</td></tr>
                            <tr><td>Средний расход корма в день</td><td>320 г</td></tr>
                            <tr><td>Всего прогулок</td><td>28</td></tr>
                            <tr><td>Всего кормлений</td><td>56</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Statistics;