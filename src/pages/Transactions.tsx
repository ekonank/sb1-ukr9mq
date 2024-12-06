import React from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const mockTransactions = [
  {
    id: '1',
    type: 'expense',
    amount: 45.99,
    category: 'Courses',
    date: new Date(2024, 2, 15),
    paymentMethod: 'Carte bancaire',
    notes: 'Courses hebdomadaires'
  },
  {
    id: '2',
    type: 'income',
    amount: 2500,
    category: 'Salaire',
    date: new Date(2024, 2, 1),
    paymentMethod: 'Virement',
    notes: 'Salaire mensuel'
  }
];

export default function Transactions() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Transactions</h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Rechercher..."
            className="px-4 py-2 border rounded-md"
          />
          <select className="px-4 py-2 border rounded-md">
            <option value="all">Tous les types</option>
            <option value="expense">Dépenses</option>
            <option value="income">Revenus</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Montant
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Catégorie
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Moyen de paiement
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockTransactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  {format(transaction.date, 'dd MMMM yyyy', { locale: fr })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {transaction.type === 'expense' ? (
                      <ArrowDownRight className="h-5 w-5 text-red-500 mr-2" />
                    ) : (
                      <ArrowUpRight className="h-5 w-5 text-green-500 mr-2" />
                    )}
                    {transaction.type === 'expense' ? 'Dépense' : 'Revenu'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`font-semibold ${
                      transaction.type === 'expense'
                        ? 'text-red-600'
                        : 'text-green-600'
                    }`}
                  >
                    {transaction.type === 'expense' ? '-' : '+'}
                    {transaction.amount.toFixed(2)} €
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {transaction.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {transaction.paymentMethod}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {transaction.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}