import React from 'react';

import axios from 'axios';

class Genres extends React.Component {
  state = {
    genreData: []
  };

  fetchGenreData = () => {
    var encodedURI = window.encodeURI(this.props.uri);
    return axios.get(encodedURI).then(response => {
      this.setState(() => {
        return {
          genreData: response.data
        };
      });
    });
  };

  componentDidMount() {
    this.fetchGenreData();
  }

  render() {
    console.log(this.state.genreData);
    if (this.state.genreData.length === 0) {
      return <div>Failed to fetch data from server</div>;
    }
    const genres = this.state.genreData.map(genre => (
      <div key={genre.name}>
        <em>{genre.name}</em> 
      </div>
    ));
    return <div>{genres}</div>;
  }
}

export default Genres;