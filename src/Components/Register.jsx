import React from 'react'
import { useState, useEffect } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Label } from '@headlessui/react'
import { FaTimes } from 'react-icons/fa'

const Register = ({ open, setOpen, menuClose, topbar, setTop }) => {

    useEffect(() => {
        if (open) {
            menuClose();
        }
    }, [open, menuClose])
    return (
        <Dialog open={open} onClose={() => {setOpen(false); setTop(true)}} className="relative z-10">
            <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm transition-opacity" />
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                    <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all md:mt-20 sm:mt-32 mt-40 sm:w-full sm:max-w-md">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-2">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                    <DialogTitle as="h3" className="flex justify-between md:text-2xl text-lg font-bold leading-6 text-blue-900 mb-5">
                                        Register Here
                                        <button onClick={() => {setOpen(false); setTop(true)}} className="border border-blue-900 hover:border-blue-950 border-spacing-10 rounded-xl text-blue-900 hover:text-blue-950">
                                            <FaTimes />
                                        </button>
                                    </DialogTitle>
                                    <div className="mt-4">
                                        <form>

                                            <div class="flex flex-wrap -mx-3 mb-6">
                                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                    <label for="fname" className="block text-sm font-medium leading-6 text-gray-700">First Name</label>
                                                    <div className="mt-1">
                                                        <input type="text" name="fname" id="fname" autocomplete="fname" className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6" />
                                                    </div>
                                                </div>
                                                <div class="w-full md:w-1/2 px-3">
                                                    <label for="lname" className="block text-sm font-medium leading-6 text-gray-700">Last Name</label>
                                                    <div className="mt-1">
                                                        <input type="text" name="lname" id="lname" autocomplete="lname" className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <div className="col-span-full">
                                                    <label for="email" className="block text-sm font-medium leading-6 text-gray-700">Email</label>
                                                    <div className="mt-1">
                                                        <input type="email" name="email" id="email" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <div className="col-span-full">
                                                    <label for="phone" className="block text-sm font-medium leading-6 text-gray-700">Phone</label>
                                                    <div className="mt-1">
                                                        <input type="number" name="phone" id="phone" autocomplete="phone" className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <div className="col-span-full">
                                                    <label for="password" className="block text-sm font-medium leading-6 text-gray-700">Password</label>
                                                    <div className="mt-1">
                                                        <input type="password" name="password" id="password" autocomplete="password" className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-1">
                                                <div className="col-span-full">
                                                    <label for="confpassword" className="block text-sm font-medium leading-6 text-gray-700">Confirm Password</label>
                                                    <div className="mt-1">
                                                        <input type="password" name="confpassword" id="confpassword" autocomplete="confpassword" className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-2 pb-1 sm:flex sm:flex-row-reverse sm:px-6 justify-center">
                            <button
                                type="button"
                                className="border inline-flex w-full justify-center rounded-md bg-blue-900 px-6 py-2 hover:text-blue-950 hover:bg-white hover:border-blue-900 hover:border:text-sm font-semibold text-white shadow-sm sm:ml-3 ">
                                Register
                            </button>
                            {/* <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="border inline-flex w-full justify-center rounded-md bg-white border-blue-900 text-blue-950  px-4 py-2 hover:text-white hover:bg-blue-900  hover:border:text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto">
                                Cancel
                            </button> */}
                        </div>
                        <div className='text-gray-700 text-center pb-4'>
                            Don't have account yet?{' '}
                            <a href="/" className="hover:underline-offset-8 font-semibold text-blue-900">
                                Login&nbsp;
                            </a>
                        </div>
                    </DialogPanel>
                </div>
            </div >
        </Dialog >

    )
}

export default Register
