import React from 'react';
import { defaultCategories } from '../data/categories';

export default function Settings() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Paramètres</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">Catégories</h2>
          <div className="space-y-4">
            {defaultCategories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between p-3 border rounded-md"
              >
                <div className="flex items-center">
                  <span className="text-gray-600">{category.name}</span>
                  <span
                    className={`ml-2 px-2 py-1 text-xs rounded-full ${
                      category.type === 'income'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {category.type === 'income' ? 'Revenu' : 'Dépense'}
                  </span>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  Modifier
                </button>
              </div>
            ))}
            <button className="w-full mt-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
              Ajouter une catégorie
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">Préférences</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Devise
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="EUR">Euro (€)</option>
                <option value="USD">Dollar ($)</option>
                <option value="GBP">Livre sterling (£)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Format de date
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Langue
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">Sécurité</h2>
          <div className="space-y-4">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Changer le mot de passe
            </button>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Activer l'authentification à deux facteurs
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">Sauvegarde</h2>
          <div className="space-y-4">
            <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Exporter les données
            </button>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Importer des données
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}