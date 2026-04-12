
export type Expense = {
    id: string;
    ExpenseMo: string;
    monto: number;
    categoria: string;
    Fecha: Date | null;
};

export type DateplusExpense = Omit<Expense, 'id'>;

export type categoriaData = {
    id: string;
    name: string;
    icon: string;
};
