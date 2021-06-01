import React, { Component, useState } from 'react';

export default class SearchMovie extends Component {
    
    constructor() {
        super()

        this.state = {
            query: "",
            movies:[]
        }
    }

    searchMovies = async (e) => {
        e.preventDefault();

        
        const url 
        = 
        `https://api.themoviedb.org/3/search/movie?api_key=f3f2e4163eaa64b569245fd4fd1b4379&language=en-US&query=${this.state.query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            this.setState({movies: data.results});
            console.log("movies",this.state.movies)
        }catch(err) {
            console.error(err);
        }
    }


    
    render() {

        

        return (
            <div>

               <form className="form" onSubmit={this.searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query" 
                    placeholder="search for it" 
                    value = {this.state.query}  
                    onChange=
                    {(e) => 
                    this.setState( {query: e.target.value} )}  
                    />
                <button className="button" type="submit">Search</button>
               </form> 

               <div className="card-list">
                        {this.state.movies.map(movie => 
                                <p key={movie.id}>{movie.title}</p>
                        )}

               </div>

            </div>
        )
    }
}
