import React from 'react';
import '../Styling/SearchScreen.css';
import SearchAndFilterBar from './SearchAndFilterBar';
import JobPanel from './JobPanel';
import '../Styling/App.css';

const SearchScreen=({jobscreen})=>{
return (
    <div className="search-screen">
        <SearchAndFilterBar dropdown1="Salary" dropdown2="Soonest" dropdown3="Latest"></SearchAndFilterBar>
        <JobPanel jobscreen={jobscreen}></JobPanel>
    </div>
)
}

export default SearchScreen;