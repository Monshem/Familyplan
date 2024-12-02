import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
const Signup = () => {
 
  const [user, setUser] = useState();
  const firebaseConfig = {
    apiKey: 'AIzaSyCxI7pS2bsXC5Cw8k6GsWJ3KWEIzaBZYYo',
    authDomain: 'firbase-course-6c749.firebaseapp.com',
    projectId: 'firbase-course-6c749',
    storageBucket: 'firbase-course-6c749.firebasestorage.app',
    messagingSenderId: '1000814978393',
    appId: '1:1000814978393:web:3651e6a2909617a175d848',
    measurementId: 'G-NQ279R3YQD',
  };


  initializeApp(firebaseConfig)

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleGoogleSignInwithPopup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user;
        setUser(result.user);
        console.log(token, user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <>
      <div className="py-12 mt-10 justify-self-center border-spacing-4 bg-gray-300   px-20  place-self-center">
        <h2 className="text-2xl font-bold text-center">SignUp</h2>
        <div className="mt-8 max-w-md">
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-gray-700">Full name</span>
              <input
                type="text"
                className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Name"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Email address</span>
              <input
                type="email"
                className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="john@example.com"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Password</span>
              <input
                type="passwird"
                className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="password"
              />
            </label>
            <div className="block">
              <div className="mt-2">
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="rounded p-1 border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:ring-offset-0"
                      checked
                    />
                    <span className="ml-2">Email me news and special offers</span>
                  </label>
                </div>
              </div>
            </div>
            <dib>
              <button
                className="btn-primary hover:text-cyan-500 transform duration-150 text-bold"
                onClick={() => handleGoogleSignInwithPopup()}
              >
                SignUp
              </button>
            </dib>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
