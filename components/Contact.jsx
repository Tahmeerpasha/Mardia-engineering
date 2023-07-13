'use client'
import React, { useState } from 'react';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform any necessary form submission logic here
        // For example, sending the form data to a server

        // Reset the form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="w-full sm:flex ">
            <div className="bg-gray-800 w-full pt-2 lg:text-center  sm:w-[35%] lg:w-[40vw] flex flex-col justify-center text-white ">
                <h1 className="text-3xl sm:font-bold  m-4 mb-1">Get in Touch</h1>
                <h2 className="text-xl mb-6 m-4  font-light">jainil@mardiacanada.com</h2>
            </div>
            <form onSubmit={handleSubmit} className=" p-5 sm:p-0 lg:p-40 lg:mr-0 sm:mr-10 lg:ml-20 lg:pl-20 m-5">
                <div className="w-full sm:flex">
                    <div className="mb-4 ">
                        <label htmlFor="firstName" className="block text-gray-700 font-light mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:border-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700 font-light mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 sm:ml-2 focus:outline-none focus:border-black"
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-light mb-2">
                        Email*
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 d focus:outline-none focus:border-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-light mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black"
                        rows={4}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-gray-800 w-full text-white hover:text-black hover:duration-500  font-light sm:font-bold py-2 px-4 rounded focus:outline-none hover:bg-white hover:border"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
