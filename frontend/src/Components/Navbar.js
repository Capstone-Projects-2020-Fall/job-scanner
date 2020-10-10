import React from 'react';
import '../Styling/Navbar.css';
import LogIn from './LogIn';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.sendData = this.sendData.bind(this);
    }
    sendData = (text) => {
        this.props.parentCallback(text);
    }
    render() {
        return (
            <div className="navbar" >
                    <LogIn></LogIn>
                <div><button onClick={()=>this.sendData("Search")}>Search</button></div>
                <div><button onClick={()=>this.sendData("Profile")}>Profile</button></div>
                <div><button onClick={()=>this.sendData("My Job")}>My Job</button></div>
                <div> <button onClick={()=>this.sendData("Rec")}>Rec</button></div>
            </div>
        )
    }
}
export default Navbar;
