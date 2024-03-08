import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignUp(){
    
    const apiUrl=import.meta.env.VITE_BACKEND_API;
    
    useEffect(()=>{
        async function call(){
        const config={
            method:'get',
            url:apiUrl+"/",
        };

        axios(config)
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{console.log(error);});
        }
        call();
    },[]);
    
    return(
            <div className="flex justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
              <div className="flex flex-col xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md ">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                  Sign up
                </h2>
                <p className="mt-2 text-base text-gray-600">
                  Already have an account?
                  <Link to="/signin" title="" className="font-medium text-black transition-all duration-200 hover:underline" >
                    Sign In
                  </Link>
                </p>
                <form action="#" method="POST" className="flex flex-col items-center mt-4 space-y-4">
                    <div className="w-full">
                      <label htmlFor="name" className="text-base font-medium text-gray-900">
                        Full Name
                      </label>
                      <div className="mt-2">
                        <input className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Full Name"
                          id="name"/>
                      </div>
                    </div>
                    <div className="w-full">
                      <label htmlFor="email" className="text-base font-medium text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          placeholder="Email"
                          id="email"/>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="text-base font-medium text-gray-900">
                          Password
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          placeholder="Password"
                          id="password"
                          autoComplete="on"
                        />
                      </div>
                    </div>
                    <button type="button" className="flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-6 text-white hover:bg-black/80">
                      Create Account
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                </form>
              </div>
            </div>
    );
}