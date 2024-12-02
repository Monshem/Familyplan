import React from 'react';
import { BiSend } from "react-icons/bi";
function ContactUs() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', 'd937ca60-4126-46e9-adf8-c63d4f964952');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log('Success', res);
    }
  };
  return (
    <div className=" max-h-full bg-gradient-to-r from-sky-500 to-indigo-500 pb-48 pt-1">
      <div className=" py-12 mt-10 justify-self-center border-spacing-4 bg-gray-300   px-20 rounded-lg  place-self-center">
        <section className="" onSubmit={onSubmit}>
          <form action="" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <h2 className='justify-self-center text-xl font-bold'>Contact Form</h2>
            <div className="mt-8 max-w-md">
              <label>Full Name</label>
                          <input
                              name='name'
                type="text"
                placeholder="Enter your name"
                required
                
                className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mt-8 max-w-md">
              <label>Email Address</label>
                          <input
                              name='email'
                className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="email"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="mt-8 max-w-md">
              <label>Your Message</label>
                          <textarea
                name="message"
                id=""
                placeholder="Enter your message"
                required
                className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              className="p-1 mt-3 flex submit active:bg-red-300-700  hover:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 shadow-md animation duration-500 border border-sky-500 rounded-md"
              type=""
            >
               <BiSend className='mt-1 text-cyan-600'/> 
              Sent Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
