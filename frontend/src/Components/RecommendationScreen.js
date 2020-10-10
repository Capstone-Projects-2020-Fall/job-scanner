import React from 'react';
import JobPanel from './JobPanel';
import ResumePanel from './ResumePanel';
import '../Styling/App.css';
import SearchScreen from './SearchScreen';
const RecommendationScreen =()=>{
    return(
        <div className="recommendation-screen">
            <ResumePanel className="resume-panel"></ResumePanel>
            <SearchScreen></SearchScreen>
        </div>
    )
}

export default RecommendationScreen;