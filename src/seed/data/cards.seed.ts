import { Car } from '../../cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'toyota',
    model: 'corolla',
  },
  {
    id: uuid(),
    brand: 'Chevrolet',
    model: 'D21',
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'cherokee',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
];
