import React from 'react';

const TotalSum = ({items, deleteItem, inprima}) => {
  return (
    <div className='container'>
      <table className="mx-auto container mt-10 w-full">
        <thead className=''>
          <tr>
            <th className="border-t bg-slate-200 ">Description</th>
            <th className="border-t bg-slate-200">Amount</th>
            <th className="border-t bg-slate-200">Category</th>
          </tr>
        </thead>
        <tbody>
        
          {items.map((item, index) => 
               <tr key={index}>
              <td className="border-t border-b border-slate-700 ...">{item.description}</td>
              <td className="border-t border-b border-slate-700 ...">{item.amount }</td>
              <td className="border-t border-b border-slate-700 ...">{item.category}</td>
              <td ><button onClick={() => deleteItem(item.id)} className='p-1.5 border rounded hover:bg-red-300 transition duration-500'>Delete</button></td>
             </tr>
          )}
          <tr>
            <td><h3>Total</h3></td>
            <td><h3>BDT{items.reduce((total, item) => total + parseInt(item.amount), 0).toFixed(2)}</h3></td>
            <td><h3>{items.category}</h3></td>
          </tr>
         
        </tbody>
      </table>
      <div className='container'>
        <button className='py-2 px-5 mt-4 bg-green-400 transform duration-150 text-white font-semibold rounded-md shadow-md hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75' onClick={inprima}>Print-page</button>
      </div>
    </div>

  );
};

export default TotalSum;


