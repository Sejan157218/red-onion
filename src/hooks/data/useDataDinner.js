import { useEffect, useState } from "react";

const useDataDinner = () => {
    const [dinnerData, setDinnerData] = useState([])
    useEffect(() => {
        fetch('./fakeDataForDinner.json')
            .then(res => res.json())
            .then(data => setDinnerData(data))
    }, [])
    return [dinnerData]
};

export default useDataDinner;