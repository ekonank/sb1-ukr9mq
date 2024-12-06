import React from 'react';
import { PlusCircle, MinusCircle, Wallet } from 'lucide-react';

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Tableau de bord</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Revenus totaux</p>
              <p className="text-2xl font-bold text-green-600">2,500 €</p>
            </div>
            <PlusCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Dépenses totales</p>
              <p className="text-2xl font-bold text-red-600">1,800 €</p>
            </div>
            <MinusCircle className="h-8 w-8 text-red-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Solde</p>
              <p className="text-2xl font-bold text-blue-600">700 €</p>
            </div>
            <Wallet className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Dernières transactions</h2>
          {/* Transaction list will go here */}
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Répartition des dépenses</h2>
          {/* Chart will go here */}
        </div>
      </div>
    </div>
  );
}