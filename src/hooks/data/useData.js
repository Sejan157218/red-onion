import { useEffect, useState } from "react";

const useData = () => {
    const [breakfastData, setBreakfastData] = useState([]);
    const [lunchData, setLunchData] = useState([]);
    const [dinnerData, setDinnerData] = useState([]);


    useEffect(() => {
        fetch('./fakeDataForBreakFast.json')
            .then(res => res.json())
            .then(data => setBreakfastData(data))
    }, []);

    useEffect(() => {
        fetch('./fakeDataForLunch.json')
            .then(res => res.json())
            .then(data => setLunchData(data))
    }, []);

    useEffect(() => {
        fetch('./fakeDataForDinner.json')
            .then(res => res.json())
            .then(data => setDinnerData(data))
    }, []);
    return [breakfastData, lunchData, dinnerData];
};

export default useData;