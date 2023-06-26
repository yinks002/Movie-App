import './card.css'

const Card = ({movieResult})=>{
    return(
        <>
      
          
               
                
                <header>
                {movieResult.map((moviess)=>(
                    <div className="bx">
                        <img title={moviess.Title} src={moviess.Poster} alt=""/>
                        <div className="content">
                            <h3>{moviess.Title}</h3>
                            <p>{moviess.Type}</p>
                            <h6><span>IMDB</span> <i className="bi bi-star-fill"></i>{moviess.imdbID}</h6>
                        </div>
                    </div>
                     ))}
              </header>
              
                
                
                


            
          
              
       
           
        </>
    )
}

export default Card;