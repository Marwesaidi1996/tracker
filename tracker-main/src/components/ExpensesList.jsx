import React from 'react';

const ExpensesList = ({ deleteExpense, data }) => {
const calculTotal = ()=>{
  let Total = 0
  for(let i of data ){
    Total+=i.amount
  }
  return Total
}



  return (
    <table className="table table-hover table-bordered mt-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.category}</td>
            <td>
              <button
                onClick={() => deleteExpense(item.id)}
                className="btn btn-sm btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr>
          <td colSpan={5} > Total: {calculTotal()}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpensesList;
