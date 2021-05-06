import React, { useState } from 'react';

function SearchBar(props) {

    const [dateQuery_1, setDate_1_Query] = useState('1940');
    const [dateQuery_2, setDate_2_Query] = useState('2021');
    const [titleQuery, setTitleQuery] = useState('');
    const [dateFullQueryString, setDateFullQueryString]= useState('');



    return (
        <div className="search-bar-container">
        <label htmlFor="date_1">Release from:</label>
            <input 
                type="number"
                id="date_1" 
                name="date_1"
                min="1940" max="2022"
                placeholder="exam.1940"
                onChange={(e)=>{
                    setDate_1_Query(e.target.value) 
                    setDateFullQueryString(`&dateRange=${dateQuery_1}-01-01%2C${dateQuery_2}-01-01`)
                    
                }}
                    >
            </input>

            <label htmlFor="date_2">Till:</label>
            <input 
                type="number"
                id="date_2" 
                name="date_2"
                min="1950" max="2022"
                placeholder="examp.1950"
                onChange={(e)=>{
                    setDate_2_Query(e.target.value) 
                    setDateFullQueryString(`&dateRange=${dateQuery_1}-01-01%2C${dateQuery_2}-01-01`)
                }}
                >
            </input>

            <label htmlFor="titleQuery">Title starts with:</label>
            <input 
                type="text"
                id="titleQuery" 
                name="titleQuery"
                placeholder="examp.X-men"
                onChange={(e)=>{
                    setTitleQuery(`&titleStartsWith=${e.target.value}`)    
                }}
                >
            </input>

              <button type="button" onClick={()=>{props.sTerms(dateFullQueryString,titleQuery)}}>
              Search
              </button> 
</div>
    );
}

export default SearchBar;