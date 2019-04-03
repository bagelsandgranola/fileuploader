import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';
import './App.css'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      selectedFilter: 'All'
    }
  }

  handleFilterClick = (filter) => {
    console.log("filter selected")

    this.setState(
      {
        selectedFilter: filter,
      }
    )
  }

  handleSearch() {
    console.log("search entered")
  }


  render() {
    return (
      <div className="App">
        
        <SearchBar 
          searchTerm={this.state.searchTerm} 
          selectedFilter={this.state.selectedFilter}
          handleFilterClick={ (filter) => this.handleFilterClick(filter)}>
        </SearchBar>

        <FilterableList 
        files={this.props.files} 
        searchTerm={this.state.searchTerm} 
        selectedFilter={this.state.selectedFilter}>
        </FilterableList>

      </div>
    );
  }
}

export default App;

