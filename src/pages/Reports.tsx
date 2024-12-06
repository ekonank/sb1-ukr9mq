import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const mockExpenseData = [
  { name: 'Courses', value: 450 },
  { name: 'Transport', value: 200 },
  { name: 'Logement', value: 800 },
  { name: 'Loisirs', value: 150 },
  { name: 'Santé', value: 100 }
];

const mockMonthlyData = [
  { name: 'Jan', income: 2500, expenses: 1800 },
  { name: 'Fév', income: 2500, expenses: 2000 },
  { name: 'Mar', income: 2700, expenses: 1900 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function Reports() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Rapports</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">Répartition des dépenses</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockExpenseData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {mockExpenseData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">
            Revenus et dépenses mensuels
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockMonthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" name="Revenus" fill="#4CAF50" />
                <Bar dataKey="expenses" name="Dépenses" fill="#f44336" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
          <h2 className="text-xl font-semibold mb-6">Exporter les rapports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Période</h3>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="this-month">Ce mois</option>
                <option value="last-month">Mois dernier</option>
                <option value="this-year">Cette année</option>
                <option value="custom">Personnalisé</option>
              </select>
            </div>
            <div>
              <h3 className="font-medium mb-2">Format</h3>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="pdf">PDF</option>
                <option value="excel">Excel</option>
              </select>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Générer le rapport
          </button>
        </div>
      </div>
    </div>
  );
}