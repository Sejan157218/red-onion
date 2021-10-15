import React, { useEffect, useState } from 'react';

const useDataLunch = () => {
    const [lunchData, setLunchData] = useState([])
    useEffect(() => {
        fetch('./fakeDataForLunch.json')
            .then(res => res.json())
            .then(data => setLunchData(data))
    }, [])
    return [lunchData]
};

export default useDataLunch;