import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'
import './style.css';
import CryptoJS  from 'crypto-js';
import img_thumbnail from './marvel_thumbnail.jpg'
 
function App() {
  let PRIV_KEY='b0d211cff47220a20065903a050ea3f6bd181ca2';
  let PUBLIC_KEY='277745e4ef1c9a5a7ac4c0b0cfaae15c';
  let ts=  1;
  let hash=  CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
  let base_url='https://gateway.marvel.com:443/v1/public/comics?';

  const [data, setData] = useState([]);
  const [render,setRenderFlag]= useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState(`${base_url}apikey=${PUBLIC_KEY}&ts=${ts}&hash=${hash}`,
  );
 
  useEffect(() => {
    const fetchData = async () => {
     setIsLoading(true);
   
      const result = await axios(url);
    
      setData(result.data.data.results);
      setIsLoading(false);
  
    };
 
    fetchData();
  }, [render,url]);
console.log(data)
const searchTerms=(dateFullQueryString,titleQuery)=>{

  setUrl(`${base_url}apikey=${PUBLIC_KEY}&ts=${ts}&hash=${hash}${dateFullQueryString}${titleQuery}`);
  setRenderFlag(!render);

}

  return (////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    <div className="wraper">
      <div className="img-header-container"></div>
          <div className="main-container">
            
      <SearchBar
      sTerms={searchTerms}
      />
            {isLoading ? (
              <div className="loader">Loading ...</div>
            ) : (

            data.length>0 ? 

              <ul className="list-container">
                {data.map((item,id) => (
                  <li className="single-item" key={id}>
                    <a href={item.urls[0].url} target="blank"  alt={item.title}>
                    <img className="img-thumbnail" src={img_thumbnail} alt={item.title}></img>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    </a>
                  </li>
                ))}
               </ul>
                        : <p className="no-results">NO RESULTS FOR THIS SEARCH</p>
             )}
          </div>
        
  </div>
  );
}
 
export default App;