import React, { useEffect, useState } from 'react';

const useDataBlog = () => {
    const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        fetch('./fakeDataForBlog.json')
            .then(res => res.json())
            .then(data => setBlogData(data))
    }, []);
    return [blogData]
};

export default useDataBlog;