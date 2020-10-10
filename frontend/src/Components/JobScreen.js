import React from 'react';
import JobPanel from './JobPanel';
import ResumePanel from './ResumePanel';
import '../Styling/App.css';
import SearchScreen from './SearchScreen';
const JobSCreen =()=>{
    return(
        <div className="recommendation-screen">
            <ResumePanel className="resume-panel"></ResumePanel>
            <SearchScreen jobscreen={true}></SearchScreen>
        </div>
    )
}

export default JobSCreen;