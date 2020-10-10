import React, {useState, useEffect} from 'react';
import RecommendationScreen from './RecommendationScreen';
import PersonalInformation from './PersonalInformation';
import RecommendationRequirement from './RecommendationRequirement';
import SearchHistory from './SearchHistory';

const ProfileSetting=()=>{
    //let renderInfo=<h1>Hello there</h1>;

    let [renderInfo, setRenderInfo] = useState();

    useEffect((component) => {
        // Update the document title using the browser API
        renderInfo = component;
      }, []);
    return(
        <div className="profile-setting">
            <p onClick={()=>setRenderInfo(<PersonalInformation />)}>Personal Information</p>
            <p onClick={()=>setRenderInfo(<RecommendationRequirement/>)}>Recommendation Requirement</p>
            <p onClick={()=>setRenderInfo(<SearchHistory></SearchHistory>)}>Search History</p>
            {renderInfo}
        </div>
    )
}

export default ProfileSetting;