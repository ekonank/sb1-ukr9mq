export type Category = {
  id: string;
  name: string;
  icon: string;
  type: 'income' | 'expense';
};

export type PaymentMethod = {
  id: string;
  name: string;
  icon: string;
};

export type Transaction = {
  id: string;
  amount: number;
  date: Date;
  categoryId: string;
  paymentMethodId: string;
  notes?: string;
  receiptUrl?: string;
  type: 'income' | 'expense';
};