import React, { useState } from 'react';
import { defaultCategories } from '../data/categories';

export default function NewTransaction() {
  const [type, setType] = useState<'income' | 'expense'>('expense');

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Nouvelle transaction</h1>
      
      <form className="bg-white p-6 rounded-lg shadow">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type de transaction
          </label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setType('expense')}
              className={`px-4 py-2 rounded-md ${
                type === 'expense'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Dépense
            </button>
            <button
              type="button"
              onClick={() => setType('income')}
              className={`px-4 py-2 rounded-md ${
                type === 'income'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Revenu
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Montant
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="0.00"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Catégorie
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
            {defaultCategories
              .filter((cat) => cat.type === type)
              .map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notes
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Enregistrer la transaction
        </button>
      </form>
    </div>
  );
}