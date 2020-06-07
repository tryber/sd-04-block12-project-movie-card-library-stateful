import React, { Component } from 'react';


export default class SearchBar extends Component {

    searchText = event => {
        console.log();
    };
    
    onSearchTextChange = event => {
        console.log();
    };
    
    render () {
        return (
            <div>
                <form>
                    <label>
                        Inclui o texto:
                        <input type="text" value={this.searchText} onChange={this.onSearchTextChange}></input>
                    </label>
                </form>
            </div>
        );
    }

}