import { Category } from '../types';
import { Banknote, ShoppingCart, Home, Car, Coffee, Gift, Heart, Book, Plane } from 'lucide-react';

export const defaultCategories: Category[] = [
  { id: '1', name: 'Salaire', icon: 'Banknote', type: 'income' },
  { id: '2', name: 'Courses', icon: 'ShoppingCart', type: 'expense' },
  { id: '3', name: 'Logement', icon: 'Home', type: 'expense' },
  { id: '4', name: 'Transport', icon: 'Car', type: 'expense' },
  { id: '5', name: 'Restaurants', icon: 'Coffee', type: 'expense' },
  { id: '6', name: 'Cadeaux', icon: 'Gift', type: 'expense' },
  { id: '7', name: 'Santé', icon: 'Heart', type: 'expense' },
  { id: '8', name: 'Education', icon: 'Book', type: 'expense' },
  { id: '9', name: 'Voyages', icon: 'Plane', type: 'expense' },
];