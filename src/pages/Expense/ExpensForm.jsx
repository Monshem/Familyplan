import React from 'react';
import { useForm } from 'react-hook-form';

const ExpensForm = ({ addExpense }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form action="" className="container" onSubmit={handleSubmit(addExpense)}>
        <div className="justify-self-center font-bold text-xl mt-10">
          <h1 className=" font-bold text-xl mt-10 underline underline-offset-2 ">
            Total Sub
          </h1>
        </div>
        <div className="mt-4">
          <label htmlFor="description" className="block">
            Description
          </label>
          <input
            type="text"
            name=""
            id=""
            {...register('description', { minLength: 6, required: true })}
            className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          {errors.description?.type == 'required' && (
            <p className="text-rose-400">This fiels is required</p>
          )}
          {errors.description?.type == 'minLength' && (
            <p className="text-rose-400">
              This field requires at least 6 character
            </p>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="amount" className="block">
            Amount
          </label>
          <input
            type="amount"
            name=""
            id=""
            {...register('amount', { required: true })}
            className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          {errors.amount?.type == 'required' && (
            <p className="text-rose-400">This fiels is amount</p>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="categorice" className="flex">
            Categorice
          </label>
          <select
            name=""
            id=""
            className="mb-4 border px-2 py-2 border-slate-300 rounded-md text-sm shadow-sm"
            {...register('categoricy', { required: true })}
          >
            <option value=""></option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="groceries">Groceries</option>
          </select>
          {errors.categoricy?.type == 'required' && (
            <p className="text-rose-400">This fiels is amount</p>
          )}
        </div>
        <button className="py-1 px-8 transform duration-150 bg-violet-500 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpensForm;
