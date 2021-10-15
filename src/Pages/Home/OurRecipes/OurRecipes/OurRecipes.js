import React, { useState } from 'react';
import useDataBreakfast from '../../../../hooks/data/useDataBreakfast';
import useDataDinner from '../../../../hooks/data/useDataDinner';
import useDataLunch from '../../../../hooks/data/useDataLunch';
import BreakFast from '../BreakFast/BreakFast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';

import './OurRecipes.css'

const OurRecipes = () => {
    const [active, setActive] = useState('lunch');
    const [lunchData] = useDataLunch();
    const [breakfastData] = useDataBreakfast();
    const [dinnerData] = useDataDinner();
    console.log(breakfastData);
    return (
        <div className="mt-3 ">
            <div className="mb-4 text-center">
                <button className="btn-recipe" onClick={() => setActive('breakfast')}>Breakfast</button>
                <button className="btn-recipe" onClick={() => setActive('lunch')}>lunch</button>
                <button className="btn-recipe" onClick={() => setActive('dinner')}>Dinner</button>
            </div>
            <div>
                {
                    active === 'lunch' && lunchData.map(lunch => <Lunch key={lunch.key} lunch={lunch}></Lunch>)
                }
                {
                    active === 'breakfast' && breakfastData.map(breakfast => <BreakFast key={breakfast.key} breakfast={breakfast}></BreakFast>)
                }
                {
                    active === 'dinner' && dinnerData.map(dinner => <Dinner key={dinner.key} dinner={dinner}></Dinner>)
                }
            </div>

        </div>
    );
};

export default OurRecipes;