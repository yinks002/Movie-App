import './App.css';
import Header from './components/header/header';
import Card from './components/card/card';
import { useState,useEffect } from 'react';

const App= ()=> {

  const API_LINK = 'https://www.omdbapi.com/?apikey=129d9a3e';

  

  const [movieResult, setMovieResult] = useState([
  ]);
  const [searchInput, setSearchInput] = useState('');


  const searchMovie  = async(name)=>{
    const apiResponse = await fetch(`${API_LINK}&s=${name}`);
    const movieData = await apiResponse.json();
    console.log(movieData.Search)
    setMovieResult(movieData.Search);
  }

  
  return (
    <>
    <Header
    searchMovie={searchMovie}
    searchInput={searchInput}
    setSearchInput = {setSearchInput}
    
    />
    {movieResult.length>0 ?(

     
        <Card movieResult={movieResult}/>
      
       
      
          
    
    
    
    ):(
      <>
      <center>
      <h2
      style={{color:"white"}}
      >No movies found.......</h2>
       <h2
      style={{color:"white",
      marginTop:"12px"
    
    
    }}
      >please proceed to search for movies.</h2>
      </center>
      </>
    )
  }
    
    
    
    </>
  );
}

export default App;
