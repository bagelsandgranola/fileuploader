import React from 'react';
import ReactDom from 'react-dom';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';
import './SearchBar.css';

class SearchBar extends React.Component {

    render(){
        return(
            <div className="SearchBar">
                <div className="SearchBar__heading">
                    <h1> File Uploader </h1>
                </div>

                <div className="SearchBar__controls"> 
                    <SearchBox 
                    searchTerm={this.props.searchTerm}></SearchBox>
                    <FilterOptions
                    selectedFilter={this.props.selectedFilter}
                    handleFilterClick={this.props.handleFilterClick}></FilterOptions>
                </div>
            
            </div>
        )
    }
}
export default SearchBar;