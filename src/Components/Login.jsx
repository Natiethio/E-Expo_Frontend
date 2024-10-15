import React from 'react'
import { useState, useEffect } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import google from '../Images/google.svg'
const Login = ({ open, setOpen, menuClose }) => {

    useEffect(() => {
        if (open) {
            menuClose();
        }
    }, [open, menuClose])


    return (
        <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
            <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm transition-opacity" />
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                    <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-40 my-32 sm:w-full sm:max-w-md">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                    <DialogTitle as="h3" className="text-2xl font-bold leading-6 text-blue-900 mb-5">
                                        Login to Your Account
                                    </DialogTitle>
                                    <div className="mt-4">
                                        <form>
                                            <div className="mb-4">
                                                <div className="col-span-full">
                                                    <label for="email" className="block text-sm font-medium leading-6 text-gray-700">Email</label>
                                                    <div className="mt-1">
                                                        <input type="text" name="email" id="email" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <div className="col-span-full">
                                                    <label for="password" className="block text-sm font-medium leading-6 text-gray-700">Password</label>
                                                    <div className="mt-1">
                                                        <input type="password" name="password" id="password" autocomplete="password" className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex space-x-20 sm:px-6 sm:justify-between ">
                            <button
                                type="button"
                                className="border inline-flex w-full justify-center rounded-md bg-blue-900 px-6 py-2 hover:text-blue-900 hover:bg-white hover:border-blue-900 hover:border:text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto">
                                Login
                            </button>
                            <a href="#" className="text-center text-gray-700 hover:text-blue-900 hover:font-bold transform transition-all ease-in-out">Forget Password?</a>
                        </div>
                        <div className="relative flex py-3 px-5 items-center">
                            <div className="flex-grow border-t border-blue-900"></div>
                            <span className="flex-shrink mx-4 text-blue-900">or</span>
                            <div className="flex-grow border-t border-blue-900"></div>
                        </div>

                        <div className="text-center">
                            <button
                                className="mt-3 shadow-sm border border-gray-300 text-md font-semibold text-black p-3 rounded-lg mb-4 hover:bg-gray-200  hover:border hover:border-gray-200 active:bg-black/75 active:border active:border-black/50 flex items-center justify-center mx-auto transform hover:scale-105 ease-out duration-500">
                                <img src={google} alt="Google logo" className="w-6 h-6 inline mr-2" />
                                <span className='font-semibold  font-sans'>Log in with Google</span>
                            </button>
                        </div>

                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default Login
