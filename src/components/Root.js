import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';


export const TopicsContext = createContext([]);
const Root = () => {
    const topicsData = useLoaderData();
    const subject = topicsData.data;

    return (

        <TopicsContext.Provider value={subject}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </TopicsContext.Provider>



    );
};

export default Root;