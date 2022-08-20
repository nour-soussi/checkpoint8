import MovieCard from "./MovieCard"



function MovieList({films,caractere,rate}) {
    return (
        
        <div className="Container"
        style={{
            display:"flex" ,
            justifyContent:"space-around",
            flexWrap:"wrap" ,
            width:'1400px'
            }} >
                {films
                .filter((elt) => (elt.title.toUpperCase().includes(caractere.toUpperCase())&& elt.rate>=rate))
                .map((elt) => <MovieCard key={elt.id} movie={elt}/>)}
                </div>

    );
}
export default MovieList;