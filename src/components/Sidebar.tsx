import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, PieChart, Settings, Plus, List } from 'lucide-react';

const navigation = [
  { name: 'Tableau de bord', icon: Home, path: '/' },
  { name: 'Nouvelle transaction', icon: Plus, path: '/transaction/new' },
  { name: 'Transactions', icon: List, path: '/transactions' },
  { name: 'Rapports', icon: PieChart, path: '/reports' },
  { name: 'Paramètres', icon: Settings, path: '/settings' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Revenu Dépense</h1>
      </div>
      <nav className="mt-6">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 ${
                location.pathname === item.path ? 'bg-gray-100 text-blue-600' : ''
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}