import React, { Component } from 'react';

class Search extends Component {

    handleSubmit = (event) => {
        this.props.handleSubmit(event)
    }

    handleChange = (event) => {
        this.props.handleChange(event)
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="form-inline justify-content-center" >
          <input type="text" className="form-control form-control-lg my-5 mx-2" placeholder="Enter title.." value={this.props.title} onChange={this.handleChange} />
          <input type="submit" className="btn btn-outline-success btn-lg my-5 mr-2" value="Search" />
        </form>

      );
    }
  }

  export default Search;
  