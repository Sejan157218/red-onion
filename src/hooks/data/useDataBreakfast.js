import { useEffect, useState } from "react";

const useDataBreakfast = () => {
    const [breakfastData, setbreakfastData] = useState([])
    useEffect(() => {
        fetch('./fakeDataForBreakFast.json')
            .then(res => res.json())
            .then(data => setbreakfastData(data))
    }, [])
    return [breakfastData]
};

export default useDataBreakfast;