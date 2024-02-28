import {useState, useEffect} from 'react';
import '../../../Contents/CSSFiles/Projects.css';
import {Project} from './Project.js';

export const Projects = () => {

    const [projects,
        setProjects] = useState([]);
    const [noProjectFound,
        setNoProjectFound] = useState("");
    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/projects`).then(res => {
            return res.json();
        }).then((data) => {
            if (data) {
                setProjects(data)
            } else {
                setNoProjectFound('No project data found. Check of database exist')
            }

            return
        }).catch(err => {
            setNoProjectFound('No project data found. Check of database exist');
            console.log(err);
        })
    }, []);

    return (
        <div class="projects shadow p-3  bg-white rounded">
            {noProjectFound || projects
                ?.map((project) => (
                    <div>
                        <Project project={project}/>
                    </div>
                ))
}
        </div>
    )

};