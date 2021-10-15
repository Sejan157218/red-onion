import React from 'react';
import Header from '../../Share/Header/Header';
import Banner from '../Banner/Banner';
import OurRecipes from '../OurRecipes/OurRecipes/OurRecipes';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <OurRecipes></OurRecipes>
        </div>
    );
};

export default Home;