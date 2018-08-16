import React, { Component } from 'react';
import '../App.css';

export default class SearchTodo extends Component {
    render() {
        return (
            <div className="div-class">
                <form onSubmit={(event) => this.props.handleSearchTodo(event)} className="form-class" style={{ "marginTop": "1rem"}}>
                    <span>Search By Keywords</span>
                    <input type="text" value={this.props.appState.searchState.value} 
                    placeholder="Search Todo Here" 
                    onChange={(event) => this.props.handleSearch(event)} className="input-field-class"/>
                </form>
                <form className="form-class" style={{ "marginTop": "1rem"}}>
                    <span>Search By Deadline</span>
                    <input type="date" value={this.props.appState.searchState.deadLine} 
                    onChange={(event) => this.props.handleSearchByDeadline(event)} className="input-field-class"/>
                    <button onClick={(event) => this.props.handleSearchTodoByDeadline(event)} className="submit-btn-class">Search</button>
                </form>
            </div>
        );
    }
}