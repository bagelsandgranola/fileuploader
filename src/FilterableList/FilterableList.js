import React from 'react';
import ReactDom from 'react-dom';
import ListItem from '../ListItem/ListItem';
class FilterableList extends React.Component {


    render() {

        const list = this.props.files
        .filter(file => file.name.includes(this.props.searchTerm) && (this.props.selectedFilter === 'All' || file.status === this.props.selectedFilter))
        .map((file, key) => <ListItem {...file} key={key}/>);
        

        return(

            <div className="FilterableList">
                {list}
            </div>
        )
    }
}
FilterableList.defaultProps = {
    files: []
  };
  

export default FilterableList;