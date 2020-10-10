import React from 'react';
import './Styling/App.css';
import Navbar from './Components/Navbar';
import SearchScreen from './Components/SearchScreen';
import RecommendationScreen from './Components/RecommendationScreen';
import ProfileScreen from './Components/ProfileScreen';
import JobScreen from './Components/JobScreen'


class App extends React.Component {
  state = { screen: "Search" }
  callbackFunction = (childData) => {
    this.setState({ screen: childData });
  };
  switchRender=()=>{
    console.log(this.state.screen);
    switch(this.state.screen){
      case "Search": return <SearchScreen></SearchScreen>
      case "Rec": return <RecommendationScreen></RecommendationScreen>
      case "Profile": return <ProfileScreen></ProfileScreen>
      case "My Job": return <JobScreen></JobScreen>
      default: return <SearchScreen></SearchScreen>
    }
  }
  componentDidMount(){
    this.switchRender();
  }
  render() {
    return (
      <div className="App app-flex">
        <Navbar parentCallback = {this.callbackFunction} ></Navbar>
        {/*<SearchScreen></SearchScreen>*/}
        {this.switchRender()}
      </div>
    );
  }
}

export default App;
