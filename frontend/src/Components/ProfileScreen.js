import React from 'react';
import JobPanel from './JobPanel';
import ResumePanel from './ResumePanel';
import '../Styling/App.css';
import ProfileSetting from './ProfileSetting';
const profileScreen =()=>{
    return(
        <div className="recommendation-screen">
            <ResumePanel className="resume-panel" profileScreen={true}></ResumePanel>
            {/*change to setting*/}
            <ProfileSetting></ProfileSetting>
        </div>
    )
}

export default profileScreen;