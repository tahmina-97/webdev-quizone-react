import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'

const ErrorPage = () => {
    return (
        <div>
            <section className="px-4 py-32 mx-auto max-w-7xl">
                <div className="w-full mx-auto lg:w-1/3">
                    <Link
                        to='/'
                        title='Webdev Quizone'
                        className='flex items-center'
                    >
                        <img className='h-8 w-8' src={logo} alt="coding-logo" />
                        <span className='ml-2 text-xl font-bold tracking-wide text-indigo-800 uppercase'>
                            Webdev Quizone
                        </span>
                    </Link>

                    <p className="mt-5 mb-3 text-xl font-bold text-black md:text-2xl">Page not found (404)</p>
                    <p className="mb-3 text-base font-medium text-gray-700">
                        The page you're looking for may have moved or no longer exists. Head back to our <Link className='underline' to='/'>homepage</Link>, or take a look at one of the sections below.
                    </p>
                </div>
            </section>


        </div>
    );
};

export default ErrorPage;