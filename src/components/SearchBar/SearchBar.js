import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {term:'', location:'', sortBy:'best_match'};
    //this.renderSortByOptions = this.renderSortByOptions.bind(this);
    this.sortByOptions = {
      "BestMatch": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count"
    };
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption){
    if(this.state.sortBy===sortByOption){
      return 'active';
    }

    else{
      return '';
    }
  }

  handleSortByChange(sortByOption){
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(event){
    this.setState({term: event.target.value});
  }

  handleLocationChange(event){
    this.setState({location: event.target.value});
  }

  handleSearch(event){
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionsValue = this.sortByOptions[sortByOption];
      return <li key={sortByOptionsValue} className={this.getSortByClass(sortByOptionsValue)} onClick={this.handleSortByChange.bind(this, sortByOptionsValue)}>{sortByOption}</li>;
    });
  }

  

  render() {
    return (<div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit" onClick={this.handleSearch}>
          <a>Let's Go</a>
        </div>
      </div>
      );
  }
}

export default SearchBar
