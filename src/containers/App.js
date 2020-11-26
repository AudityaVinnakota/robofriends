import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots : [],
      searchText : ''
    }
  }
  onSearchChange = (e) => {
    this.setState({ searchText: e.target.value });
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'
    })
    .then((response) => {
      return response.json();
    }).then(users => {
      this.setState({ robots : users });
    });
  }
  render () {
    const { searchText, robots } = this.state;

    let filteredRobots = robots.filter(e => 
      e.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if(robots.length === 0) {
      return <div>Loading</div>;
    }

    if((!filteredRobots || filteredRobots.length === 0) ) {
      return (
        <div className="App">
          <h1>Robo Friends</h1>
          <SearchBox  text={searchText} onSearchChange={this.onSearchChange}/>
          <br/>
          <h1>No robots matches </h1>
        </div>)
    }

    return (
      <div className="tc">
        <h1 className="f2">Robo Friends</h1>
        <SearchBox  text={searchText} onSearchChange={this.onSearchChange}/>
        <br/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={ filteredRobots } />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
