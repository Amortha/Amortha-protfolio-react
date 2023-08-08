import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const {id} = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
      fetch("/data.json")
        .then( res => res.json())
        .then( data => setDetails(data));
    }, []);

    const detail = details?.find(item => item._id === id);
console.log(detail);
    return (
        <div>
            {/* <h1>this is project{detail?.name}</h1>
            <img src={detail?.img} alt="pic" /> */}
        </div>
    );
};

export default ProjectDetails;