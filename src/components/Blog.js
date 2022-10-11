import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {


    return (

        <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
            <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
                <div>
                    <h1 className="mb-6 text-2xl font-light text-gray-900 md:text-3xl">Basic Questions</h1>
                    <p className="mt-10 mb-3 font-semibold text-gray-900">What is the purpose of React Router? </p>
                    <p className="text-gray-600">
                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

                        By preventing a page refresh, and using Router or Link, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.
                    </p>
                    <p className="mt-10 mb-3 font-semibold text-gray-900">How does Context API work? </p>
                    <p className="text-gray-600">Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                        In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
                        Each component in Context is context-aware. Essentially, instead of passing props down through every single component on the tree, the components in need of a prop can simply ask for it, without needing intermediary helper components that only help relay the prop.

                    </p>

                </div>
                <div>
                    <h1 className="mb-6 text-2xl font-light md:text-3xl">Advanced Questions</h1>
                    <p className="mt-10 mb-3 font-semibold text-gray-900">Describe about useRef hook</p>
                    <p className="text-gray-600">
                        The <span className='font-bold'>useRef()</span> hook is the new addition in React 16.8. The useRef returns a mutable ref object. This object has a property called <span className='font-bold'>.current</span>. The value is persisted in the <span className='font-bold'>refContainer.current</span> property. These values are accessed from the current property of the returned object. The .current property could be initialized to the passed argument initialValue e.g. <span className='font-bold'>useRef(initialValue)</span>. The object can persist a value for a full lifetime of the component.

                        The hook <span className='font-bold'>useRef()</span> accepts one argument, which is the value to initialize the property current in the returned object.

                        In order to use the hook <span className='font-bold'>useRef()</span> , you will have to import it from the React package first.
                    </p>


                </div>
            </div>
            <div className="mt-16 text-center">
                <a href="https://reactrouter.com/en/main/start/tutorial" target="_blank" className="btn btn-link btn-lg btn-icon underline ">
                    <span>Learn more about React Router Dom</span>
                </a>
            </div>
        </section>

    );
};

export default Blog;