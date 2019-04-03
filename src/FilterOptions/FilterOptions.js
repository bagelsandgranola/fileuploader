import React from 'react';
import ReactDom from 'react-dom';
import './FilterOptions.css'


class FilterOptions extends React.Component {

    render(){
        return(
            <div className="FilterOptions">
                <input name="filter" type="radio" value="All" 
                checked={this.props.selectedFilter === "All"} onChange={ (e) => this.props.handleFilterClick(e.target.value) }/> All
                <input name="filter" class="radio" type="radio" value="Uploaded" 
                checked={this.props.selectedFilter === "Uploaded"} onChange={ (e) => this.props.handleFilterClick(e.target.value) }/> Uploaded
                <input name="filter" class="radio" type="radio" value="Synced" 
                checked={this.props.selectedFilter === "Synced"} onChange={ (e) => this.props.handleFilterClick(e.target.value) }/> Synced
                <input name="filter" class="radio" type="radio" value="New"
                checked={this.props.selectedFilter === "New"} onChange={ (e) => this.props.handleFilterClick(e.target.value) }/> New

            </div>
        )
    }
}

export default FilterOptions;