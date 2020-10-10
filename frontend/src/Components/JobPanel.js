import React from 'react';
import '../Styling/JobPanel.css';
import JobPosting from './JobPosting';
import { database } from '../Resources/database';
const JobPanel = ({ jobscreen }) => {
    return (
        <div className="job-panel">
            {database.jobs.map((job, id) => {
                if (jobscreen === true) {
                    return (
                        <JobPosting key={id}
                            title={job[0].title}
                            description={job[1].description}
                            emergency={job[2].emergency}
                            favorite={job[3].favorite}
                            applied={job[4].applied}></JobPosting>
                    )
                }
                else{
                    return (
                        <JobPosting key={id}
                            title={job[0].title}
                            description={job[1].description}></JobPosting>
                    )
                }
            })}

        </div>
    )
}

export default JobPanel;