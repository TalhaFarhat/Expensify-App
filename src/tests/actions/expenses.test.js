import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('add expense', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: '123abc'
    })
});
test('edit expense', () => {
    const edit = editExpense('123abc', { note: 'New note Value' });
    expect(edit).toEqual({
        type: "EDIT_EXPENSE",
        id: '123abc',
        updates: {
            note: 'New note Value'
        }
    })
});
test('should setup the add expense', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup expense with default values', () => {
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: '',
        id: expect.any(String)

    };
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
        }
    });
});