export const dogsData = [
    {
        id: 1,
        name: 'Рекс',
        breed: 'Немецкая овчарка',
        weight: 35.5,
        birthDate: '2020-05-10',
        photoUrl: 'https://placehold.co/150x150/4CAF50/white?text=Рекс'
    },
    {
        id: 2,
        name: 'Белка',
        breed: 'Джек-рассел',
        weight: 8.2,
        birthDate: '2022-08-15',
        photoUrl: 'https://placehold.co/150x150/FF9800/white?text=Белка'
    },
    {
        id: 3,
        name: 'Бим',
        breed: 'Лабрадор',
        weight: 45.0,
        birthDate: '2019-03-03',
        photoUrl: 'https://placehold.co/150x150/2196F3/white?text=Бим'
    }
];

export const feedingsData = [
    { id: 1, dogId: 1, time: '2026-05-11 09:00', type: 'Сухой корм', name: 'Royal Canin', amount: 300 },
    { id: 2, dogId: 1, time: '2026-05-10 19:00', type: 'Сухой корм', name: 'Royal Canin', amount: 300 },
    { id: 3, dogId: 2, time: '2026-05-10 19:00', type: 'Натуральный', name: 'Говядина с гречкой', amount: 150 }
];

export const walksData = [
    { id: 1, dogId: 1, time: '2026-05-11 08:00', duration: 45, weather: 'Солнечно', intensity: 'Активная' },
    { id: 2, dogId: 1, time: '2026-05-10 18:00', duration: 30, weather: 'Облачно', intensity: 'Спокойная' },
    { id: 3, dogId: 2, time: '2026-05-10 08:00', duration: 40, weather: 'Солнечно', intensity: 'Активная' }
];

export const weightData = [
    { date: 'Янв', weight: 34 },
    { date: 'Фев', weight: 34.5 },
    { date: 'Мар', weight: 35 },
    { date: 'Апр', weight: 35.2 },
    { date: 'Май', weight: 35.0 },
    { date: 'Июн', weight: 35.5 },
    { date: 'Июл', weight: 35.8 }
];