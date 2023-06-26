import './header.css'

const Header = ({searchInput, setSearchInput,searchMovie})=>{
    return(

       <>
      <center>
        <h1>EveryMovie</h1>
        </center>
        <center>
        <div className="search">
        <input placeholder="Search for movies......"
        onChange={(e)=> setSearchInput(e.target.value)}
        value={searchInput}
        /> 
        <button onClick={()=>searchMovie(searchInput)}>search</button>

        </div>

        </center> 
       
       </>
        
       

       
    );
}

export default Header;

