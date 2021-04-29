import React from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import "./App.css";


const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {

    state = {
        header_name: "Name it!",
        isHeaderExpanded: true,
        suggestedNames: []
    }

    handleSearchTextChange = (searchText) => {
        const nameList = searchText ? name(searchText) : [];
        this.setState({
            isHeaderExpanded: !searchText,
            suggestedNames: nameList
        });
        ;
    }

    render() {
        return (
            <div>
                <Header headTitle={this.state.header_name} expandHeader={this.state.isHeaderExpanded} />
                <SearchBox onSearchTextChange={this.handleSearchTextChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}

// function App() {
//     return <h1>My react app - Name it</h1>
// }

export default App;