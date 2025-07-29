import React, { useState } from 'react';
import Navbar from './Navbar';
import NewsPage from './NewsPage';
import Footer from './Footer';

const Home = () => {
    const [category, setCatagory] = useState("general")
    // const [country, setCountry] = useState("us"); // default country


    return (
        <div className='bg-gray-100'>
            <Navbar setCatagory={setCatagory}  ></Navbar>
            <NewsPage category={category} ></NewsPage>
            <Footer></Footer>

        </div>
    );
};

export default Home;