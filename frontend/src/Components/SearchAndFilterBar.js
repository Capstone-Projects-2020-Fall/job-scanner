import React from 'react';
import '../Styling/SearchAndFilterBar.css';
import SearchIcon from '@material-ui/icons/Search';
const SearchAndFilterBar = ({ dropdown1, dropdown2, dropdown3 }) => {

    return (
        <div className="search-and-filter">
            <input></input>
            <button className='search'>
                <SearchIcon style={{height:'20px', color:'white'}}></SearchIcon> 
                </button>
            <div className="dropdown">
                <button onClick={myFunction} className="dropbtn">Filter</button>
                <div id="myDropdown" className="dropdown-content">
                    <a href="#">{dropdown1}</a>
                    <a href="#">{dropdown2}</a>
                    <a href="#">{dropdown3}</a>
                </div>
            </div>
        </div>
    )
}
const myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = (event)=> {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


export default SearchAndFilterBar;