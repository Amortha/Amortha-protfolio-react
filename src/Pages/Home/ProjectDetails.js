import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])
    const details = project.filter(project => project._id == projectId)
    return (
        <div>
            <h1>this is project</h1>
        </div>
    );
};

export default ProjectDetails;