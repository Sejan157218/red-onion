import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import OurRecipes from '../OurRecipes/OurRecipes/OurRecipes';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurRecipes></OurRecipes>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;