import React, { Component} from 'react';

// State is a plain javascript object that is used to record and react
// to user events. Each class based component has it's own state object
// Whenever a components state is changed, it immediately re-renders.
// All of it's child components are also re-rendered.

class SearchBar extends Component {

  // this is how we initialize state in a class-based component
  constructor(props) {
    super(props);
    this.state = { term: 'surfboards' };
  }


  // Every class-based React Component must have a render function
  render() {
    return (
      <div className="search-bar">
        <input // Now a controlled component. The value is updated by the state
          value={ this.state.term }
          onChange={ event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
