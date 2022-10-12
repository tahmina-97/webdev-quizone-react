import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md lg:ml-20 xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Welcome to Quiz Zone Web Development!
                        </h1>

                        <p className="mt-6 mb-8 text-lg sm:mb-12">Let's build the future of the web, together.
                            <br className="hidden md:inline lg:hidden" />Take advantage of the latest modern technologies to build amazing web experiences for everyone
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to='/'>
                                <button className="px-8 py-3 text-lg font-semibold rounded  bg-indigo-600 text-white hover:bg-indigo-800 dark:bg-violet-400 dark:text-gray-900">Get Started</button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 lg:mr-20">
                        <img src="https://www.mambaui.com/assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 w-96" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;