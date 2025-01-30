import { addCar } from './database-schema.js';

const mockCars = [
    {
        car_id: '1',
        owner_id: '5e3f8fca-7abc-4aee-b7b5-ba30177a9f17',
        make: 'Toyota',
        model: 'Camry',
        year: 2020,
        color: 'White',
        mileage: 15000,
        location: 'Delhi',
        price_per_day: 50,
        cur_status: {
            status: 'available',
            start_date: '',
            end_date: ''
        }
    },
    {
        car_id: '2',
        owner_id: '5e3f8fca-7abc-4aee-b7b5-ba30177a9f18',
        make: 'Honda',
        model: 'Civic',
        year: 2019,
        color: 'Black',
        mileage: 20000,
        location: 'Mumbai',
        price_per_day: 45,
        cur_status: {
            status: 'available',
            start_date: '',
            end_date: ''
        }
    },
    {
        car_id: '3',
        owner_id: '5e3f8fca-7abc-4aee-b7b5-ba30177a9f19',
        make: 'Ford',
        model: 'Mustang',
        year: 2021,
        color: 'Red',
        mileage: 5000,
        location: 'Bangalore',
        price_per_day: 70,
        cur_status: {
            status: 'available',
            start_date: '',
            end_date: ''
        }
    }
];
for (const car of mockCars) {
    addCar(car);
}