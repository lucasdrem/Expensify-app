import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpensesForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

//{props.match.params.id}
const EditExpensePage = (props) => {
  return (  
    <div>
      <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
          console.log('updated', expense);
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
     }}>Remover</button>
    </div>
    )
};
const mapStateToProps = (state, props) => {
  return  {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};
export default connect(mapStateToProps)(EditExpensePage);