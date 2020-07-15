import React, {Component} from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Search from './components/Search';


class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { 
      title: '',
      isLoaded: false,
      info: 'Search movies',
      movieResults: []
      
    };
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleSubmit(event) {

    let movies = [];

    this.setState({
      isLoaded: false,
      info: "Searching..."
    });
    
    const request = async () => {
      if (this.state.title){
        const response = await fetch("https://jsonmock.hackerrank.com/api/movies/search?Title=" + this.state.title);
        const result = await response.json();
  
        for (let index = 1; index <= result.total_pages; index++) {
          const response = await fetch("https://jsonmock.hackerrank.com/api/movies/search?Title=" + this.state.title + "&page=" + index);
          const result = await response.json();
          movies = [...movies, ...result.data];
        }
      }
    }
    
    request().then(() => {
      movies.sort((a,b) => {
        if(a.Title.toLowerCase() < b.Title.toLowerCase())
          return -1;
        else if(a.Title.toLowerCase() > b.Title.toLowerCase())
          return 1;
       return 0;
      });

      this.setState({
        isLoaded: true,
        movieResults: movies
      });

      if (movies.length === 0) {
        this.setState({info: 'No movies found :('});
      }   
    });

    event.preventDefault();
  }

  render() {
    const { title, isLoaded, movieResults, info } = this.state;
    return (
      <div className="App container">
        <Search title={title} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        
        { (isLoaded && movieResults.length !== 0) ? <MovieList list={movieResults} /> : <h2>{info}</h2> }
        <hr/>
      </div>
      

    );
  }
}

export default App;
