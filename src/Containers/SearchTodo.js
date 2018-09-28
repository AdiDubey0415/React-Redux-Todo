import React, { Component } from 'react';
import '../App.css';

export default class SearchTodo extends Component {
    render() {
        return (
            <div className="form-class" style={{'margin' : '1rem'}}>
                <form className="search-form-class" onSubmit={(event) => this.props.handleSearchTodo(event)}>
                    <input type="text" value={this.props.appState.searchState.value} 
                    placeholder="Search Todo Here" style={{'marginRight' : '0.5rem'}}
                    onChange={(event) => this.props.handleSearch(event)} className="input-field-class-search" />
                </form>
                <form className="search-form-class">
                    <input type="date" value={this.props.appState.searchState.deadLine} 
                    onChange={(event) => this.props.handleSearchByDeadline(event)} className="input-field-class-search"/>
                    <button onClick={(event) => this.props.handleSearchTodoByDeadline(event)} className="submit-btn-class" style={{'marginLeft' : '0.5rem', 'marginRight' : '0.5rem'}}>Search</button>
                </form>
            </div>
        );
    }
}