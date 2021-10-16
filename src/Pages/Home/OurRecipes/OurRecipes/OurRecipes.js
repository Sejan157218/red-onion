import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../../../hooks/data/useData';
import BreakFast from '../BreakFast/BreakFast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';


import './OurRecipes.css'

const OurRecipes = () => {
    const [active, setActive] = useState('lunch');
    const [lunchData,breakfastData,dinnerData] = useData();
    return (
        <div className="my-5 container m">
            <div className="mb-4 text-center">
               {
                   active === 'breakfast'  ? <button className="btn-recipe active-btn" onClick={() => setActive('breakfast')}>Breakfast</button> :
                   <button className="btn-recipe" onClick={() => setActive('breakfast')}>Breakfast</button>
               }
               {
                   active === 'lunch'  ? <button className="btn-recipe active-btn" onClick={() => setActive('lunch')}>Lunch</button> :
                   <button className="btn-recipe" onClick={() => setActive('lunch')}>Lunch</button>
               }
               {
                   active === 'dinner' ? <button className="btn-recipe active-btn" onClick={() => setActive('dinner')}>Dinner</button> :
                   <button className="btn-recipe" onClick={() => setActive('dinner')}>Dinner</button>
               }
                
            </div>
            <Row xs={1} md={3} className="g-4 container">
                {
                    active === 'lunch' && lunchData.map(lunch => <Lunch key={lunch.key} lunch={lunch}></Lunch>)
                }
                {
                    active === 'breakfast' && breakfastData.map(breakfast => <BreakFast key={breakfast.key} breakfast={breakfast}></BreakFast>)
                }
                {
                    active === 'dinner' && dinnerData.map(dinner => <Dinner key={dinner.key} dinner={dinner}></Dinner>)
                }
            </Row>

        </div>
    );
};

export default OurRecipes;